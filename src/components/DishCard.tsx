import { Tag } from "./ui-kit";
import type { Dish } from "@/data/menu";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
      {dish.image ? (
        <div className="aspect-4/3 overflow-hidden bg-secondary">
          <img
            src={dish.image}
            alt={dish.imageAlt ?? dish.name}
            width={1008}
            height={756}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="green">Pure Veg</Tag>
          {dish.jain ? <Tag tone="gold">Jain Available</Tag> : null}
          {dish.bestseller ? <Tag tone="terracotta">Bestseller</Tag> : null}
        </div>
        <h3 className="mt-3 font-display text-xl text-primary">{dish.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
        <p className="mt-4 font-display text-lg font-semibold text-terracotta">₹{dish.price}</p>
      </div>
    </article>
  );
}

export function MenuRow({ dish }: { dish: Dish }) {
  return (
    <li className="flex flex-col gap-1 border-b border-border/70 py-5 sm:flex-row sm:items-start sm:gap-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-primary">{dish.name}</h3>
          <span className="text-forest text-xs font-semibold" aria-label="Pure vegetarian">
            ● Pure Veg
          </span>
          {dish.jain ? <Tag tone="gold">Jain</Tag> : null}
          {dish.bestseller ? <Tag tone="terracotta">Bestseller</Tag> : null}
          {dish.spice ? <span className="text-xs text-muted-foreground">Spice: {dish.spice}</span> : null}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      </div>
      <p className="shrink-0 font-display text-lg font-semibold text-terracotta sm:pt-0.5">₹{dish.price}</p>
    </li>
  );
}

export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="hairline-gold rounded-lg bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="font-display text-xl text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
