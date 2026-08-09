import { createFileRoute } from "@tanstack/react-router";
import catering from "@/assets/rajasthani-catering-event-setup.jpg";
import { ArchImage, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { FeatureCard } from "@/components/DishCard";
import { EventForm } from "@/components/forms/EventForm";
import { eventServices, restaurant } from "@/data/restaurant";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/catering-events")({
  component: CateringEvents,
  head: () => ({
    meta: [
      { title: `Catering & Events | Pure Veg Rajasthani Catering in ${restaurant.city}` },
      {
        name: "description",
        content: `Pure vegetarian Rajasthani catering in ${restaurant.city} for weddings, family gatherings, corporate events and kitty parties. Send an enquiry to ${restaurant.name}.`,
      },
      { property: "og:title", content: `Catering & Events | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Traditional pure-veg catering and group bookings in ${restaurant.city}.`,
      },
      { property: "og:url", content: "/catering-events" },
    ],
    links: [{ rel: "canonical", href: "/catering-events" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Catering & Events", "/catering-events")),
      },
    ],
  }),
});

function CateringEvents() {
  return (
    <main>
      <PageHero
        breadcrumb="Catering & Events"
        eyebrow="Celebrations"
        title="Traditional Catering for Your Occasion"
        intro="From an intimate family lunch to a wedding feast — pure vegetarian menus, brass service and Rajasthani warmth."
      />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <ArchImage
            src={catering}
            alt="Rajasthani wedding catering buffet with brass serving vessels and marigold decorations in a haveli courtyard"
            width={1408}
            height={1008}
            className="aspect-4/3 w-full"
          />
          <SectionHeading
            align="left"
            eyebrow="How We Cater"
            title="Cooked Fresh, Served Warm"
            intro="We cook on site wherever possible, keep Jain preparations in separate vessels, and serve in brass. Menus are built around your guest count, timings and the season."
          />
        </div>
      </Section>

      <Section className="surface-sandstone">
        <SectionHeading eyebrow="Services" title="Occasions We Cater For" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventServices.map((s) => (
            <FeatureCard key={s.title} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      <Section id="enquiry">
        <SectionHeading
          align="left"
          eyebrow="Event Enquiry"
          title="Tell Us About Your Event"
          intro="Share a few details and our team will respond with menu options and availability."
        />
        <div className="mt-10 max-w-3xl">
          <EventForm />
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Prefer to talk it through? Call us on{" "}
          <a href={`tel:${restaurant.phoneHref}`} className="link-underline font-semibold text-terracotta">
            {restaurant.phone}
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
