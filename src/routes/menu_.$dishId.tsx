import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { Section, DecorativeDivider } from "@/components/ui-kit";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/menu_/$dishId")({
  loader: async ({ params }) => {
    const dish = menu.find((d) => d.id === params.dishId);
    if (!dish) {
      throw notFound();
    }
    return { dish };
  },
  component: DishPage,
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
  const { dish } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background pt-16 sm:pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-semibold tracking-wide text-terracotta hover:text-primary transition-colors mb-4 sm:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
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
                  {dish.jain && (
                    <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                      Jain Available
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
                    Experience the authentic taste of Rajasthan with our meticulously prepared {dish.name}. 
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
                    alt={dish.imageAlt || dish.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            )}
            
          </div>
        </Section>
      </div>
    </main>
  );
}
