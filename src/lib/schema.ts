import { restaurant, fullAddress } from "@/data/restaurant";
import { menu, type Dish } from "@/data/menu";

/** Helper to build absolute URLs from paths */
export function absoluteUrl(path: string): string {
  const base = restaurant.siteUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/** Sitewide Restaurant / LocalBusiness structured data. Never fabricate ratings or awards. */
export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "FoodEstablishment"],
  "@id": absoluteUrl("/#restaurant"),
  name: restaurant.name,
  description: restaurant.shortDescription,
  telephone: restaurant.phone,
  email: restaurant.email,
  servesCuisine: [...restaurant.cuisine],
  priceRange: restaurant.priceRange,
  hasMenu: absoluteUrl("/menu"),
  url: absoluteUrl("/"),
  image: absoluteUrl("/favicon.jpeg"),
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.addressLine,
    addressLocality: restaurant.city,
    addressRegion: restaurant.state,
    postalCode: restaurant.pin,
    addressCountry: restaurant.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: restaurant.geo.latitude,
    longitude: restaurant.geo.longitude,
  },
  openingHoursSpecification: restaurant.hoursSpec.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...spec.days],
    opens: spec.opens,
    closes: spec.closes,
  })),
  sameAs: [
    restaurant.instagram,
    restaurant.facebook,
    ...(restaurant.googleBusinessUrl ? [restaurant.googleBusinessUrl] : []),
  ],
  acceptsReservations: "https://schema.org/True",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: absoluteUrl("/reservations"),
    },
    result: {
      "@type": "FoodEstablishmentReservation",
      name: "Table Reservation",
    },
  },
} as const;

/** WebSite schema — helps Google understand the site entity */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: restaurant.name,
  url: absoluteUrl("/"),
  publisher: { "@id": absoluteUrl("/#restaurant") },
  inLanguage: "en-IN",
};

export const menuSchema = () => {
  const categories = [...new Set(menu.map((d) => d.category))];
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": absoluteUrl("/menu#menu"),
    name: `${restaurant.name} Menu`,
    inLanguage: "en",
    mainEntity: { "@id": absoluteUrl("/#restaurant") },
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: category,
      hasMenuItem: menu
        .filter((d) => d.category === category)
        .map((d) => ({
          "@type": "MenuItem",
          name: d.name,
          description: d.description,
          suitableForDiet: "https://schema.org/VegetarianDiet",
          offers: { "@type": "Offer", price: d.price, priceCurrency: "INR" },
        })),
    })),
  };
};

/** Structured data for an individual dish page */
export const dishSchema = (dish: Dish) => ({
  "@context": "https://schema.org",
  "@type": "MenuItem",
  name: dish.name,
  description: dish.description,
  url: absoluteUrl(`/menu/${dish.id}`),
  ...(dish.image ? { image: dish.image } : {}),
  suitableForDiet: dish.jain
    ? ["https://schema.org/VegetarianDiet"]
    : ["https://schema.org/VegetarianDiet"],
  offers: {
    "@type": "Offer",
    price: dish.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  isPartOf: { "@id": absoluteUrl("/menu#menu") },
  mainEntityOfPage: absoluteUrl(`/menu/${dish.id}`),
});

/** Breadcrumb schema — generates absolute item URLs */
export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
  ],
});

/** 3-level breadcrumb for dish pages: Home → Menu → Dish */
export const dishBreadcrumbSchema = (dishName: string, dishPath: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Menu", item: absoluteUrl("/menu") },
    { "@type": "ListItem", position: 3, name: dishName, item: absoluteUrl(dishPath) },
  ],
});

export const localAddressText = fullAddress;
