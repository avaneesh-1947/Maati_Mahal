import { Tag } from "./ui-kit";
import { Link } from "@tanstack/react-router";
import type { Dish } from "@/data/menu";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <Link to="/menu/$dishId" params={{ dishId: dish.id }} className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
      {dish.image ? (
        <div className="aspect-[2/1] sm:aspect-4/3 overflow-hidden bg-secondary">
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
      <div className="flex flex-1 flex-col p-2 sm:p-5">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <Tag tone="green" className="text-[9px] sm:text-xs px-1 py-0.5 sm:px-2.5 sm:py-1">Pure Veg</Tag>
          {dish.bestseller ? <Tag tone="terracotta" className="text-[9px] sm:text-xs px-1 py-0.5 sm:px-2.5 sm:py-1">Bestseller</Tag> : null}
        </div>
        <h3 className="mt-1 sm:mt-3 font-display text-sm sm:text-xl text-primary transition-colors group-hover:text-terracotta line-clamp-1 sm:line-clamp-none">{dish.name}</h3>
        <p className="mt-1 sm:mt-2 flex-1 text-[10px] sm:text-sm leading-snug sm:leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">{dish.description}</p>
      </div>
    </Link>
  );
}

export function MenuRow({ dish }: { dish: Dish }) {
  return (
    <li className="flex flex-col gap-1 border-b border-border/70 py-5 sm:flex-row sm:items-start sm:gap-6">
      <Link to="/menu/$dishId" params={{ dishId: dish.id }} className="group block min-w-0 flex-1 hover:bg-muted/50 p-3 -mx-3 rounded-lg transition-colors">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-primary transition-colors group-hover:text-terracotta">{dish.name}</h3>
          <span className="text-forest text-xs font-semibold" aria-label="Pure vegetarian">
            ● Pure Veg
          </span>
          {dish.bestseller ? <Tag tone="terracotta">Bestseller</Tag> : null}
          {dish.spice ? <span className="text-xs text-muted-foreground">Spice: {dish.spice}</span> : null}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      </Link>    </li>
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
