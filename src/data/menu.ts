import thali from "@/assets/rajasthani-vegetarian-thali-brass-plate.jpg";
import dalBaati from "@/assets/dal-baati-churma-ghee.jpg";
import gatte from "@/assets/gatte-ki-sabzi-copper-bowl.jpg";
import kerSangri from "@/assets/ker-sangri-bajra-roti.jpg";
import sweets from "@/assets/rajasthani-sweets-ghevar-malpua.jpg";
import culture from "@/assets/rajasthani-folk-culture-performance.jpg";

export type SpiceLevel = "Mild" | "Medium" | "Fiery";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  jain?: boolean;
  bestseller?: boolean;
  spice?: SpiceLevel;
  image?: string;
  imageAlt?: string;
}

export const menuCategories = [
  "Rajasthani Specials",
  "Thalis",
  "Starters",
  "Main Course",
  "Breads",
  "Desserts",
  "Beverages",
  "Jain Specials",
] as const;

export const menu: Dish[] = [
  {
    id: "bati-chokha",
    name: "Bati Chokha",
    description: "Traditional roasted wheat baati served with spiced mashed vegetables.",
    price: 250,
    category: "Rajasthani Specials",
  },
  {
    id: "tilkahru-thali",
    name: "Tilkahru Thali (Unlimited thali - 25)",
    description: "Our special unlimited traditional thali experience.",
    price: 25,
    category: "Thalis",
  },
  {
    id: "matka-daal",
    name: "Matka Daal",
    description: "Slow-cooked lentils prepared authentically in an earthen pot.",
    price: 200,
    category: "Main Course",
  },
  {
    id: "sawan-kheer",
    name: "Sawan Kheer",
    description: "Festive milk and rice pudding enriched with dry fruits.",
    price: 150,
    category: "Desserts",
  },
  {
    id: "desi-lassi",
    name: "Desi Lassi",
    description: "Traditional hand-churned thick sweet yoghurt drink.",
    price: 80,
    category: "Beverages",
  },
  {
    id: "laal-dahi",
    name: "Laal Dahi",
    description: "Signature spiced red yoghurt preparation.",
    price: 100,
    category: "Rajasthani Specials",
  },
  {
    id: "fara",
    name: "Fara",
    description: "Steamed rice flour dumplings stuffed with spiced lentils.",
    price: 120,
    category: "Starters",
  },
  {
    id: "seasoning-food",
    name: "Seasoning Food",
    description: "A special variety of seasonal preparations.",
    price: 100,
    category: "Main Course",
  },
  {
    id: "dal-baati-churma",
    name: "Dal Baati Churma",
    description:
      "Wood-fired wheat baatis soaked in pure ghee, served with slow-cooked panchmel dal and sweet churma.",
    price: 340,
    category: "Rajasthani Specials",
    bestseller: true,
    jain: true,
    spice: "Mild",
    image: dalBaati,
    imageAlt: "Dal baati churma with pure ghee poured over baatis in a brass bowl",
  },
  {
    id: "gatte-ki-sabzi",
    name: "Gatte Ki Sabzi",
    description: "Steamed gram-flour dumplings simmered in a tangy yoghurt and red chilli gravy.",
    price: 290,
    category: "Rajasthani Specials",
    bestseller: true,
    jain: true,
    spice: "Medium",
    image: gatte,
    imageAlt: "Gatte ki sabzi served in a hammered copper bowl garnished with coriander",
  },
  {
    id: "ker-sangri",
    name: "Ker Sangri",
    description: "The desert classic — sun-dried ker berries and sangri beans tempered with mathania chilli.",
    price: 310,
    category: "Rajasthani Specials",
    spice: "Fiery",
    jain: true,
    image: kerSangri,
    imageAlt: "Ker sangri desert vegetable dish in a brass bowl with bajra roti",
  },
  {
    id: "laal-maas-veg",
    name: "Mirchi Ke Tipore",
    description: "Jodhpuri green chillies tossed with amchur and fennel — served as a fiery accompaniment.",
    price: 180,
    category: "Rajasthani Specials",
    spice: "Fiery",
  },
  {
    id: "royal-thali",
    name: "Royal Rajasthani Thali",
    description:
      "Seventeen preparations — dal baati churma, gatte, ker sangri, kadhi, seasonal sabzi, breads, rice, papad, chutneys and two sweets.",
    price: 690,
    category: "Thalis",
    bestseller: true,
    jain: true,
    image: thali,
    imageAlt: "Traditional Rajasthani vegetarian thali served in brass plates and bowls",
  },
  {
    id: "marwari-thali",
    name: "Marwari Everyday Thali",
    description: "Panchmel dal, one seasonal sabzi, bajra or wheat roti, rice, buttermilk and a sweet.",
    price: 380,
    category: "Thalis",
    jain: true,
  },
  {
    id: "jain-thali",
    name: "Jain Special Thali",
    description: "Prepared without onion, garlic or root vegetables in dedicated vessels.",
    price: 420,
    category: "Thalis",
    jain: true,
  },
  {
    id: "pyaaz-kachori",
    name: "Kachori (Jain: Dal)",
    description: "Flaky kachori with a spiced filling, served with tamarind and mint chutneys.",
    price: 140,
    category: "Starters",
    jain: true,
    spice: "Medium",
  },
  {
    id: "mirchi-vada",
    name: "Mirchi Vada",
    description: "Jodhpur-style stuffed chilli fritter with a potato and fennel filling.",
    price: 160,
    category: "Starters",
    spice: "Fiery",
  },
  {
    id: "paneer-tikka",
    name: "Malai Paneer Tikka",
    description: "Hand-set paneer marinated in cream, cardamom and white pepper, finished in the tandoor.",
    price: 320,
    category: "Starters",
    bestseller: true,
    spice: "Mild",
  },
  {
    id: "panchmel-dal",
    name: "Panchmel Dal",
    description: "Five lentils tempered with cumin, hing and ghee — simmered for three hours.",
    price: 240,
    category: "Main Course",
    jain: true,
    spice: "Mild",
  },
  {
    id: "govind-gatta",
    name: "Govind Gatta Curry",
    description: "Stuffed gram-flour rolls with dry fruits in a rich cashew and tomato gravy.",
    price: 330,
    category: "Main Course",
    spice: "Medium",
  },
  {
    id: "kadhi-pakoda",
    name: "Rajasthani Kadhi Pakoda",
    description: "Sour yoghurt kadhi with soft gram-flour pakodas and a red chilli tempering.",
    price: 260,
    category: "Main Course",
    jain: true,
    spice: "Medium",
  },
  {
    id: "bajra-roti",
    name: "Bajra Roti with Ghee",
    description: "Hand-patted millet roti from the griddle, brushed with white butter.",
    price: 70,
    category: "Breads",
    jain: true,
  },
  {
    id: "missi-roti",
    name: "Missi Roti",
    description: "Gram flour and wheat roti with ajwain and coriander.",
    price: 80,
    category: "Breads",
    jain: true,
  },
  {
    id: "ghevar",
    name: "Ghevar",
    description: "Honeycomb disc of ghee-fried batter soaked in saffron syrup, topped with rabri.",
    price: 220,
    category: "Desserts",
    bestseller: true,
    image: sweets,
    imageAlt: "Ghevar and malpua Rajasthani sweets on a brass plate with pistachio and saffron",
  },
  {
    id: "malpua",
    name: "Malpua with Rabri",
    description: "Griddled saffron pancakes served warm with thickened milk.",
    price: 200,
    category: "Desserts",
  },
  {
    id: "moong-halwa",
    name: "Moong Dal Halwa",
    description: "Slow-roasted in ghee for hours, finished with almond and cardamom.",
    price: 190,
    category: "Desserts",
    jain: true,
  },
  {
    id: "masala-chaas",
    name: "Masala Chaas",
    description: "Churned buttermilk with roasted cumin, black salt and curry leaf.",
    price: 90,
    category: "Beverages",
    jain: true,
  },
  {
    id: "kesar-lassi",
    name: "Kesar Lassi",
    description: "Thick sweet lassi with saffron, served in a traditional brass tumbler.",
    price: 150,
    category: "Beverages",
    bestseller: true,
    jain: true,
  },
  {
    id: "masala-chai",
    name: "Kadak Masala Chai",
    description: "Boiled with ginger, cardamom and fresh tulsi.",
    price: 70,
    category: "Beverages",
    jain: true,
  },
  {
    id: "jain-paneer",
    name: "Jain Paneer Lababdar",
    description: "Paneer in a tomato and cashew gravy, cooked without onion or garlic.",
    price: 330,
    category: "Jain Specials",
    jain: true,
    spice: "Mild",
  },
  {
    id: "jain-sev-tamatar",
    name: "Jain Sev Tamatar",
    description: "Tangy tomato curry finished with crisp gram-flour sev.",
    price: 250,
    category: "Jain Specials",
    jain: true,
    spice: "Medium",
  },

];

export const signatureDishes = menu.filter((d) =>
  ["royal-thali", "dal-baati-churma", "gatte-ki-sabzi", "ker-sangri", "paneer-tikka", "ghevar"].includes(
    d.id,
  ),
);

export type GalleryCategory = "Food" | "Restaurant" | "Culture" | "Events";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  {
    src: thali,
    alt: "Traditional Rajasthani vegetarian thali served in brass plates and bowls",
    caption: "The Royal Rajasthani Thali, served in brass",
    category: "Food",
  },
  {
    src: dalBaati,
    alt: "Pure ghee being poured over wood-fired baati with panchmel dal and churma",
    caption: "Ghee poured over wood-fired baati",
    category: "Food",
  },
  {
    src: gatte,
    alt: "Gatte ki sabzi in a hammered copper bowl garnished with coriander",
    caption: "Gatte ki sabzi in hammered copper",
    category: "Food",
  },
  {
    src: kerSangri,
    alt: "Ker sangri desert vegetable preparation with bajra roti",
    caption: "Ker sangri with bajra roti",
    category: "Food",
  },
  {
    src: sweets,
    alt: "Ghevar and malpua Rajasthani sweets with saffron and pistachio",
    caption: "Ghevar and malpua from our sweet kitchen",
    category: "Food",
  },
  {
    src: culture,
    alt: "Rajasthani folk dancer performing ghoomar in a lamp-lit courtyard",
    caption: "Ghoomar evenings in the courtyard",
    category: "Culture",
  },
];
