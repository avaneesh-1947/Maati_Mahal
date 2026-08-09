import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/ui-kit";
import { fullAddress, restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${restaurant.name}` },
      {
        name: "description",
        content: `How ${restaurant.name} collects, stores and uses the details you share through reservation, feedback, catering and contact forms.`,
      },
      { property: "og:title", content: `Privacy Policy | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Our approach to your personal information at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const sections = [
  {
    title: "What we collect",
    body: "Only what you type into our forms: your name, phone number, optional email, visit or event details, ratings and any message you write. We do not run advertising or marketing trackers on this website.",
  },
  {
    title: "Why we collect it",
    body: "To confirm your table, respond to a catering enquiry, reply to a message, or act on your feedback. Nothing more.",
  },
  {
    title: "How it is stored",
    body: "Submissions are stored in our secure managed database. The website itself cannot read past submissions — only the restaurant team can, through a private administrative view.",
  },
  {
    title: "Feedback and reviews",
    body: "Feedback is treated as private correspondence. We never publish your feedback, name or ratings on this website without your explicit permission.",
  },
  {
    title: "Sharing",
    body: "We do not sell, rent or trade your details. We share them only where legally required.",
  },
  {
    title: "Retention",
    body: "Reservation and enquiry records are kept only as long as needed for service and accounting, then removed.",
  },
  {
    title: "Your choices",
    body: "You may ask us to correct or delete the details you have submitted. Write to us and we will act on it.",
  },
];

function PrivacyPolicy() {
  return (
    <main>
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="Privacy"
        title="Your Details, Handled with Care"
        intro="A short, plain-language explanation of what we collect through this website and why."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl text-primary">Contact us about privacy</h2>
            <address className="mt-2 space-y-1 text-sm text-muted-foreground not-italic">
              <p>{restaurant.name}</p>
              <p>{fullAddress}</p>
              <p>
                <a href={`mailto:${restaurant.email}`} className="link-underline text-terracotta">
                  {restaurant.email}
                </a>{" "}
                ·{" "}
                <a href={`tel:${restaurant.phoneHref}`} className="link-underline text-terracotta">
                  {restaurant.phone}
                </a>
              </p>
            </address>
          </section>
        </div>
      </Section>
    </main>
  );
}
