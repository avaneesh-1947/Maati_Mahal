import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { navLinks, restaurant } from "@/data/restaurant";
import { DecorativeDivider } from "./ui-kit";
import logo from "@/assets/logo.jpeg";
import finalLogo from "@/assets/finalLogo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8 lg:gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${restaurant.name} home`}>
          <img src={logo} alt={restaurant.name} className="size-10 shrink-0 rounded-full border border-gold/60 object-cover" />
          <span className="min-w-0">
            <img
              src={finalLogo}
              alt={restaurant.name}
              className="h-8 w-auto object-contain sm:h-10 lg:h-11 block"
              style={{
                filter: 'drop-shadow(0 0 1.5px white) drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
              }}
            />
            <span className="hidden text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase sm:block mt-0.5">
              Family  Restaurant
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-primary [&.active]:font-semibold [&.active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Reserve Table
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/reservations"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            Reserve
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 shrink-0 place-items-center rounded-md border border-border text-primary"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-border bg-background px-5 pb-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border/60 text-base font-medium text-foreground/85 [&.active]:font-semibold [&.active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${restaurant.phoneHref}`}
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold/60 text-sm font-semibold text-primary"
          >
            Call {restaurant.phone}
          </a>
        </div>
      ) : null}
      <DecorativeDivider className="mx-auto hidden" />
    </header>
  );
}
