import { createFileRoute } from "@tanstack/react-router";
import exteriorAbout from "@/assets/hero1.webp";
import diningAbout from "@/assets/hero2.webp";
import interior from "@/assets/interior1.webp";
import { ActionLink, ArchImage, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { FeatureCard } from "@/components/DishCard";
import { milestones, restaurant, values } from "@/data/restaurant";
import { breadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About ${restaurant.name} | Marwari Vegetarian Kitchen in ${restaurant.city}` },
      {
        name: "description",
        content: `The story behind ${restaurant.name} — a pure vegetarian kitchen in ${restaurant.city} preserving Maatimahal recipes, stone-ground spices and traditional hospitality.`,
      },
      { property: "og:title", content: `Our Story | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Heritage, philosophy and the family behind ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "article" },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("About", "/about")) },
    ],
  }),
});

function About() {
  return (
    <main>
      <PageHero
        breadcrumb="About"
        eyebrow="Our Story"
        title="Rooted in Rajasthan, Cooked with Care"
        intro="A family kitchen that grew into a dining room, without letting go of the recipes it started with."
      />

      <Section>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="md:hidden">
            <SectionHeading align="left" eyebrow="Heritage" title="A Register of Recipes" intro={restaurant.story} />
          </div>
          <ArchImage
            src={exteriorAbout}
            alt={`${restaurant.name} exterior`}
            width={1200}
            height={1408}
            className="aspect-4/5 w-full md:aspect-[4/5]"
          />
          <div>
            <div className="hidden md:block">
              <SectionHeading align="left" eyebrow="Heritage" title="A Register of Recipes" intro={restaurant.story} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:mt-0">
              Rajasthan's kitchens were shaped by its land — little water, long summers, and a genius for making
              lasting food from millet, lentils, dried berries and dairy. Ker sangri came from the desert.
              Baati came from the fire. Churma came from the wish to end every meal sweetly.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We cook that same way: masalas ground in-house, dals tempered in ghee, breads patted by hand and
              finished on the griddle to order.
            </p>
          </div>
        </div>
      </Section>

      <Section className="surface-sandstone">
        <SectionHeading eyebrow="What We Stand For" title="Our Values" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} title={v.title} body={v.body} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <ArchImage
            src={diningAbout}
            alt="Maati Mahal authentic village themed interior and family dining atmosphere"
            width={1408}
            height={1008}
            className="aspect-4/5 w-full"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Founder & Chef"
              title="Cooked by People Who Grew Up With It"
              intro="Our head cook learned these dishes at home, standing beside his mother at a wood-fired chulha in Nagaur."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              He still tastes every dal before service and still insists the churma be crushed by hand. Around
              him is a small team trained the same way — by watching, tasting and repeating.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our hospitality follows one old rule: <em>padharo sa</em>. Water and chai arrive before the menu,
              nobody is rushed, and no one leaves hungry.
            </p>
          </div>
        </div>
      </Section>

      <Section className="surface-sandstone">
        <SectionHeading eyebrow="OUR JOURNEY" title="Growing Across Cities" />
        <ol className="mx-auto mt-12 max-w-2xl space-y-8 sm:space-y-6">
          {milestones.map((m) => (
            <li key={m.year} className="flex flex-col sm:flex-row sm:gap-5 gap-2">
              <span className="font-display text-2xl font-semibold text-terracotta shrink-0 sm:w-20">{m.year}</span>
              <p className="border-l border-gold/50 pl-4 sm:pl-5 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {m.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-terracotta mb-4">ATITHI DEVO BHAVA</h3>
          <div className="mx-auto h-px w-12 bg-gold/50 mb-4"></div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            &quot;Every guest is welcomed with warmth and treated like family.&quot;
          </p>
        </div>
      </Section>

      <Section className="surface-royal text-center">
        <h2 className="font-display text-3xl sm:text-4xl">Come Sit With Us</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
          The dining room is at its warmest when it is full of families.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink to="/reservations" variant="gold">
            Reserve a Table
          </ActionLink>
          <ActionLink to="/dining-experience" variant="ghostLight">
            See the Experience
          </ActionLink>
        </div>
      </Section>

      <Section className="pb-4">
        <ArchImage
          src={interior}
          alt="Dining room with carved sandstone arches, maroon seating and brass lanterns"
          width={1600}
          height={1104}
          className="aspect-16/9 w-full"
        />
      </Section>
    </main>
  );
}
