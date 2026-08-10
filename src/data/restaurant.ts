/**
 * Centralised restaurant configuration.
 * Replace these values with the client's confirmed details — they are used across
 * every page, all metadata and the JSON-LD structured data.
 */

export const restaurant = {
  name: "Maati Mahal",
  tagline: "A Taste Rooted in the Village",
  shortDescription:
    "Pure vegetarian village inspired kitchen serving traditional thalis, timeless recipes and warm hospitality.",
  story:
    "Maati Mahal began as a family kitchen where recipes travelled from one generation to the next — written down by hand, tasted by memory. Rooted in village culinary traditions, our kitchen celebrates timeless vegetarian recipes prepared with stone-ground spices, slow-simmered dals and pure ghee.",
  phone: "6390278657, 8960107779",
  phoneHref: "+916390278657",
  email: "hello@maatimahal.example",
  whatsapp: "+916390278657",
  addressLine: "Varanasi - lucknow Highway, NH56",
  landmark: "",
  city: "Singramau",
  state: "Uttar Pradesh",
  pin: "222175",
  country: "IN",
  geo: { latitude: 25.9667, longitude: 82.2667 },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Singramau+Uttar+Pradesh&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Singramau+Uttar+Pradesh",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  googleReviewUrl: "https://www.google.com/maps",
  priceRange: "₹₹",
  cuisine: ["Village Inspired", "North Indian", "Vegetarian"],
  hours: [
    { days: "Monday – Sunday", time: "8:00 AM – 11:30 PM" },
  ],
  /** Schema.org openingHoursSpecification source of truth */
  hoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "23:30" },
  ],
} as const;

export const fullAddress = `${restaurant.city}, ${restaurant.addressLine}, ${restaurant.pin}`;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/dining-experience", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/catering-events", label: "Events" },
  { to: "/feedback", label: "Feedback" },
  { to: "/contact", label: "Contact" },
] as const;

export const trustHighlights = [
  "100% Pure Vegetarian",
  "Authentic Recipes",
  "Family Dining",
  "Jain Options",
] as const;

export const whyChooseUs = [
  {
    title: "Pure Vegetarian Kitchen",
    body: "A completely vegetarian kitchen — no compromise, no shared surfaces, no exceptions.",
  },
  {
    title: "Recipes Held in Trust",
    body: "Village household recipes cooked the slow way, exactly as they were taught to us.",
  },
  {
    title: "Fresh, Honest Ingredients",
    body: "Stone-ground masalas, seasonal vegetables and pure ghee sourced from trusted dairies.",
  },
  {
    title: "Jain-Friendly Options",
    body: "A wide selection prepared without onion and garlic, cooked in separate vessels.",
  },
  {
    title: "Made for Families",
    body: "Generous thalis, unhurried seating and space for celebrations big and small.",
  },
  {
    title: "Village Hospitality",
    body: "Guests are welcomed with warmth, water and a cup of masala chai.",
  },
] as const;

export const values = [
  { title: "Tradition", body: "Recipes preserved as they were given to us." },
  { title: "Purity", body: "Vegetarian, sattvic-friendly and honestly prepared." },
  { title: "Authenticity", body: "Village flavours without shortcuts or substitutes." },
  { title: "Hospitality", body: "Every guest treated as family, every visit unhurried." },
  { title: "Freshness", body: "Cooked through the day, never held overnight." },
] as const;

export const milestones = [
  { year: "2016", body: "Mughal Sarai\nSudha Desi Bati Chokha Restaurant" },
  { year: "2019", body: "Civil Lines, Prayagraj\nBati Chokha Wala\nNear Max Mall" },
  { year: "2020", body: "Gomti Nagar, Lucknow\nManglesia Bati Chokha Wala\nNear SRS Mall, Vishal Khand" },
  { year: "2022", body: "Govind Pur, Prayagraj\nBati Chokha Wala\nNear Tempo Stand" },
] as const;

export const eventServices = [
  { title: "Family Gatherings", body: "Reserved seating and thali menus for 10 to 60 guests." },
  { title: "Birthday Celebrations", body: "Private corners, festive décor and custom sweet platters." },
  { title: "Corporate Events", body: "Set menus, timed service and invoicing for teams." },
  { title: "Kitty Parties", body: "Afternoon menus with chaat counters and snacks." },
  { title: "Wedding Catering", body: "Traditional pure-veg wedding menus with live counters." },
  { title: "Group Bookings", body: "Advance reservations for tour groups and pilgrimages." },
] as const;

export const eventTypes = [
  "Family Gathering",
  "Birthday Celebration",
  "Corporate Event",
  "Kitty Party",
  "Wedding Catering",
  "Group Booking",
  "Other",
] as const;

export const feedbackTypes = [
  "Compliment",
  "Suggestion",
  "Complaint",
  "General Feedback",
] as const;

export const occasions = [
  "Family Dinner",
  "Birthday",
  "Anniversary",
  "Business Meal",
  "Festival",
  "Other",
] as const;

export const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "6:30 PM",
  "7:30 PM",
  "8:30 PM",
  "9:30 PM",
] as const;
