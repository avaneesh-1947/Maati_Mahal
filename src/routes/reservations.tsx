import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { fullAddress, restaurant } from "@/data/restaurant";
import { breadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/reservations")({
  component: Reservations,
  head: () => ({
    meta: [
      { title: `Reserve a Table | ${restaurant.name}, ${restaurant.city}` },
      {
        name: "description",
        content: `Request a table at ${restaurant.name}, an authentic pure vegetarian restaurant in ${restaurant.city}. Share your date, time and guest count and our team will confirm.`,
      },
      { property: "og:title", content: `Table Reservations | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Reserve a table for family dining at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: absoluteUrl("/reservations") },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/reservations") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Reservations", "/reservations")),
      },
    ],
  }),
});

function Reservations() {
  return (
    <main>
      <PageHero
        breadcrumb="Reservations"
        eyebrow="Reservations"
        title="Your Table Awaits"
        intro="Tell us when you are coming and how many are joining you — we will keep a table ready."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reservation Enquiry"
              title="Request a Table"
              intro="Fields marked with an asterisk are required. We will call to confirm before your visit."
            />
            <div className="mt-10">
              <ReservationForm />
            </div>
          </div>

          <aside className="hairline-gold h-fit rounded-lg bg-secondary p-6">
            <h2 className="font-display text-2xl text-primary">Good to Know</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Large groups of 12 or more are best booked a day in advance.</li>
              <li>We can accommodate most special requests — mention them in your booking notes.</li>
              <li>Tables are held for 20 minutes past the reserved time.</li>
              <li>We are a fully vegetarian kitchen; outside food and alcohol are not served.</li>
            </ul>
            <hr className="my-6 border-gold/40" />
            <h3 className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Visit Us</h3>
            <address className="mt-3 space-y-2 text-sm text-muted-foreground not-italic">
              <p>{fullAddress}</p>
              <p>{restaurant.landmark}</p>
              <p>
                <a href={`tel:${restaurant.phoneHref}`} className="link-underline font-semibold text-terracotta">
                  {restaurant.phone}
                </a>
              </p>
            </address>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {restaurant.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-primary">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </main>
  );
}
