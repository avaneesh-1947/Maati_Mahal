import { createFileRoute } from '@tanstack/react-router'
import interior from "@/assets/interior1.webp";
import thali from "@/assets/tilkahru_thali.webp";
import diningArea from "@/assets/hero2.webp";
import hospitality from "@/assets/matke_wali_lassi.webp";
import { ActionLink, ArchImage, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { restaurant } from "@/data/restaurant";
import { breadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/dining-experience")({
  component: DiningExperience,
  head: () => ({
    meta: [
      { title: `Dining Experience | Family Veg Restaurant in ${restaurant.city}` },
      {
        name: "description",
        content: `Step inside ${restaurant.name} in ${restaurant.city} — authentic village ambience, brass thali service, spacious family seating and warm hospitality.`,
      },
      { property: "og:title", content: `The Dining Experience | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Ambience, traditional serving and family dining at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: absoluteUrl("/dining-experience") },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/dining-experience") }],
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
    title: "Earthy Village Ambience & Warmth",
    body: "Traditional village-inspired decor and thoughtful lighting set the room. Comfortable family seating softens the experience, creating an authentic and welcoming rural haven where nothing shouts and everything belongs.",
    src: interior,
    alt: "Maati Mahal interior dining hall with traditional lighting and seating",
    width: 1600,
    height: 1104,
  },
  {
    eyebrow: "The Service",
    title: "Thalis Served the Traditional Way",
    body: "Your thali is laid out in the authentic order — curries, dal, hot breads, and cooling accompaniments. Refills arrive warmly and generously, honoring the sacred spirit of Atithi Devo Bhavah.",
    src: thali,
    alt: "Grand Tilkahru vegetarian thali feast served at Maati Mahal",
    width: 1600,
    height: 1104,
  },
  {
    eyebrow: "The Space",
    title: "Built for Family Celebrations",
    body: "Spacious seating designed for large family gatherings, grandparent-grandchild lunches, highway travelers, and festive celebrations with ample parking and open lawn space.",
    src: diningArea,
    alt: "Maati Mahal spacious dining and celebration lawn area",
    width: 1408,
    height: 1008,
  },
  {
    eyebrow: "The Culture",
    title: "Earthen Flavours & Kulhad Tradition",
    body: "Every sip of thick churned lassi and hot brewed tea is served in natural clay kulhads, keeping the genuine village tradition alive with every sip.",
    src: hospitality,
    alt: "Traditional Matke Wali Lassi served fresh in kulhad",
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
        title="An Evening at Maatimahal"
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
