import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/rajasthani-restaurant-interior-jharokha-arches.jpg";
import family from "@/assets/rajasthani-family-dining-celebration.jpg";
import thali from "@/assets/rajasthani-vegetarian-thali-brass-plate.jpg";
import culture from "@/assets/rajasthani-folk-culture-performance.jpg";
import { ActionLink, ArchImage, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { restaurant } from "@/data/restaurant";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/dining-experience")({
  component: DiningExperience,
  head: () => ({
    meta: [
      { title: `Dining Experience | Family Veg Restaurant in ${restaurant.city}` },
      {
        name: "description",
        content: `Step inside ${restaurant.name} in ${restaurant.city} — carved arches, brass thali service, family seating and traditional Rajasthani hospitality.`,
      },
      { property: "og:title", content: `The Dining Experience | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Ambience, traditional serving and family dining at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: "/dining-experience" },
    ],
    links: [{ rel: "canonical", href: "/dining-experience" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Dining Experience", "/dining-experience")),
      },
    ],
  }),
});

const chapters = [
  {
    eyebrow: "The Room",
    title: "Sandstone, Brass and Lamplight",
    body: "Carved jharokha arches frame the room. Brass lanterns cast a low, warm light, block-print cushions soften the seating, and the floor is inlaid with a single mandala at its centre. Nothing shouts; everything belongs.",
    src: interior,
    alt: "Restaurant interior with carved sandstone jharokha arches, maroon velvet seating and brass lanterns",
    width: 1600,
    height: 1104,
  },
  {
    eyebrow: "The Service",
    title: "Thalis Served the Old Way",
    body: "Your thali is laid out in the order it is meant to be eaten — dal and baati at the centre, sabzi and kadhi to the side, chutneys at the rim, sweets last. Refills arrive quietly, before you have to ask.",
    src: thali,
    alt: "Rajasthani vegetarian thali laid out in brass katoris with dal, baati, churma and breads",
    width: 1600,
    height: 1104,
  },
  {
    eyebrow: "The Table",
    title: "Built for Families",
    body: "Long tables for grandparents and grandchildren, high chairs without being asked, unhurried second helpings, and space for a birthday cake beside the ghevar.",
    src: family,
    alt: "Rajasthani family of three generations dining together over brass thalis",
    width: 1408,
    height: 1008,
  },
  {
    eyebrow: "The Evenings",
    title: "Folk Music and Ghoomar",
    body: "On selected weekend evenings, a sarangi player and a ghoomar dancer perform in the courtyard — quietly enough that conversation continues, close enough that children stand up to watch.",
    src: culture,
    alt: "Rajasthani folk dancer performing ghoomar beside brass lamps in a courtyard",
    width: 1008,
    height: 1008,
  },
];

function DiningExperience() {
  return (
    <main>
      <PageHero
        breadcrumb="Dining Experience"
        eyebrow="The Experience"
        title="An Evening in a Rajasthani Haveli"
        intro="Warm light, brass service and a room built for long meals with people you love."
      />

      {chapters.map((chapter, index) => (
        <Section key={chapter.title} className={index % 2 === 1 ? "surface-sandstone" : ""}>
          <div
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
              index % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="m-0">
              <ArchImage
                src={chapter.src}
                alt={chapter.alt}
                width={chapter.width}
                height={chapter.height}
                className="aspect-4/3 w-full"
              />
            </figure>
            <div>
              <SectionHeading align="left" eyebrow={chapter.eyebrow} title={chapter.title} intro={chapter.body} />
            </div>
          </div>
        </Section>
      ))}

      <Section className="surface-royal text-center">
        <h2 className="font-display text-3xl sm:text-4xl">Reserve Your Evening</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Tell us when you would like to visit and how many are joining you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink to="/reservations" variant="gold">
            Reserve a Table
          </ActionLink>
          <ActionLink to="/gallery" variant="ghostLight">
            View the Gallery
          </ActionLink>
        </div>
      </Section>
    </main>
  );
}
