import { Link } from "@tanstack/react-router";
import { fullAddress, navLinks, restaurant } from "@/data/restaurant";
import { DecorativeDivider } from "./ui-kit";



export function Footer() {
  return (
    <footer className="surface-royal px-5 pt-14 pb-8 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-2xl">{restaurant.name}</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {restaurant.shortDescription}
            </p>
            <DecorativeDivider className="mt-5" />
            <div className="mt-5 flex gap-4 text-sm text-primary-foreground/80">
              <a href={restaurant.instagram} className="link-underline flex items-center gap-1.5" rel="noreferrer noopener" target="_blank">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a href={restaurant.facebook} className="link-underline flex items-center gap-1.5" rel="noreferrer noopener" target="_blank">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a href={restaurant.googleReviewUrl} className="link-underline flex items-center gap-1.5" rel="noreferrer noopener" target="_blank">
                Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Quick Links</h3>
            <nav aria-label="Footer" className="mt-4">
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="link-underline hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Visit Us</h3>
            <address className="mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/80 not-italic">
              <p>{fullAddress}</p>
              <p>
                <a href={`tel:${restaurant.phoneHref}`} className="link-underline">
                  {restaurant.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${restaurant.email}`} className="link-underline">
                  {restaurant.email}
                </a>
              </p>
            </address>
            <ul className="mt-4 space-y-1 text-sm text-primary-foreground/70">
              {restaurant.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-primary-foreground/90">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Location</h3>
            <div className="mt-4 w-full h-48 rounded-lg overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
              <iframe
                title={`Map showing ${restaurant.name} in ${restaurant.city}`}
                src={restaurant.mapEmbedUrl}
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} {restaurant.name}, {restaurant.city}. Pure vegetarian kitchen. All rights
            reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Made with <span role="img" aria-label="love">❤️</span> by
            <a
              href="https://www.needysolutions.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground font-medium underline underline-offset-2 transition-colors"
            >
              needysolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
