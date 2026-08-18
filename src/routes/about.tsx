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
      { title: `About ${restaurant.name} | Village Inspired Vegetarian Restaurant in ${restaurant.city}` },
      {
        name: "description",
        content: `The story behind ${restaurant.name} (also searched as Mati Mahal) — an authentic pure vegetarian kitchen in ${restaurant.city} on NH56, preserving traditional village recipes, stone-ground spices and warm hospitality.`,
      },
      { property: "og:title", content: `Our Story | ${restaurant.name} (${restaurant.city})` },
      {
        property: "og:description",
        content: `Heritage, culinary philosophy, and the family behind ${restaurant.name} in ${restaurant.city} on the Varanasi–Lucknow Highway.`,
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
        title="Rooted in the Village, Cooked with Care"
        intro="A family kitchen that grew into a highway dining destination, without letting go of the timeless village recipes it started with."
      />

      <Section>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="md:hidden">
            <SectionHeading align="left" eyebrow="Heritage" title="A Register of Village Recipes" intro={restaurant.story} />
          </div>
          <ArchImage
            src={exteriorAbout}
            alt={`${restaurant.name} exterior in ${restaurant.city}`}
            width={1200}
            height={1408}
            className="aspect-4/5 w-full md:aspect-[4/5]"
          />
          <div>
            <div className="hidden md:block">
              <SectionHeading align="left" eyebrow="Heritage" title="A Register of Village Recipes" intro={restaurant.story} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:mt-0">
              Village kitchens were shaped by patience, pure ingredients, and a deep respect for the land.
              Whole grains, freshly ground spices, slow-simmered lentils in earthen matkas, and baatis roasted
              over authentic fire. Maati Mahal (often searched as Mati Mahal or Maati Mehal) was born from the desire
              to bring this soulful, unhurried dining experience to families and highway travellers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We cook that same timeless way today: masalas ground in-house, dals tempered with pure desi ghee,
              breads hand-crafted to order, and thalis served with boundless warmth.
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
              eyebrow="Founder & Kitchen"
              title="Cooked by People Who Grew Up With It"
              intro="Our culinary craft was passed down across generations, perfected over wood-fired chulhas in traditional village households."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every dal is tasted before service, every baati is cooked to smoky perfection, and our signature
              Tilkahru Thali is prepared to honor every diner. Around us is a dedicated team trained the traditional
              way — with respect for purity, freshness, and authentic flavours.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our hospitality follows one sacred rule: <em>Atithi Devo Bhavah</em>. Fresh water and masala chai
              welcome you, nobody is rushed, and no one leaves unsatisfied.
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
