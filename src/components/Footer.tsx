import { Link } from "@tanstack/react-router";
import { fullAddress, navLinks, restaurant } from "@/data/restaurant";
import { DecorativeDivider } from "./ui-kit";

export function Footer() {
  return (
    <footer className="surface-royal px-5 pt-14 pb-8 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl">{restaurant.name}</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {restaurant.shortDescription}
            </p>
            <DecorativeDivider className="mt-5" />
            <div className="mt-5 flex gap-4 text-sm text-primary-foreground/80">
              <a href={restaurant.instagram} className="link-underline" rel="noreferrer noopener" target="_blank">
                Instagram
              </a>
              <a href={restaurant.facebook} className="link-underline" rel="noreferrer noopener" target="_blank">
                Facebook
              </a>
              <a href={restaurant.googleReviewUrl} className="link-underline" rel="noreferrer noopener" target="_blank">
                Google Reviews
              </a>
            </div>
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
          <p>
            Made with love by{" "}
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
