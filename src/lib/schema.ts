import { restaurant, fullAddress } from "@/data/restaurant";
import { menu } from "@/data/menu";

/** Sitewide Restaurant / LocalBusiness structured data. Never fabricate ratings or awards. */
export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "/#restaurant",
  name: restaurant.name,
  description: restaurant.shortDescription,
  telephone: restaurant.phone,
  email: restaurant.email,
  servesCuisine: [...restaurant.cuisine],
  priceRange: restaurant.priceRange,
  hasMenu: "/menu",
  url: "/",
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
  sameAs: [restaurant.instagram, restaurant.facebook],
  acceptsReservations: "https://schema.org/True",
} as const;

export const menuSchema = () => {
  const categories = [...new Set(menu.map((d) => d.category))];
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${restaurant.name} Menu`,
    inLanguage: "en",
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

export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name, item: path },
  ],
});

export const localAddressText = fullAddress;
