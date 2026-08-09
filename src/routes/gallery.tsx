import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import interior from "@/assets/rajasthani-restaurant-interior-jharokha-arches.jpg";
import chef from "@/assets/rajasthani-chef-traditional-cooking.jpg";
import family from "@/assets/rajasthani-family-dining-celebration.jpg";
import catering from "@/assets/rajasthani-catering-event-setup.jpg";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import signboard from "@/assets/image.png";
import { PageHero, Section } from "@/components/ui-kit";
import { galleryImages, type GalleryCategory, type GalleryImage } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: `Gallery | ${restaurant.name} Rajasthani Veg Restaurant Photos` },
      {
        name: "description",
        content: `Photos of food, interiors, culture and celebrations at ${restaurant.name}, ${restaurant.city} — traditional Rajasthani thalis and haveli-inspired dining rooms.`,
      },
      { property: "og:title", content: `Gallery | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Food, interiors and celebrations at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("Gallery", "/gallery")) },
    ],
  }),
});

const allImages: GalleryImage[] = [
  ...galleryImages,
  {
    src: interior,
    alt: "Restaurant interior with carved sandstone jharokha arches and brass lanterns",
    caption: "Carved arches in the main dining room",
    category: "Restaurant",
  },
  {
    src: chef,
    alt: "Rajasthani cook preparing baati over a clay chulha with brass utensils",
    caption: "Baati over the clay chulha",
    category: "Restaurant",
  },
  {
    src: hero1,
    alt: "Padmini Rasoi exterior and ambiance",
    caption: "Our beautiful exterior",
    category: "Restaurant",
  },
  {
    src: hero2,
    alt: "Padmini Rasoi dining area and experience",
    caption: "A place for every occasion",
    category: "Restaurant",
  },
  {
    src: signboard,
    alt: "Padmini Rasoi facilities",
    caption: "More than a meal",
    category: "Restaurant",
  },
  {
    src: family,
    alt: "Rajasthani family dining together over brass thalis with a folk musician nearby",
    caption: "A family celebration in progress",
    category: "Events",
  },
  {
    src: catering,
    alt: "Rajasthani wedding catering buffet with brass vessels and marigold decorations",
    caption: "Traditional catering setup for weddings",
    category: "Events",
  },
];

const filters: ("All" | GalleryCategory)[] = ["All", "Food", "Restaurant", "Culture", "Events"];

function Gallery() {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === "All" ? allImages : allImages.filter((i) => i.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, images.length, close]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <main>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Gallery"
        title="Our Food, Rooms and Celebrations"
        intro="A look at the plates we serve, the rooms we serve them in, and the evenings they belong to."
      />

      <Section>
        <ul className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <li key={f}>
              <button
                type="button"
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  setOpenIndex(null);
                }}
                className={`min-h-11 rounded-md px-5 text-sm font-semibold transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "hairline-gold bg-card text-primary hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <li key={`${image.src}-${image.caption}`} className={index % 5 === 0 ? "lg:row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group hairline-gold block h-full w-full overflow-hidden rounded-lg bg-secondary text-left"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                    index % 5 === 0 ? "h-64 lg:h-[33rem]" : "h-64"
                  }`}
                />
                <span className="block px-4 py-3 text-sm font-medium text-primary">{image.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-[oklch(0.2_0.02_40/0.92)] p-4"
          onClick={close}
        >
          <figure className="m-0 max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-secondary">{active.caption}</figcaption>
          </figure>
          <div className="mt-6 flex gap-3" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))}
              className="hairline-gold min-h-11 rounded-md px-5 text-sm font-semibold text-secondary"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="min-h-11 rounded-md bg-saffron px-5 text-sm font-semibold text-accent-foreground"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))}
              className="hairline-gold min-h-11 rounded-md px-5 text-sm font-semibold text-secondary"
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
