import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <As className="mt-3 text-3xl leading-tight text-primary sm:text-4xl md:text-[2.75rem]">
        {title}
      </As>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
      {align === "center" ? <DecorativeDivider className="mx-auto mt-6" /> : <DecorativeDivider className="mt-6" />}
    </div>
  );
}

export function DecorativeDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 16"
      className={`h-4 w-40 text-gold ${className}`}
      fill="none"
    >
      <path d="M0 8h56" stroke="currentColor" strokeWidth="1" />
      <path d="M104 8h56" stroke="currentColor" strokeWidth="1" />
      <path
        d="M80 1l7 7-7 7-7-7 7-7z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-terracotta"
      />
      <circle cx="66" cy="8" r="1.8" fill="currentColor" />
      <circle cx="94" cy="8" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function ArchImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`arch-frame bg-secondary ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  gold: "bg-saffron text-accent-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  outline: "hairline-gold bg-transparent text-primary hover:bg-secondary",
  ghostLight: "hairline-gold bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
} as const;

export type ButtonVariant = keyof typeof variants;

export function ActionLink({
  to,
  href,
  variant = "primary",
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}) {
  const cls = `${buttonBase} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button {...props} className={`${buttonBase} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function Tag({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "green" | "terracotta";
}) {
  const tones = {
    gold: "bg-gold/15 text-primary",
    green: "bg-forest/12 text-forest",
    terracotta: "bg-terracotta/12 text-terracotta",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Breadcrumb({ page }: { page: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex items-center gap-2">
        <li>
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-semibold text-primary">
          {page}
        </li>
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: string;
}) {
  return (
    <header className="surface-royal px-5 pt-12 pb-14 sm:px-8 md:pt-16 md:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="[&_a]:text-primary-foreground/70 [&_li]:text-primary-foreground/70">
          <Breadcrumb page={breadcrumb} />
        </div>
        <p className="eyebrow mt-6 text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          {intro}
        </p>
        <DecorativeDivider className="mt-7" />
      </div>
    </header>
  );
}
