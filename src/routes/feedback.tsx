import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { restaurant } from "@/data/restaurant";
import { breadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/feedback")({
  component: Feedback,
  head: () => ({
    meta: [
      { title: `Share Your Feedback | ${restaurant.name}, ${restaurant.city}` },
      {
        name: "description",
        content: `Tell us about your visit to ${restaurant.name} in ${restaurant.city}. Rate the food, service, cleanliness and ambience — your feedback reaches our team directly.`,
      },
      { property: "og:title", content: `Your Experience Matters | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Share compliments, suggestions or concerns with the team at ${restaurant.name}.`,
      },
      { property: "og:url", content: absoluteUrl("/feedback") },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/feedback") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("Feedback", "/feedback")) },
    ],
  }),
});

function Feedback() {
  return (
    <main>
      <PageHero
        breadcrumb="Feedback"
        eyebrow="Feedback"
        title="Your Experience Matters"
        intro="Compliments help us know what to protect. Suggestions help us grow. Complaints help us correct."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Tell Us Everything"
              title="Rate Your Visit"
              intro="Only your name and an overall rating are required — the rest is welcome, never expected."
            />
            <div className="mt-10">
              <FeedbackForm />
            </div>
          </div>
          <aside className="hairline-gold h-fit rounded-lg bg-secondary p-6">
            <h2 className="font-display text-2xl text-primary">How We Use It</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Every submission is read by the restaurant team, usually the same week.</li>
              <li>Feedback is kept private and is never published on this website.</li>
              <li>If you ask us to contact you, we will use the phone or email you provide.</li>
              <li>
                Urgent concerns are best raised on the spot, or by calling{" "}
                <a href={`tel:${restaurant.phoneHref}`} className="link-underline font-semibold text-terracotta">
                  {restaurant.phone}
                </a>
                .
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </main>
  );
}
