import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { Section, DecorativeDivider, Breadcrumb } from "@/components/ui-kit";
import { DishCard } from "@/components/DishCard";
import { ArrowLeft } from "lucide-react";
import { dishSchema, dishBreadcrumbSchema, absoluteUrl } from "@/lib/schema";

export const Route = createFileRoute("/menu_/$dishId")({
  loader: async ({ params }) => {
    const dish = menu.find((d) => d.id === params.dishId);
    if (!dish) {
      throw notFound();
    }
    // Get related dishes from the same category, excluding the current dish
    const relatedDishes = menu
      .filter((d) => d.category === dish.category && d.id !== dish.id)
      .slice(0, 3);
    return { dish, relatedDishes };
  },
  component: DishPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { dish } = loaderData;
    const title = `${dish.name} | ${restaurant.name}, ${restaurant.city}`;
    const description = dish.story
      ? `${dish.description} ${dish.story.slice(0, 100)}...`
      : `${dish.description} Served at ${restaurant.name}, a pure vegetarian restaurant in ${restaurant.city}.`;
    const dishPath = `/menu/${dish.id}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: `${dish.name} | ${restaurant.name}` },
        { property: "og:description", content: dish.description },
        { property: "og:url", content: absoluteUrl(dishPath) },
        { property: "og:type", content: "article" },
        { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(dishPath) }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(dishSchema(dish)) },
        { type: "application/ld+json", children: JSON.stringify(dishBreadcrumbSchema(dish.name, dishPath)) },
      ],
    };
  },
  notFoundComponent: () => {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
        <h2 className="font-display text-3xl text-primary">Dish Not Found</h2>
        <p className="mt-4 text-muted-foreground">The dish you are looking for does not exist.</p>
        <Link to="/menu" className="mt-8 text-terracotta underline underline-offset-4">
          Return to Menu
        </Link>
      </div>
    );
  },
});

function DishPage() {
  const { dish, relatedDishes } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background pt-16 sm:pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4 sm:mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-primary">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/menu" className="hover:text-primary">Menu</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-primary">
              {dish.name}
            </li>
          </ol>
        </nav>
        
        <Section className="py-2 sm:py-8 md:py-12">
          <div className={`grid gap-6 sm:gap-12 lg:gap-20 items-center ${dish.image ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"}`}>
            
            {/* Left Column: Content */}
            <div className="space-y-4 sm:space-y-8 order-2 md:order-1">
              <div>
                <p className="eyebrow text-gold">{dish.category}</p>
                <h1 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
                  {dish.name}
                </h1>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {dish.bestseller && (
                    <span className="inline-flex items-center rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold tracking-wider text-terracotta uppercase">
                      Bestseller
                    </span>
                  )}
                  {dish.spice && (
                    <span className="inline-flex items-center rounded-full bg-orange-600/10 px-3 py-1 text-xs font-semibold tracking-wider text-orange-700 uppercase">
                      {dish.spice}
                    </span>
                  )}
                </div>
              </div>

              <DecorativeDivider />

              <div className="prose prose-stone prose-lg">
                <p className="text-xl leading-relaxed text-primary-foreground/90 font-light italic">
                  "{dish.description}"
                </p>
                {dish.story ? (
                  <p className="mt-6 text-base leading-loose text-muted-foreground whitespace-pre-line">
                    {dish.story}
                  </p>
                ) : (
                  <p className="mt-6 text-base leading-loose text-muted-foreground">
                    Experience the authentic taste of village-inspired cuisine with our meticulously prepared {dish.name}. 
                    Every ingredient is sourced with care and crafted following traditional recipes that have been passed down through generations. 
                    Whether you are dining in or taking it away, this dish promises a warm, comforting embrace of village-style culinary heritage.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Image */}
            {dish.image && (
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl order-1 md:order-2">
                <div className="aspect-[4/3] md:aspect-square w-full relative group">
                  <img
                    src={dish.image}
                    alt={dish.imageAlt || `${dish.name} served at ${restaurant.name}`}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            )}
            
          </div>
        </Section>

        {/* Related Dishes Section */}
        {relatedDishes.length > 0 && (
          <Section className="border-t border-border/50">
            <h2 className="font-display text-2xl text-primary sm:text-3xl">
              More from {dish.category}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {relatedDishes.map((related) => (
                <DishCard key={related.id} dish={related} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/menu"
                className="inline-flex min-h-11 items-center rounded-md border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                View Full Menu
              </Link>
            </div>
          </Section>
        )}
      </div>
    </main>
  );
}
