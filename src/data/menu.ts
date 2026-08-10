import thali from "@/assets/rajasthani-vegetarian-thali-brass-plate.jpg";
import dalBaati from "@/assets/dal-baati-churma-ghee.jpg";
import gatte from "@/assets/gatte-ki-sabzi-copper-bowl.jpg";
import kerSangri from "@/assets/ker-sangri-bajra-roti.jpg";
import sweets from "@/assets/rajasthani-sweets-ghevar-malpua.jpg";
import culture from "@/assets/rajasthani-folk-culture-performance.jpg";
import vegThali from "@/assets/veg-thali.jpg";

export type SpiceLevel = "Mild" | "Medium" | "Fiery";

export interface Dish {
  id: string;
  name: string;
  description: string;
  story?: string;
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
    story: "Bati Chokha is the soulful comfort food of the village. Our baatis are hand-rolled and roasted slowly over cow dung cakes to impart that signature rustic, smoky flavour. We serve it alongside a fiery, perfectly mashed 'chokha' made from fire-roasted brinjals, tomatoes, and potatoes mixed with pungent mustard oil and fresh green chillies. Every bite is a nostalgic journey to the vibrant village courtyards of the heartland.",
    price: 250,
    category: "Rajasthani Specials",
    image: dalBaati,
    imageAlt: "Bati Chokha preparation",
  },
  {
    id: "tilkahru-thali",
    name: "Tilkahru Thali (Unlimited thali - 25)",
    description: "Our special unlimited traditional thali experience.",
    story: "The Tilkahru Thali is a celebration of abundance and hospitality. Following the timeless tradition of 'Atithi Devo Bhavah', this unlimited thali ensures that your plate is never empty. We serve an endless array of traditional curries, fresh hot breads, rice, and cooling accompaniments. It's not just a meal; it's a grand feast designed to honor our guests with the warmth of an Indian home.",
    price: 25,
    category: "Thalis",
    image: vegThali,
    imageAlt: "Tilkahru Thali",
  },
  {
    id: "matka-daal",
    name: "Matka Daal",
    description: "Slow-cooked lentils prepared authentically in an earthen pot.",
    story: "There is magic in the mud. Our Matka Daal is slow-cooked over a low wood fire in unglazed earthen pots (matkas) for several hours. This ancient technique allows the lentils to break down naturally while absorbing earthy aromas from the clay. Tempered with pure ghee, cumin, and whole dried red chillies, this simple staple is transformed into a rich, creamy, and unforgettable delicacy.",
    price: 200,
    category: "Main Course",
    image: gatte,
    imageAlt: "Matka Daal",
  },
  {
    id: "sawan-kheer",
    name: "Sawan Kheer",
    description: "Festive milk and rice pudding enriched with dry fruits.",
    story: "Traditionally prepared to welcome the monsoon (Sawan), this kheer is a luxurious celebration in a bowl. We simmer full-fat milk for hours until it thickens and blushes pink, before introducing fragrant basmati rice, generous threads of saffron, and crushed green cardamom. Garnished with a royal mix of almonds, pistachios, and chironji, it is the perfect sweet end to your hearty meal.",
    price: 150,
    category: "Desserts",
    image: sweets,
    imageAlt: "Sawan Kheer",
  },
  {
    id: "desi-lassi",
    name: "Desi Lassi",
    description: "Traditional hand-churned thick sweet yoghurt drink.",
    story: "Nothing beats the refreshing chill of our Desi Lassi. We use rich, full-cream yoghurt set in earthen vessels overnight. The yoghurt is then rigorously hand-churned using a wooden mathani to achieve a thick, frothy texture that blenders simply cannot replicate. Sweetened naturally and sometimes topped with a dollop of fresh malai, it cools the palate and aids digestion beautifully.",
    price: 80,
    category: "Beverages",
    image: culture,
    imageAlt: "Desi Lassi",
  },
  {
    id: "laal-dahi",
    name: "Laal Dahi",
    description: "Signature spiced red yoghurt preparation.",
    story: "Laal Dahi is our vibrant, closely guarded secret. This fiery yet cooling dish gets its striking crimson hue from premium Mathania red chillies, balanced perfectly with the tartness of fresh hung curd. Tempered with mustard seeds and curry leaves, it acts as a bold, tantalizing side dish that cuts through the richness of our heavier curries and leaves a lingering, complex warmth.",
    price: 100,
    category: "Rajasthani Specials",
    image: kerSangri,
    imageAlt: "Laal Dahi",
  },
  {
    id: "fara",
    name: "Fara",
    description: "Steamed rice flour dumplings stuffed with spiced lentils.",
    story: "Fara is a beloved, healthy delicacy rooted deeply in local tradition. We prepare fresh dough from stone-ground rice flour and mold it into delicate pockets. These are generously stuffed with a savoury, heavily spiced mix of chana and urad dal, fragrant with ginger, garlic, and fresh coriander. Steamed to perfection, they offer a wonderful contrast of a soft exterior and a hearty, flavourful core.",
    price: 120,
    category: "Starters",
    image: thali,
    imageAlt: "Fara",
  },
  {
    id: "seasoning-food",
    name: "Seasoning Food",
    description: "A special variety of seasonal preparations.",
    story: "Our 'Seasoning Food' is a tribute to the wisdom of eating according to the seasons (Ritucharya). The ingredients and preparation methods for this dish change entirely depending on the time of year. Whether it's warming, robust spices in the winter or cooling, light preparations in the summer, this dish is crafted from the freshest seasonal harvests directly from local farmers.",
    price: 100,
    category: "Main Course",
    image: vegThali,
    imageAlt: "Seasoning Food",
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
  [
    "bati-chokha",
    "tilkahru-thali",
    "matka-daal",
    "sawan-kheer",
    "desi-lassi",
    "laal-dahi",
    "fara",
    "seasoning-food",
  ].includes(d.id),
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
