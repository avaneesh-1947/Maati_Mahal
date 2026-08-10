import { createFileRoute, Link } from "@tanstack/react-router";
import heroThali from "@/assets/rajasthani-vegetarian-thali-brass-plate.jpg";
import interior from "@/assets/rajasthani-restaurant-interior-jharokha-arches.jpg";
import chef from "@/assets/rajasthani-chef-traditional-cooking.jpg";
import family from "@/assets/rajasthani-family-dining-celebration.jpg";
import culture from "@/assets/rajasthani-folk-culture-performance.jpg";
import sweets from "@/assets/rajasthani-sweets-ghevar-malpua.jpg";
import heroMobile from "@/assets/hero1.png";
import exteriorExp from "@/assets/hero2.png";
import signboard from "@/assets/image.png";
import { ActionLink, DecorativeDivider, Section, SectionHeading } from "@/components/ui-kit";
import { DishCard } from "@/components/DishCard";
import { menuCategories, signatureDishes } from "@/data/menu";
import { fullAddress, restaurant, trustHighlights } from "@/data/restaurant";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: `${restaurant.name} | Authentic Village Inspired Vegetarian Restaurant in ${restaurant.city}`,
      },
      {
        name: "description",
        content: `Experience authentic village inspired vegetarian cuisine at ${restaurant.name} in ${restaurant.city}. Explore traditional thalis, family dining, warm hospitality and timeless village flavours.`,
      },
      {
        property: "og:title",
        content: `${restaurant.name} | Pure Veg Village Inspired Restaurant in ${restaurant.city}`,
      },
      {
        property: "og:description",
        content: `Traditional village thalis, Jain-friendly options and warm family dining in ${restaurant.city}.`,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          1. PHOTOGRAPHY-FIRST HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[600px] overflow-hidden sm:min-h-[45vh] lg:min-h-[30vh]">
        {/* Background image */}
        <img
          src={heroThali}
          alt="Traditional Rajasthani vegetarian thali served in brass plates with dal baati churma, gatte and bajra roti"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Directional text-safe gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,5,5,0.5)_0%,rgba(15,5,5,0.75)_50%,rgba(15,5,5,0.95)_100%)] sm:bg-[linear-gradient(90deg,rgba(15,5,5,0.85)_0%,rgba(15,5,5,0.65)_35%,rgba(15,5,5,0.25)_70%,rgba(15,5,5,0.05)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[600px] flex-col justify-center px-5 pb-6 pt-20 sm:min-h-[45vh] sm:px-8 sm:pb-8 sm:pt-24 lg:min-h-[35vh] lg:pb-12 lg:pt-16">
          <div className="mx-auto w-full max-w-6xl fade-up">
            <div className="max-w-[650px]">
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#E0B876] sm:text-[13px] sm:tracking-[3px] drop-shadow-md">
                Authentic · Pure Vegetarian · VILLAGE INSPIRED
              </p>
              <h1 
                className="mt-3 font-display text-[42px] leading-[1.1] text-white sm:mt-4 sm:text-[64px] lg:text-[76px]"
                style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
              >
                A Taste Rooted in   <br className="sm:hidden" />the Village
              </h1>

              <div className="mt-5 sm:mt-6">
                <h2 
                  className="text-[26px] leading-tight text-[#F3D085] sm:text-[34px]"
                  style={{ fontFamily: '"Yatra One", serif', textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.8)' }}
                >
                  गाँव की माटी, गाँव का स्वाद
                </h2>
                <p 
                  className="mt-1 text-lg text-white sm:mt-2 sm:text-[22px]"
                  style={{ fontFamily: '"Yatra One", serif', textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.8)' }}
                >
                  शुद्धता एवं स्वाद ही हमारी पहचान
                </p>
              </div>

              <DecorativeDivider className="mt-6 sm:mt-8" />
              
              {/* Desktop Description */}
              <p className="mt-5 hidden max-w-[620px] text-[17px] leading-[1.6] text-white sm:block lg:text-[19px]">
                Experience timeless vegetarian recipes, traditional flavours and warm village
                hospitality — served in brass, cooked with patience, in the heart of {restaurant.city}.
              </p>
              
              {/* Mobile Description */}
              <p className="mt-5 max-w-[320px] text-[16px] leading-[1.6] text-white sm:hidden">
                Traditional village flavours, pure vegetarian recipes, and warm family hospitality.
              </p>
              
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <ActionLink to="/menu" variant="primary" className="flex-1 !text-white sm:flex-none">
                  Explore Menu
                </ActionLink>
                <ActionLink to="/reservations" variant="ghostLight" className="flex-1 !border-white/45 !text-white sm:flex-none">
                  Reserve a Table
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. RESTAURANT INFO BAR
          ═══════════════════════════════════════════ */}
      <section className="border-b border-border/50 bg-background px-5 py-4 sm:px-8 sm:py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary/90 sm:text-xs">
            <span>Pure Vegetarian</span>
            <span className="text-gold/60">•</span>
            <span>Family Dining</span>
            <span className="text-gold/60">•</span>
            <span>Village Cuisine</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <div className="text-center sm:text-right">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/80">Open Daily</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {restaurant.hours[0].time}
              </p>
            </div>
            <a
              href={`tel:${restaurant.phoneHref}`}
              className="inline-flex min-h-9 items-center justify-center rounded border border-border px-4 text-[11px] font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-secondary"
            >
              Call Restaurant
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. OUR STORY — editorial two-column
          ═══════════════════════════════════════════ */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={heroMobile}
              alt="Padmini Rasoi restaurant exterior"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Rooted in the Village, Cooked with Care"
              intro={restaurant.story}
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every dal is tempered by hand. Every baati meets the fire before it meets the ghee. Nothing is
              hurried, because the recipes we inherited were never written for haste.
            </p>
            <ActionLink to="/about" variant="outline" className="mt-7">
              Read Our Story
            </ActionLink>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          4. OUR MENU — signature dishes showcase
          ═══════════════════════════════════════════ */}
      <Section className="surface-sandstone">
        <SectionHeading
          eyebrow="Our Menu"
          title="Traditional Flavours, Prepared with Patience"
          intro="A handful of preparations that guests return for, season after season."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        {/* Category pills */}
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {menuCategories.map((category) => (
            <li key={category}>
              <Link
                to="/menu"
                className="inline-flex min-h-10 items-center rounded-full border border-gold/40 bg-card px-5 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/70 sm:text-sm"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <ActionLink to="/menu" variant="gold">
            View Complete Menu
          </ActionLink>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          5. THE EXPERIENCE — full-bleed editorial
          ═══════════════════════════════════════════ */}
      <Section className="surface-royal">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="eyebrow text-gold">The Experience</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              A Place for Every Occasion
            </h2>
            <DecorativeDivider className="mt-6" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Sandstone jharokhas, brass lanterns and block-print cushions set the room. Thalis arrive in
              polished brass, served in the order they were meant to be eaten — and refilled without being
              asked.
            </p>
            <ul className="mt-7 space-y-2 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gold text-xs">◇</span>
                Family seating for celebrations large and small
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gold text-xs">◇</span>
                Traditional serving in brass thalis and katoris
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gold text-xs">◇</span>
                Village-inspired décor and folk-art detail
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gold text-xs">◇</span>
                Live ghoomar evenings on selected weekends
              </li>
            </ul>
            <ActionLink to="/dining-experience" variant="ghostLight" className="mt-8">
              Step Inside
            </ActionLink>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={exteriorExp}
              alt="Padmini Rasoi dining experience and exterior"
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          6. OUR PROMISE — trust items, minimal
          ═══════════════════════════════════════════ */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Promise</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Pure, Honest, Unhurried
          </h2>
          <DecorativeDivider className="mx-auto mt-6" />
        </div>
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-10">
          {trustHighlights.map((item) => (
            <li key={item} className="flex flex-col items-center gap-2 text-center">
              <span className="text-xl text-gold">◇</span>
              <span className="text-sm font-semibold text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═══════════════════════════════════════════
          7. MORE THAN A RESTAURANT — signboard + facilities
          ═══════════════════════════════════════════ */}
      <Section className="surface-sandstone">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={signboard}
              alt="Padmini Rasoi facilities signboard: Pure Veg, Breakfast, Multi Cuisine, Rest Room, Banquet, Marriage Lawn"
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover md:aspect-[3/4]"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Facilities"
              title="More Than a Restaurant"
              intro="Whether you are stopping by for a morning breakfast, planning a family gathering, or celebrating a grand wedding — our spaces are designed to host you."
            />
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm font-semibold text-primary sm:text-base">
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Pure Vegetarian</li>
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Multi Cuisine Food</li>
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Breakfast Options</li>
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Banquet Hall</li>
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Marriage Lawn</li>
              <li className="flex items-center gap-2"><span className="text-gold">◇</span> Rest Rooms</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          8. GALLERY PREVIEW — editorial grid
          ═══════════════════════════════════════════ */}
      <Section>
        <SectionHeading eyebrow="Gallery" title="A Glimpse of Padmini Rasoi" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {[
            { src: interior, alt: "Carved sandstone arches and maroon seating in the dining room", span: "md:col-span-2" },
            { src: chef, alt: "Rajasthani cook preparing baati over a traditional clay chulha", span: "" },
            { src: family, alt: "Rajasthani family enjoying a vegetarian thali dinner together", span: "" },
            { src: culture, alt: "Rajasthani folk dancer performing ghoomar in a lamp-lit courtyard", span: "" },
            { src: sweets, alt: "Ghevar and malpua Rajasthani sweets with saffron and pistachio", span: "" },
          ].map((image) => (
            <div
              key={image.alt}
              className={`gallery-hover overflow-hidden rounded-[16px] ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover sm:h-56 md:h-64"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ActionLink to="/gallery" variant="outline">
            Open Full Gallery
          </ActionLink>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          9. GUEST REVIEWS
          ═══════════════════════════════════════════ */}
      <Section className="surface-sandstone">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What Our Guests Say</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
            Warm Words, Honest Feedback
          </h2>
          <DecorativeDivider className="mx-auto mt-6" />
          <div className="mt-10 space-y-8">
            {[
              {
                quote: "Authentic food and a wonderful family dining experience. The thali took us straight back to the village.",
                name: "A Happy Family",
                stars: 5,
              },
              {
                quote: "The best pure vegetarian restaurant we have visited. Honest flavours, warm service, and the food is unforgettable.",
                name: "A Returning Guest",
                stars: 5,
              },
            ].map((review) => (
              <blockquote key={review.name} className="mx-auto max-w-xl">
                <p className="text-lg text-gold" aria-label={`${review.stars} out of 5 stars`}>
                  {"★".repeat(review.stars)}
                </p>
                <p className="mt-3 font-display text-lg leading-relaxed text-primary italic sm:text-xl">
                  "{review.quote}"
                </p>
                <footer className="mt-3 text-sm font-semibold text-muted-foreground">
                  — {review.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <ActionLink href={restaurant.googleReviewUrl} variant="outline" className="mt-10">
            See Reviews on Google
          </ActionLink>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          10. VISIT US — location + map
          ═══════════════════════════════════════════ */}
      <Section id="location">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visit Us"
              title={`Pure Veg Dining in ${restaurant.city}`}
              intro={`${restaurant.landmark} — easy to reach, easy to park, and always worth the visit.`}
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-primary">Address</dt>
                <dd className="mt-1 text-muted-foreground">{fullAddress}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Opening Hours</dt>
                <dd className="mt-1 space-y-1 text-muted-foreground">
                  {restaurant.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${restaurant.phoneHref}`} className="link-underline text-terracotta">
                    {restaurant.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={restaurant.directionsUrl} variant="outline">
                Get Directions
              </ActionLink>
              <ActionLink to="/contact" variant="outline">
                Contact Details
              </ActionLink>
            </div>
          </div>
          <iframe
            title={`Map showing ${restaurant.name} in ${restaurant.city}`}
            src={restaurant.mapEmbedUrl}
            loading="lazy"
            className="hairline-gold h-80 w-full rounded-lg md:h-full"
          />
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          11. RESERVATION CTA
          ═══════════════════════════════════════════ */}
      <Section className="surface-royal text-center">
        <p className="eyebrow text-gold">Reservations</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Your Table Awaits</h2>
        <DecorativeDivider className="mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          Join us for an authentic taste of the village. Share your date, time and number of guests — our
          team will call you to confirm.
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
