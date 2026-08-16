import batiChokhaImg from "@/assets/bati_chokha_sadi_thali.webp";
import tilkahruThaliImg from "@/assets/tilkahru_thali.webp";
import matkaDaalImg from "@/assets/matka_daal.webp";
import sawanKheerImg from "@/assets/sawen_ki_kheer.webp";
import lassiImg from "@/assets/matke_wali_lassi.webp";
import paneerButterMasalaImg from "@/assets/paneer_butter_masala.webp";
import kadhaiPaneerImg from "@/assets/kadhai_paneer.webp";
import paneerChilliDryImg from "@/assets/paneer_chilli_dry.webp";
import paneerFriedRiceImg from "@/assets/paneer_fried_rice.webp";
import daalMakhaniImg from "@/assets/daal_makhani.webp";
import mixedVegImg from "@/assets/mixed_veg.webp";
import mashroomDoPyaajaImg from "@/assets/mashroom_do_pyaaja.webp";
import manchurianRiceImg from "@/assets/manchurian_rice.webp";
import vegNoodlesImg from "@/assets/veg_noodles.webp";
import amritsariKulchaImg from "@/assets/amritsari_kulcha.webp";
import lacchaParathaImg from "@/assets/laccha_paratha.webp";
import butterTandooriRotiImg from "@/assets/butter_tandoori_roti.webp";
import missiRotiImg from "@/assets/missi_roti.webp";
import kulhadChaiImg from "@/assets/kulhad_wali_chai.webp";
import kulhadCoffeeImg from "@/assets/kulhad_coffee.webp";
import gulabJamunImg from "@/assets/gulab_jamun.webp";
import frenchFriesImg from "@/assets/french_fries.webp";
import greenSaladImg from "@/assets/green_salad.webp";
import mixedAcharImg from "@/assets/mixed_achar.webp";
import desiChhasImg from "@/assets/desi_chhas.webp";
import kadhiImg from "@/assets/kadhi.webp";
import kalonjiImg from "@/assets/kalonji.webp";

// Atmosphere & Restaurant Real Photos
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import interior1 from "@/assets/interior1.webp";
import img1960 from "@/assets/IMG_1960.webp";
import signboard from "@/assets/image.webp";

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
    bestseller: true,
    image: batiChokhaImg,
    imageAlt: "Authentic Bati Chokha Thali at Maati Mahal",
  },
  {
    id: "tilkahru-thali",
    name: "Tilkahru Thali (Unlimited Thali)",
    description: "Our special unlimited traditional thali experience.",
    story: "The Tilkahru Thali is a celebration of abundance and hospitality. Following the timeless tradition of 'Atithi Devo Bhavah', this unlimited thali ensures that your plate is never empty. We serve an endless array of traditional curries, fresh hot breads, rice, and cooling accompaniments. It's not just a meal; it's a grand feast designed to honor our guests with the warmth of an Indian home.",
    price: 250,
    category: "Thalis",
    bestseller: true,
    image: tilkahruThaliImg,
    imageAlt: "Special Tilkahru Unlimited Thali at Maati Mahal",
  },
  {
    id: "matka-daal",
    name: "Matka Daal",
    description: "Slow-cooked lentils prepared authentically in an earthen pot.",
    story: "There is magic in the mud. Our Matka Daal is slow-cooked over a low wood fire in unglazed earthen pots (matkas) for several hours. This ancient technique allows the lentils to break down naturally while absorbing earthy aromas from the clay. Tempered with pure ghee, cumin, and whole dried red chillies, this simple staple is transformed into a rich, creamy, and unforgettable delicacy.",
    price: 200,
    category: "Main Course",
    bestseller: true,
    image: matkaDaalImg,
    imageAlt: "Authentic Matka Daal slow cooked in clay pot",
  },
  {
    id: "sawan-kheer",
    name: "Sawan Kheer",
    description: "Festive milk and rice pudding enriched with dry fruits.",
    story: "Traditionally prepared to welcome the monsoon (Sawan), this kheer is a luxurious celebration in a bowl. We simmer full-fat milk for hours until it thickens and blushes pink, before introducing fragrant basmati rice, generous threads of saffron, and crushed green cardamom. Garnished with a royal mix of almonds, pistachios, and chironji, it is the perfect sweet end to your hearty meal.",
    price: 150,
    category: "Desserts",
    image: sawanKheerImg,
    imageAlt: "Traditional Sawan Kheer with dry fruits",
  },
  {
    id: "desi-lassi",
    name: "Matke Wali Lassi",
    description: "Traditional hand-churned thick sweet yoghurt drink served in clay kulhad.",
    story: "Nothing beats the refreshing chill of our Desi Lassi. We use rich, full-cream yoghurt set in earthen vessels overnight. The yoghurt is then rigorously hand-churned using a wooden mathani to achieve a thick, frothy texture that blenders simply cannot replicate. Sweetened naturally and topped with fresh malai, it cools the palate and aids digestion beautifully.",
    price: 80,
    category: "Beverages",
    bestseller: true,
    image: lassiImg,
    imageAlt: "Matke Wali Lassi served fresh in kulhad",
  },
  {
    id: "laal-dahi",
    name: "Laal Dahi / Achar Special",
    description: "Signature spiced yoghurt and traditional mixed pickle preparation.",
    story: "Our vibrant homemade pickles and spiced yoghurt preparations get their striking crimson hue from premium chillies, balanced perfectly with tartness and aromatic spices. A bold, tantalizing accompaniment that cuts through the richness of our gravies.",
    price: 100,
    category: "Rajasthani Specials",
    image: mixedAcharImg,
    imageAlt: "Traditional Mixed Achar and Village Accompaniments",
  },
  {
    id: "fara",
    name: "Kalonji Delicacy & Fara",
    description: "Steamed rice dumplings stuffed with spiced lentils and authentic stuffed kalonji.",
    story: "Fara and Kalonji are beloved delicacies rooted deeply in local village heritage. Prepared fresh with stone-ground flour and savoury fillings, offering a comforting contrast of soft texture and hearty spices.",
    price: 120,
    category: "Starters",
    image: kalonjiImg,
    imageAlt: "Traditional Village Kalonji preparation",
  },
  {
    id: "seasoning-food",
    name: "Mixed Veg Delight",
    description: "Fresh farm vegetables cooked in traditional spices according to the season.",
    story: "Our Mixed Veg is a tribute to the wisdom of eating according to the seasons (Ritucharya). Crafted with fresh garden vegetables and fragrant whole spices.",
    price: 180,
    category: "Main Course",
    image: mixedVegImg,
    imageAlt: "Seasonal Mixed Vegetable curry",
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Cubes of fresh cottage cheese simmered in a velvety, buttery tomato cashew gravy.",
    price: 260,
    category: "Main Course",
    bestseller: true,
    jain: true,
    spice: "Mild",
    image: paneerButterMasalaImg,
    imageAlt: "Rich Paneer Butter Masala with fresh cream",
  },
  {
    id: "kadhai-paneer",
    name: "Kadhai Paneer",
    description: "Paneer cubes tossed with fresh bell peppers, onions, and freshly ground kadhai spices.",
    price: 270,
    category: "Main Course",
    spice: "Medium",
    image: kadhaiPaneerImg,
    imageAlt: "Kadhai Paneer with bell peppers and roasted spices",
  },
  {
    id: "daal-makhani",
    name: "Daal Makhani",
    description: "Slow-simmered black lentils and kidney beans cooked overnight with butter and fresh cream.",
    price: 220,
    category: "Main Course",
    bestseller: true,
    spice: "Mild",
    image: daalMakhaniImg,
    imageAlt: "Creamy Daal Makhani topped with fresh butter",
  },
  {
    id: "mashroom-do-pyaaja",
    name: "Mushroom Do Pyaaza",
    description: "Fresh button mushrooms cooked with double the onions in a robust aromatic gravy.",
    price: 240,
    category: "Main Course",
    spice: "Medium",
    image: mashroomDoPyaajaImg,
    imageAlt: "Mushroom Do Pyaaza in rich masala gravy",
  },
  {
    id: "rajasthani-kadhi",
    name: "Rajasthani Kadhi Pakoda",
    description: "Sour yoghurt kadhi with soft gram-flour pakodas and mustard red chilli tempering.",
    price: 180,
    category: "Main Course",
    jain: true,
    spice: "Medium",
    image: kadhiImg,
    imageAlt: "Traditional Rajasthani Kadhi with pakodas",
  },
  {
    id: "paneer-chilli-dry",
    name: "Paneer Chilli Dry",
    description: "Crispy fried paneer tossed with capsicum, green chillies, and savory Asian sauces.",
    price: 220,
    category: "Starters",
    spice: "Medium",
    image: paneerChilliDryImg,
    imageAlt: "Crispy Paneer Chilli Dry starter",
  },
  {
    id: "french-fries",
    name: "Crispy French Fries",
    description: "Golden, crispy potato fries served hot with seasoned herbs.",
    price: 110,
    category: "Starters",
    image: frenchFriesImg,
    imageAlt: "Golden Crispy French Fries",
  },
  {
    id: "veg-noodles",
    name: "Veg Hakka Noodles",
    description: "Wok-tossed noodles with crunchy julienned vegetables and aromatic herbs.",
    price: 160,
    category: "Starters",
    image: vegNoodlesImg,
    imageAlt: "Veg Hakka Noodles wok tossed",
  },
  {
    id: "paneer-fried-rice",
    name: "Paneer Fried Rice",
    description: "Fragrant basmati rice wok-tossed with golden paneer cubes and garden vegetables.",
    price: 190,
    category: "Main Course",
    image: paneerFriedRiceImg,
    imageAlt: "Paneer Fried Rice with fresh vegetables",
  },
  {
    id: "manchurian-rice",
    name: "Veg Manchurian with Rice",
    description: "Savory vegetable dumplings in tangy sauce served alongside seasoned fried rice.",
    price: 200,
    category: "Main Course",
    image: manchurianRiceImg,
    imageAlt: "Veg Manchurian served with fried rice",
  },
  {
    id: "amritsari-kulcha",
    name: "Amritsari Stuffed Kulcha",
    description: "Crisp, layered clay-oven bread stuffed with spiced potato and paneer stuffing.",
    price: 90,
    category: "Breads",
    bestseller: true,
    image: amritsariKulchaImg,
    imageAlt: "Crispy Amritsari Stuffed Kulcha with butter",
  },
  {
    id: "laccha-paratha",
    name: "Laccha Paratha",
    description: "Multi-layered whole wheat bread cooked in the tandoor with pure ghee.",
    price: 60,
    category: "Breads",
    image: lacchaParathaImg,
    imageAlt: "Crispy layered Laccha Paratha",
  },
  {
    id: "butter-tandoori-roti",
    name: "Butter Tandoori Roti",
    description: "Clay-oven roasted whole wheat roti glazed with melted butter.",
    price: 25,
    category: "Breads",
    image: butterTandooriRotiImg,
    imageAlt: "Butter Tandoori Roti straight from the tandoor",
  },
  {
    id: "missi-roti",
    name: "Missi Roti",
    description: "Nutritious gram flour and wheat roti infused with ajwain, onions and fresh herbs.",
    price: 50,
    category: "Breads",
    jain: true,
    image: missiRotiImg,
    imageAlt: "Traditional Missi Roti with herbs and ajwain",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun (2 pcs)",
    description: "Soft, golden milk-solid dumplings soaked in rose and cardamom scented sugar syrup.",
    price: 70,
    category: "Desserts",
    bestseller: true,
    image: gulabJamunImg,
    imageAlt: "Warm sweet Gulab Jamun in sugar syrup",
  },
  {
    id: "kulhad-wali-chai",
    name: "Kulhad Wali Chai",
    description: "Freshly brewed kadak tea simmered with ginger and cardamom, served in clay kulhad.",
    price: 30,
    category: "Beverages",
    bestseller: true,
    image: kulhadChaiImg,
    imageAlt: "Hot Kulhad Wali Chai with ginger and cardamom",
  },
  {
    id: "kulhad-coffee",
    name: "Kulhad Coffee",
    description: "Frothy, rich blended coffee served hot in authentic earthen kulhad.",
    price: 50,
    category: "Beverages",
    image: kulhadCoffeeImg,
    imageAlt: "Frothy hot Kulhad Coffee",
  },
  {
    id: "desi-chhas",
    name: "Desi Masala Chhas",
    description: "Cooling churned buttermilk seasoned with roasted cumin, rock salt, and mint.",
    price: 40,
    category: "Beverages",
    jain: true,
    image: desiChhasImg,
    imageAlt: "Refreshing Desi Masala Chhas in glass",
  },
  {
    id: "green-salad",
    name: "Fresh Garden Green Salad",
    description: "Sliced crisp cucumbers, juicy tomatoes, onions, carrots, and fresh lemon wedges.",
    price: 60,
    category: "Starters",
    jain: true,
    image: greenSaladImg,
    imageAlt: "Fresh crisp Garden Green Salad",
  },
];

export const signatureDishes = menu.filter((d) =>
  [
    "bati-chokha",
    "tilkahru-thali",
    "matka-daal",
    "paneer-butter-masala",
    "desi-lassi",
    "sawan-kheer",
    "daal-makhani",
    "amritsari-kulcha",
    "kulhad-wali-chai",
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
    src: batiChokhaImg,
    alt: "Authentic Bati Chokha Thali at Maati Mahal",
    caption: "Traditional Bati Chokha Thali roasted over rustic fire",
    category: "Food",
  },
  {
    src: tilkahruThaliImg,
    alt: "Grand Tilkahru Unlimited Thali feast",
    caption: "The Grand Tilkahru Unlimited Thali experience",
    category: "Food",
  },
  {
    src: interior1,
    alt: "Maati Mahal interior dining hall with traditional lighting and seating",
    caption: "Warm and inviting village-themed interior seating",
    category: "Restaurant",
  },
  {
    src: hero1,
    alt: "Maati Mahal grand exterior entrance and building",
    caption: "Welcome to Maati Mahal — Highway & Family Dining",
    category: "Restaurant",
  },
  {
    src: hero2,
    alt: "Maati Mahal lawn and outdoor dining environment",
    caption: "Spacious outdoor dining & celebrations lawn",
    category: "Restaurant",
  },
  {
    src: img1960,
    alt: "Maati Mahal warm hospitality and dining atmosphere",
    caption: "Family dining moments at Maati Mahal",
    category: "Restaurant",
  },
  {
    src: matkaDaalImg,
    alt: "Matka Daal slow cooked in clay pot",
    caption: "Earthen pot Matka Daal with pure ghee tempering",
    category: "Food",
  },
  {
    src: paneerButterMasalaImg,
    alt: "Rich Paneer Butter Masala curry",
    caption: "Velvety Paneer Butter Masala",
    category: "Food",
  },
  {
    src: kadhaiPaneerImg,
    alt: "Kadhai Paneer with bell peppers and roasted spices",
    caption: "Sizzling Kadhai Paneer",
    category: "Food",
  },
  {
    src: daalMakhaniImg,
    alt: "Slow cooked rich Daal Makhani",
    caption: "Rich and creamy Daal Makhani",
    category: "Food",
  },
  {
    src: lassiImg,
    alt: "Hand churned Matke Wali Lassi in kulhad",
    caption: "Chilled Matke Wali Lassi topped with malai",
    category: "Culture",
  },
  {
    src: kulhadChaiImg,
    alt: "Kulhad Wali Chai with aromatic spices",
    caption: "Traditional Kadak Chai served in earthen kulhad",
    category: "Culture",
  },
  {
    src: amritsariKulchaImg,
    alt: "Amritsari Stuffed Kulcha straight from tandoor",
    caption: "Crisp Amritsari Stuffed Kulcha",
    category: "Food",
  },
  {
    src: sawanKheerImg,
    alt: "Sawan Kheer festive pudding",
    caption: "Monsoon Special Sawan Kheer with dry fruits",
    category: "Food",
  },
  {
    src: gulabJamunImg,
    alt: "Sweet Gulab Jamun dumplings",
    caption: "Freshly made hot Gulab Jamun",
    category: "Food",
  },
  {
    src: signboard,
    alt: "Maati Mahal multi-facility signboard",
    caption: "Complete facilities: Pure Veg, Banquet, Marriage Lawn & Rest Rooms",
    category: "Events",
  },
];
