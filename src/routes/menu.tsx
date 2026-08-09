import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ActionLink, PageHero, Section } from "@/components/ui-kit";
import { MenuRow } from "@/components/DishCard";
import { menu, menuCategories } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: `Menu | Rajasthani Thali & Pure Veg Dishes in ${restaurant.city}` },
      {
        name: "description",
        content: `Browse the complete pure vegetarian menu at ${restaurant.name}, ${restaurant.city} — Rajasthani specials, thalis, Jain preparations, breads, desserts and beverages with prices.`,
      },
      { property: "og:title", content: `Menu | ${restaurant.name}` },
      {
        property: "og:description",
        content: `Rajasthani specials, thalis and Jain-friendly dishes at ${restaurant.name}, ${restaurant.city}.`,
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(menuSchema()) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("Menu", "/menu")) },
    ],
  }),
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [jainOnly, setJainOnly] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((dish) => {
      if (category !== "All" && dish.category !== category) return false;
      if (jainOnly && !dish.jain) return false;
      if (!q) return true;
      return (
        dish.name.toLowerCase().includes(q) ||
        dish.description.toLowerCase().includes(q) ||
        dish.category.toLowerCase().includes(q)
      );
    });
  }, [query, category, jainOnly]);

  const grouped = useMemo(
    () =>
      menuCategories
        .map((c) => ({ category: c, dishes: results.filter((d) => d.category === c) }))
        .filter((group) => group.dishes.length > 0),
    [results],
  );

  return (
    <main>
      <PageHero
        breadcrumb="Menu"
        eyebrow="Pure Vegetarian Menu"
        title="Every Dish, Cooked to Order"
        intro="Rajasthani specials, generous thalis and Jain preparations made in separate vessels. Prices are in Indian Rupees and include no service charge."
      />

      <Section>
        <div className="flex flex-col gap-5">
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="menu-search" className="text-sm font-semibold text-primary">
                Search the menu
              </label>
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “baati”, “thali” or “kachori”"
                className="min-h-11 w-full rounded-md border border-input bg-card px-3.5 text-base"
              />
            </div>
            <label className="flex min-h-11 items-center gap-3 text-sm font-medium text-primary">
              <input
                type="checkbox"
                checked={jainOnly}
                onChange={(e) => setJainOnly(e.target.checked)}
                className="size-5 accent-[var(--primary)]"
              />
              Jain options only
            </label>
          </div>

          <div>
            <h2 className="sr-only">Menu categories</h2>
            <ul className="-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1 pb-1">
              {["All", ...menuCategories].map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                    className={`min-h-11 rounded-md px-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                      category === c
                        ? "bg-primary text-primary-foreground"
                        : "hairline-gold bg-card text-primary hover:bg-secondary"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" role="status">
          Showing {results.length} of {menu.length} dishes.
        </p>

        {grouped.length === 0 ? (
          <div className="hairline-gold mt-10 rounded-lg bg-secondary p-8 text-center">
            <h2 className="font-display text-2xl text-primary">No dishes matched that search</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different word, or clear the filters to see the full menu.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setJainOnly(false);
              }}
              className="mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-10 space-y-14">
            {grouped.map((group) => (
              <section key={group.category} aria-labelledby={`cat-${group.category.replace(/\s+/g, "-")}`}>
                <h2
                  id={`cat-${group.category.replace(/\s+/g, "-")}`}
                  className="border-b-2 border-gold/50 pb-2 font-display text-2xl text-primary sm:text-3xl"
                >
                  {group.category}
                </h2>
                <ul>
                  {group.dishes.map((dish) => (
                    <MenuRow key={dish.id} dish={dish} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </Section>

      <Section className="surface-royal text-center">
        <h2 className="font-display text-3xl sm:text-4xl">Tasted Something You Like?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Reserve a table, or call us for Jain and festival requirements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink to="/reservations" variant="gold">
            Reserve a Table
          </ActionLink>
          <ActionLink href={`tel:${restaurant.phoneHref}`} variant="ghostLight">
            Call {restaurant.phone}
          </ActionLink>
        </div>
      </Section>
    </main>
  );
}
