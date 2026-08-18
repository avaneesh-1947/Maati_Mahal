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
  alternateNames: [
    "Mati Mahal",
    "Maati Mehal",
    "Mati Mehal",
    "Maati Mahal Family Restaurant",
    "Mati Mahal Family Restaurant",
    "Maati Mahal Restaurant",
    "Mati Mahal Restaurant",
    "Maati Mahal Singramau",
    "Mati Mahal Singramau",
  ],
  phone: "6390278657, 8960107779",
  phoneHref: "+918960107779",
  email: "thematimahal@gmail.com",
  whatsapp: "+918960107779",
  addressLine: "Varanasi - Lucknow Highway, NH56, Sasrhapur",
  landmark: "Near Singramau, NH56",
  city: "Singramau",
  district: "Jaunpur",
  state: "Uttar Pradesh",
  pin: "222175",
  country: "IN",
  plusCode: "WCR7+54",
  geo: { latitude: 25.9667, longitude: 82.2667 },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
  instagram: "https://www.instagram.com/mati.mahal1?igsh=YTd2ZGdqaTQ4aXk0",
  facebook: "https://www.facebook.com/share/18dYpspP1t/?mibextid=wwXIfr",
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
  siteUrl: "https://maatimahal.com",
  /** Google Business search & maps URL */
  googleBusinessUrl: "https://www.google.com/maps/search/?api=1&query=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
  priceRange: "₹₹",
  cuisine: ["Village Inspired", "North Indian", "Vegetarian", "Traditional Thalis"],
  hours: [
    { days: "Monday – Sunday", time: "8:00 AM – 11:30 PM" },
  ],
  /** Schema.org openingHoursSpecification source of truth */
  hoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "23:30" },
  ],
  /** Nearby landmarks for local SEO signals */
  nearbyLandmarks: [
    "WCR7+54, Sasrhapur",
    "NH56 Varanasi–Lucknow Highway",
    "Singramau",
    "Badlapur",
    "Jaunpur",
    "Sultanpur",
  ],
  /** On-site facilities for entity completeness */
  facilities: [
    "Pure Vegetarian",
    "Multi Cuisine Food",
    "Breakfast Options",
    "Banquet Hall",
    "Marriage Lawn",
    "Rest Rooms",
    "Ample Vehicle Parking",
  ],
  /** Signature dishes for structured data */
  signatureDishNames: [
    "Bati Chokha",
    "Tilkahru Thali",
    "Unlimited Thali",
    "Matka Daal",
    "Matke Wali Lassi",
    "Paneer Butter Masala",
    "Daal Makhani",
    "Amritsari Stuffed Kulcha",
    "Kulhad Wali Chai",
    "Sawan Kheer",
  ],
} as const;

export const fullAddress = `Mati Mahal, WCR7+54, Sasrhapur, ${restaurant.city}, ${restaurant.state} ${restaurant.pin}`;

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
  "Freshly Cooked",
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
    title: "Highway & Family Convenience",
    body: "Prime location on NH56 Varanasi–Lucknow Highway with spacious parking, clean restrooms, banquet and lawn.",
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

export const brandFaqs = [
  {
    question: "What is Maati Mahal and what type of food does it serve?",
    answer: "Maati Mahal (also known as Mati Mahal) is an authentic pure vegetarian, village-inspired family restaurant located on the Varanasi–Lucknow Highway (NH56) in Singramau (Sasrhapur, UP). We serve traditional North Indian thalis, wood-fired Bati Chokha, slow-cooked Matka Daal, clay-oven breads, and cooling kulhad drinks in a warm, village-themed setting.",
  },
  {
    question: "Is Maati Mahal also searched as Mati Mahal or Maati Mehal?",
    answer: "Yes, guests frequently spell our name as Mati Mahal or Maati Mehal. Maati Mahal (माटी महल) is the official brand name of our pure vegetarian family restaurant located near Singramau on NH56.",
  },
  {
    question: "Where is Maati Mahal located on the highway?",
    answer: "Maati Mahal is located at WCR7+54, Sasrhapur, Singramau, Uttar Pradesh 222175 on the Varanasi – Lucknow Highway (NH56). We are easily accessible for highway travellers, family groups, and local visitors between Varanasi, Jaunpur, Badlapur, and Sultanpur.",
  },
  {
    question: "Is Maati Mahal a 100% pure vegetarian restaurant?",
    answer: "Yes, Maati Mahal is strictly 100% pure vegetarian. We have a dedicated vegetarian kitchen with no meat or alcohol served, ensuring complete purity and peace of mind for family and pilgrimage dining.",
  },
  {
    question: "What are the most popular signature dishes at Maati Mahal?",
    answer: "Our most celebrated dishes include traditional wood-roasted Bati Chokha, the Grand Tilkahru Unlimited Thali, slow-simmered earthen pot Matka Daal, Paneer Butter Masala, overnight-cooked Daal Makhani, Amritsari Stuffed Kulcha, festive Sawan Kheer, and fresh Matke Wali Lassi served in clay kulhads.",
  },
  {
    question: "What are the opening hours of Maati Mahal?",
    answer: "Maati Mahal is open daily from Monday to Sunday from 8:00 AM to 11:30 PM, serving breakfast, lunch, highway tea/snacks, and dinner.",
  },
  {
    question: "Does Maati Mahal have facilities for banquets, weddings, and large family gatherings?",
    answer: "Yes, Maati Mahal features an air-conditioned banquet hall, a spacious marriage celebration lawn, ample vehicle parking, clean restrooms, and custom catering menus for weddings, birthdays, kitty parties, and corporate events.",
  },
  {
    question: "How can I make a table reservation or book an event?",
    answer: "You can reserve a table directly online through our website's reservation page, send an enquiry on our catering page, message us on WhatsApp at +91 8960107779, or call our team at 6390278657 / 8960107779.",
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
