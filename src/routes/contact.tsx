import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ContactForm } from "@/components/forms/ContactForm";
import { fullAddress, restaurant } from "@/data/restaurant";
import { breadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: `Contact & Location | ${restaurant.name}, ${restaurant.city}` },
      {
        name: "description",
        content: `Address, phone, WhatsApp and opening hours for ${restaurant.name} — a pure veg Maatimahal restaurant in ${restaurant.city}, near ${restaurant.landmark}.`,
      },
      { property: "og:title", content: `Contact ${restaurant.name}` },
      {
        property: "og:description",
        content: `Find us in ${restaurant.city}: ${fullAddress}. Call, message or get directions.`,
      },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("Contact", "/contact")) },
    ],
  }),
});

function Contact() {
  const whatsappHref = `https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}`;

  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact"
        title={`Find Us in ${restaurant.city}`}
        intro={`${restaurant.landmark}. Call ahead for large groups and festival timings.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Details" title={restaurant.name} />
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-primary">Address</dt>
                <dd className="mt-1 text-muted-foreground">{fullAddress}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Landmark</dt>
                <dd className="mt-1 text-muted-foreground">{restaurant.landmark}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${restaurant.phoneHref}`} className="link-underline text-terracotta">
                    {restaurant.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">WhatsApp</dt>
                <dd className="mt-1">
                  <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className="link-underline text-terracotta">
                    {restaurant.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${restaurant.email}`} className="link-underline text-terracotta">
                    {restaurant.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Opening Hours</dt>
                <dd className="mt-1 space-y-1 text-muted-foreground">
                  {restaurant.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={`tel:${restaurant.phoneHref}`}>Call Restaurant</ActionLink>
              <ActionLink href={restaurant.directionsUrl} variant="outline">
                Get Directions
              </ActionLink>
            </div>
          </div>

          <iframe
            title={`Map showing ${restaurant.name} in ${restaurant.city}`}
            src={restaurant.mapEmbedUrl}
            loading="lazy"
            className="hairline-gold h-80 w-full rounded-lg lg:h-full"
          />
        </div>
      </Section>

      <Section className="surface-sandstone">
        <SectionHeading
          align="left"
          eyebrow="Write to Us"
          title="Send a Message"
          intro="Questions about menus, group bookings or timings — we read every message."
        />
        <div className="mt-10 max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
