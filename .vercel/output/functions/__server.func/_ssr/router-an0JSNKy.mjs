import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { L as notFound, _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/restaurant-qifylrIm.js
/**
* Centralised restaurant configuration.
* Replace these values with the client's confirmed details — they are used across
* every page, all metadata and the JSON-LD structured data.
*/
var restaurant = {
	name: "Maati Mahal",
	tagline: "A Taste Rooted in the Village",
	shortDescription: "Pure vegetarian village inspired kitchen serving traditional thalis, timeless recipes and warm hospitality.",
	story: "Maati Mahal began as a family kitchen where recipes travelled from one generation to the next — written down by hand, tasted by memory. Rooted in village culinary traditions, our kitchen celebrates timeless vegetarian recipes prepared with stone-ground spices, slow-simmered dals and pure ghee.",
	alternateNames: [
		"Mati Mahal",
		"Maati Mehal",
		"Mati Mehal",
		"Maati Mahal Family Restaurant",
		"Mati Mahal Family Restaurant",
		"Maati Mahal Restaurant",
		"Mati Mahal Restaurant",
		"Maati Mahal Singramau",
		"Mati Mahal Singramau"
	],
	phone: "6390278657, 8960107779",
	phoneHref: "+918960107779",
	email: "hello@maatimahal.com",
	whatsapp: "+918960107779",
	addressLine: "Varanasi - Lucknow Highway, NH56, Sasrhapur",
	landmark: "Near Singramau, NH56",
	city: "Singramau",
	district: "Jaunpur",
	state: "Uttar Pradesh",
	pin: "222175",
	country: "IN",
	plusCode: "WCR7+54",
	geo: {
		latitude: 25.9667,
		longitude: 82.2667
	},
	mapEmbedUrl: "https://www.google.com/maps?q=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175&output=embed",
	directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
	instagram: "https://www.instagram.com/mati.mahal1?igsh=YTd2ZGdqaTQ4aXk0",
	facebook: "https://www.facebook.com/share/18dYpspP1t/?mibextid=wwXIfr",
	googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
	siteUrl: "https://maatimahal.com",
	/** Google Business search & maps URL */
	googleBusinessUrl: "https://www.google.com/maps/search/?api=1&query=Mati+Mahal,+WCR7%2B54,+Sasrhapur,+Uttar+Pradesh+222175",
	priceRange: "₹₹",
	cuisine: [
		"Village Inspired",
		"North Indian",
		"Vegetarian",
		"Traditional Thalis"
	],
	hours: [{
		days: "Monday – Sunday",
		time: "8:00 AM – 11:30 PM"
	}],
	/** Schema.org openingHoursSpecification source of truth */
	hoursSpec: [{
		days: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "08:00",
		closes: "23:30"
	}],
	/** Nearby landmarks for local SEO signals */
	nearbyLandmarks: [
		"WCR7+54, Sasrhapur",
		"NH56 Varanasi–Lucknow Highway",
		"Singramau",
		"Badlapur",
		"Jaunpur",
		"Sultanpur"
	],
	/** On-site facilities for entity completeness */
	facilities: [
		"Pure Vegetarian",
		"Multi Cuisine Food",
		"Breakfast Options",
		"Banquet Hall",
		"Marriage Lawn",
		"Rest Rooms",
		"Ample Vehicle Parking"
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
		"Sawan Kheer"
	]
};
var fullAddress = `Mati Mahal, WCR7+54, Sasrhapur, ${restaurant.city}, ${restaurant.state} ${restaurant.pin}`;
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/dining-experience",
		label: "Experience"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/catering-events",
		label: "Events"
	},
	{
		to: "/feedback",
		label: "Feedback"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var trustHighlights = [
	"100% Pure Vegetarian",
	"Authentic Recipes",
	"Family Dining",
	"Freshly Cooked"
];
var brandFaqs = [
	{
		question: "What is Maati Mahal and what type of food does it serve?",
		answer: "Maati Mahal (also known as Mati Mahal) is an authentic pure vegetarian, village-inspired family restaurant located on the Varanasi–Lucknow Highway (NH56) in Singramau (Sasrhapur, UP). We serve traditional North Indian thalis, wood-fired Bati Chokha, slow-cooked Matka Daal, clay-oven breads, and cooling kulhad drinks in a warm, village-themed setting."
	},
	{
		question: "Is Maati Mahal also searched as Mati Mahal or Maati Mehal?",
		answer: "Yes, guests frequently spell our name as Mati Mahal or Maati Mehal. Maati Mahal (माटी महल) is the official brand name of our pure vegetarian family restaurant located near Singramau on NH56."
	},
	{
		question: "Where is Maati Mahal located on the highway?",
		answer: "Maati Mahal is located at WCR7+54, Sasrhapur, Singramau, Uttar Pradesh 222175 on the Varanasi – Lucknow Highway (NH56). We are easily accessible for highway travellers, family groups, and local visitors between Varanasi, Jaunpur, Badlapur, and Sultanpur."
	},
	{
		question: "Is Maati Mahal a 100% pure vegetarian restaurant?",
		answer: "Yes, Maati Mahal is strictly 100% pure vegetarian. We have a dedicated vegetarian kitchen with no meat or alcohol served, ensuring complete purity and peace of mind for family and pilgrimage dining."
	},
	{
		question: "What are the most popular signature dishes at Maati Mahal?",
		answer: "Our most celebrated dishes include traditional wood-roasted Bati Chokha, the Grand Tilkahru Unlimited Thali, slow-simmered earthen pot Matka Daal, Paneer Butter Masala, overnight-cooked Daal Makhani, Amritsari Stuffed Kulcha, festive Sawan Kheer, and fresh Matke Wali Lassi served in clay kulhads."
	},
	{
		question: "What are the opening hours of Maati Mahal?",
		answer: "Maati Mahal is open daily from Monday to Sunday from 8:00 AM to 11:30 PM, serving breakfast, lunch, highway tea/snacks, and dinner."
	},
	{
		question: "Does Maati Mahal have facilities for banquets, weddings, and large family gatherings?",
		answer: "Yes, Maati Mahal features an air-conditioned banquet hall, a spacious marriage celebration lawn, ample vehicle parking, clean restrooms, and custom catering menus for weddings, birthdays, kitty parties, and corporate events."
	},
	{
		question: "How can I make a table reservation or book an event?",
		answer: "You can reserve a table directly online through our website's reservation page, send an enquiry on our catering page, message us on WhatsApp at +91 8960107779, or call our team at 6390278657 / 8960107779."
	}
];
var values = [
	{
		title: "Tradition",
		body: "Recipes preserved as they were given to us."
	},
	{
		title: "Purity",
		body: "Vegetarian, sattvic-friendly and honestly prepared."
	},
	{
		title: "Authenticity",
		body: "Village flavours without shortcuts or substitutes."
	},
	{
		title: "Hospitality",
		body: "Every guest treated as family, every visit unhurried."
	},
	{
		title: "Freshness",
		body: "Cooked through the day, never held overnight."
	}
];
var milestones = [
	{
		year: "2016",
		body: "Mughal Sarai\nSudha Desi Bati Chokha Restaurant"
	},
	{
		year: "2019",
		body: "Civil Lines, Prayagraj\nBati Chokha Wala\nNear Max Mall"
	},
	{
		year: "2020",
		body: "Gomti Nagar, Lucknow\nManglesia Bati Chokha Wala\nNear SRS Mall, Vishal Khand"
	},
	{
		year: "2022",
		body: "Govind Pur, Prayagraj\nBati Chokha Wala\nNear Tempo Stand"
	}
];
var eventServices = [
	{
		title: "Family Gatherings",
		body: "Reserved seating and thali menus for 10 to 60 guests."
	},
	{
		title: "Birthday Celebrations",
		body: "Private corners, festive décor and custom sweet platters."
	},
	{
		title: "Corporate Events",
		body: "Set menus, timed service and invoicing for teams."
	},
	{
		title: "Kitty Parties",
		body: "Afternoon menus with chaat counters and snacks."
	},
	{
		title: "Wedding Catering",
		body: "Traditional pure-veg wedding menus with live counters."
	},
	{
		title: "Group Bookings",
		body: "Advance reservations for tour groups and pilgrimages."
	}
];
var eventTypes = [
	"Family Gathering",
	"Birthday Celebration",
	"Corporate Event",
	"Kitty Party",
	"Wedding Catering",
	"Group Booking",
	"Other"
];
var feedbackTypes = [
	"Compliment",
	"Suggestion",
	"Complaint",
	"General Feedback"
];
var occasions = [
	"Family Dinner",
	"Birthday",
	"Anniversary",
	"Business Meal",
	"Festival",
	"Other"
];
var timeSlots = [
	"11:00 AM",
	"12:00 PM",
	"1:00 PM",
	"2:00 PM",
	"6:30 PM",
	"7:30 PM",
	"8:30 PM",
	"9:30 PM"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/hero1-C6LXNVT3.js
var hero1_default = "/assets/hero1-DgRgasvq.webp";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/hero2-Ce5lUZFY.js
var hero2_default = "/assets/hero2-BsrjsByX.webp";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/interior1-6C3M7g93.js
var interior1_default = "/assets/interior1-D0QpsoAZ.webp";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/matke_wali_lassi-BbbvybuN.js
var tilkahru_thali_default = "/assets/tilkahru_thali-DN30kOvd.webp";
var matke_wali_lassi_default = "/assets/matke_wali_lassi-DFAHCx1i.webp";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/menu-uwdSJIXZ.js
var bati_chokha_sadi_thali_default = "/assets/bati_chokha_sadi_thali-D0lmDW4e.webp";
var matka_daal_default = "/assets/matka_daal-6ANM3Xd6.webp";
var sawen_ki_kheer_default = "/assets/sawen_ki_kheer-CNPYQEJG.webp";
var paneer_butter_masala_default = "/assets/paneer_butter_masala-B0YlOy7w.webp";
var kadhai_paneer_default = "/assets/kadhai_paneer-C-qKE7pk.webp";
var paneer_chilli_dry_default = "/assets/paneer_chilli_dry-DBCj3-pz.webp";
var paneer_fried_rice_default = "/assets/paneer_fried_rice-D99c4YEk.webp";
var daal_makhani_default = "/assets/daal_makhani-huDaRn0t.webp";
var mixed_veg_default = "/assets/mixed_veg-CF2AtKQ9.webp";
var mashroom_do_pyaaja_default = "/assets/mashroom_do_pyaaja-DCI49tjM.webp";
var manchurian_rice_default = "/assets/manchurian_rice-C1BvoQbS.webp";
var veg_noodles_default = "/assets/veg_noodles-DRMUf_ta.webp";
var amritsari_kulcha_default = "/assets/amritsari_kulcha-BeuwVz4h.webp";
var laccha_paratha_default = "/assets/laccha_paratha-xWnsG_ZS.webp";
var butter_tandoori_roti_default = "/assets/butter_tandoori_roti-DLzKjzJg.webp";
var missi_roti_default = "/assets/missi_roti-Bl-3H0bG.webp";
var kulhad_wali_chai_default = "/assets/kulhad_wali_chai-DnzcjTMA.webp";
var kulhad_coffee_default = "/assets/kulhad_coffee-cnLuTr0R.webp";
var gulab_jamun_default = "/assets/gulab_jamun-DvuyjPE9.webp";
var french_fries_default = "/assets/french_fries-_x5dE5cR.webp";
var green_salad_default = "/assets/green_salad-DpYt5lH2.webp";
var mixed_achar_default = "/assets/mixed_achar-sN-CQMFU.webp";
var desi_chhas_default = "/assets/desi_chhas-BWTDuPA_.webp";
var kadhi_default = "/assets/kadhi-q05d6JFE.webp";
var kalonji_default = "/assets/kalonji-ieRW2xYr.webp";
var IMG_1960_default = "/assets/IMG_1960-CYQ3GAU-.webp";
var galary_default = "/assets/galary-CqzVK9cE.webp";
var menuCategories = [
	"Maatimahal Specials",
	"Thalis",
	"Starters",
	"Main Course",
	"Breads",
	"Desserts",
	"Beverages"
];
var menu = [
	{
		id: "bati-chokha",
		name: "Bati Chokha",
		description: "Traditional roasted wheat baati served with spiced mashed vegetables.",
		story: "Bati Chokha is the soulful comfort food of the village. Our baatis are hand-rolled and roasted slowly over cow dung cakes to impart that signature rustic, smoky flavour. We serve it alongside a fiery, perfectly mashed 'chokha' made from fire-roasted brinjals, tomatoes, and potatoes mixed with pungent mustard oil and fresh green chillies. Every bite is a nostalgic journey to the vibrant village courtyards of the heartland.",
		price: 250,
		category: "Maatimahal Specials",
		bestseller: true,
		image: bati_chokha_sadi_thali_default,
		imageAlt: "Authentic Bati Chokha Thali at Maati Mahal"
	},
	{
		id: "tilkahru-thali",
		name: "Tilkahru Thali (Unlimited Thali)",
		description: "Our special unlimited traditional thali experience.",
		story: "The Tilkahru Thali is a celebration of abundance and hospitality. Following the timeless tradition of 'Atithi Devo Bhavah', this unlimited thali ensures that your plate is never empty. We serve an endless array of traditional curries, fresh hot breads, rice, and cooling accompaniments. It's not just a meal; it's a grand feast designed to honor our guests with the warmth of an Indian home.",
		price: 250,
		category: "Thalis",
		bestseller: true,
		image: tilkahru_thali_default,
		imageAlt: "Special Tilkahru Unlimited Thali at Maati Mahal"
	},
	{
		id: "matka-daal",
		name: "Matka Daal",
		description: "Slow-cooked lentils prepared authentically in an earthen pot.",
		story: "There is magic in the mud. Our Matka Daal is slow-cooked over a low wood fire in unglazed earthen pots (matkas) for several hours. This ancient technique allows the lentils to break down naturally while absorbing earthy aromas from the clay. Tempered with pure ghee, cumin, and whole dried red chillies, this simple staple is transformed into a rich, creamy, and unforgettable delicacy.",
		price: 200,
		category: "Main Course",
		bestseller: true,
		image: matka_daal_default,
		imageAlt: "Authentic Matka Daal slow cooked in clay pot"
	},
	{
		id: "sawan-kheer",
		name: "Sawan Kheer",
		description: "Festive milk and rice pudding enriched with dry fruits.",
		story: "Traditionally prepared to welcome the monsoon (Sawan), this kheer is a luxurious celebration in a bowl. We simmer full-fat milk for hours until it thickens and blushes pink, before introducing fragrant basmati rice, generous threads of saffron, and crushed green cardamom. Garnished with a royal mix of almonds, pistachios, and chironji, it is the perfect sweet end to your hearty meal.",
		price: 150,
		category: "Desserts",
		image: sawen_ki_kheer_default,
		imageAlt: "Traditional Sawan Kheer with dry fruits"
	},
	{
		id: "desi-lassi",
		name: "Matke Wali Lassi",
		description: "Traditional hand-churned thick sweet yoghurt drink served in clay kulhad.",
		story: "Nothing beats the refreshing chill of our Desi Lassi. We use rich, full-cream yoghurt set in earthen vessels overnight. The yoghurt is then rigorously hand-churned using a wooden mathani to achieve a thick, frothy texture that blenders simply cannot replicate. Sweetened naturally and topped with fresh malai, it cools the palate and aids digestion beautifully.",
		price: 80,
		category: "Beverages",
		bestseller: true,
		image: matke_wali_lassi_default,
		imageAlt: "Matke Wali Lassi served fresh in kulhad"
	},
	{
		id: "laal-dahi",
		name: "Laal Dahi / Achar Special",
		description: "Signature spiced yoghurt and traditional mixed pickle preparation.",
		story: "Our vibrant homemade pickles and spiced yoghurt preparations get their striking crimson hue from premium chillies, balanced perfectly with tartness and aromatic spices. A bold, tantalizing accompaniment that cuts through the richness of our gravies.",
		price: 100,
		category: "Maatimahal Specials",
		image: mixed_achar_default,
		imageAlt: "Traditional Mixed Achar and Village Accompaniments"
	},
	{
		id: "fara",
		name: "Kalonji Delicacy & Fara",
		description: "Steamed rice dumplings stuffed with spiced lentils and authentic stuffed kalonji.",
		story: "Fara and Kalonji are beloved delicacies rooted deeply in local village heritage. Prepared fresh with stone-ground flour and savoury fillings, offering a comforting contrast of soft texture and hearty spices.",
		price: 120,
		category: "Starters",
		image: kalonji_default,
		imageAlt: "Traditional Village Kalonji preparation"
	},
	{
		id: "seasoning-food",
		name: "Mixed Veg Delight",
		description: "Fresh farm vegetables cooked in traditional spices according to the season.",
		story: "Our Mixed Veg is a tribute to the wisdom of eating according to the seasons (Ritucharya). Crafted with fresh garden vegetables and fragrant whole spices.",
		price: 180,
		category: "Main Course",
		image: mixed_veg_default,
		imageAlt: "Seasonal Mixed Vegetable curry"
	},
	{
		id: "paneer-butter-masala",
		name: "Paneer Butter Masala",
		description: "Cubes of fresh cottage cheese simmered in a velvety, buttery tomato cashew gravy.",
		price: 260,
		category: "Main Course",
		bestseller: true,
		spice: "Mild",
		image: paneer_butter_masala_default,
		imageAlt: "Rich Paneer Butter Masala with fresh cream"
	},
	{
		id: "kadhai-paneer",
		name: "Kadhai Paneer",
		description: "Paneer cubes tossed with fresh bell peppers, onions, and freshly ground kadhai spices.",
		price: 270,
		category: "Main Course",
		spice: "Medium",
		image: kadhai_paneer_default,
		imageAlt: "Kadhai Paneer with bell peppers and roasted spices"
	},
	{
		id: "daal-makhani",
		name: "Daal Makhani",
		description: "Slow-simmered black lentils and kidney beans cooked overnight with butter and fresh cream.",
		price: 220,
		category: "Main Course",
		bestseller: true,
		spice: "Mild",
		image: daal_makhani_default,
		imageAlt: "Creamy Daal Makhani topped with fresh butter"
	},
	{
		id: "mashroom-do-pyaaja",
		name: "Mushroom Do Pyaaza",
		description: "Fresh button mushrooms cooked with double the onions in a robust aromatic gravy.",
		price: 240,
		category: "Main Course",
		spice: "Medium",
		image: mashroom_do_pyaaja_default,
		imageAlt: "Mushroom Do Pyaaza in rich masala gravy"
	},
	{
		id: "maatimahal-kadhi",
		name: "Maatimahal Kadhi Pakoda",
		description: "Sour yoghurt kadhi with soft gram-flour pakodas and mustard red chilli tempering.",
		price: 180,
		category: "Main Course",
		spice: "Medium",
		image: kadhi_default,
		imageAlt: "Traditional Maatimahal Kadhi with pakodas"
	},
	{
		id: "paneer-chilli-dry",
		name: "Paneer Chilli Dry",
		description: "Crispy fried paneer tossed with capsicum, green chillies, and savory Asian sauces.",
		price: 220,
		category: "Starters",
		spice: "Medium",
		image: paneer_chilli_dry_default,
		imageAlt: "Crispy Paneer Chilli Dry starter"
	},
	{
		id: "french-fries",
		name: "Crispy French Fries",
		description: "Golden, crispy potato fries served hot with seasoned herbs.",
		price: 110,
		category: "Starters",
		image: french_fries_default,
		imageAlt: "Golden Crispy French Fries"
	},
	{
		id: "veg-noodles",
		name: "Veg Hakka Noodles",
		description: "Wok-tossed noodles with crunchy julienned vegetables and aromatic herbs.",
		price: 160,
		category: "Starters",
		image: veg_noodles_default,
		imageAlt: "Veg Hakka Noodles wok tossed"
	},
	{
		id: "paneer-fried-rice",
		name: "Paneer Fried Rice",
		description: "Fragrant basmati rice wok-tossed with golden paneer cubes and garden vegetables.",
		price: 190,
		category: "Main Course",
		image: paneer_fried_rice_default,
		imageAlt: "Paneer Fried Rice with fresh vegetables"
	},
	{
		id: "manchurian-rice",
		name: "Veg Manchurian with Rice",
		description: "Savory vegetable dumplings in tangy sauce served alongside seasoned fried rice.",
		price: 200,
		category: "Main Course",
		image: manchurian_rice_default,
		imageAlt: "Veg Manchurian served with fried rice"
	},
	{
		id: "amritsari-kulcha",
		name: "Amritsari Stuffed Kulcha",
		description: "Crisp, layered clay-oven bread stuffed with spiced potato and paneer stuffing.",
		price: 90,
		category: "Breads",
		bestseller: true,
		image: amritsari_kulcha_default,
		imageAlt: "Crispy Amritsari Stuffed Kulcha with butter"
	},
	{
		id: "laccha-paratha",
		name: "Laccha Paratha",
		description: "Multi-layered whole wheat bread cooked in the tandoor with pure ghee.",
		price: 60,
		category: "Breads",
		image: laccha_paratha_default,
		imageAlt: "Crispy layered Laccha Paratha"
	},
	{
		id: "butter-tandoori-roti",
		name: "Butter Tandoori Roti",
		description: "Clay-oven roasted whole wheat roti glazed with melted butter.",
		price: 25,
		category: "Breads",
		image: butter_tandoori_roti_default,
		imageAlt: "Butter Tandoori Roti straight from the tandoor"
	},
	{
		id: "missi-roti",
		name: "Missi Roti",
		description: "Nutritious gram flour and wheat roti infused with ajwain, onions and fresh herbs.",
		price: 50,
		category: "Breads",
		image: missi_roti_default,
		imageAlt: "Traditional Missi Roti with herbs and ajwain"
	},
	{
		id: "gulab-jamun",
		name: "Gulab Jamun (2 pcs)",
		description: "Soft, golden milk-solid dumplings soaked in rose and cardamom scented sugar syrup.",
		price: 70,
		category: "Desserts",
		bestseller: true,
		image: gulab_jamun_default,
		imageAlt: "Warm sweet Gulab Jamun in sugar syrup"
	},
	{
		id: "kulhad-wali-chai",
		name: "Kulhad Wali Chai",
		description: "Freshly brewed kadak tea simmered with ginger and cardamom, served in clay kulhad.",
		price: 30,
		category: "Beverages",
		bestseller: true,
		image: kulhad_wali_chai_default,
		imageAlt: "Hot Kulhad Wali Chai with ginger and cardamom"
	},
	{
		id: "kulhad-coffee",
		name: "Kulhad Coffee",
		description: "Frothy, rich blended coffee served hot in authentic earthen kulhad.",
		price: 50,
		category: "Beverages",
		image: kulhad_coffee_default,
		imageAlt: "Frothy hot Kulhad Coffee"
	},
	{
		id: "desi-chhas",
		name: "Desi Masala Chhas",
		description: "Cooling churned buttermilk seasoned with roasted cumin, rock salt, and mint.",
		price: 40,
		category: "Beverages",
		image: desi_chhas_default,
		imageAlt: "Refreshing Desi Masala Chhas in glass"
	},
	{
		id: "green-salad",
		name: "Fresh Garden Green Salad",
		description: "Sliced crisp cucumbers, juicy tomatoes, onions, carrots, and fresh lemon wedges.",
		price: 60,
		category: "Starters",
		image: green_salad_default,
		imageAlt: "Fresh crisp Garden Green Salad"
	}
];
var signatureDishes = menu.filter((d) => [
	"bati-chokha",
	"tilkahru-thali",
	"matka-daal",
	"paneer-butter-masala",
	"desi-lassi",
	"sawan-kheer",
	"daal-makhani",
	"amritsari-kulcha",
	"kulhad-wali-chai"
].includes(d.id));
var galleryImages = [
	{
		src: bati_chokha_sadi_thali_default,
		alt: "Authentic Bati Chokha Thali at Maati Mahal",
		caption: "Traditional Bati Chokha Thali roasted over rustic fire",
		category: "Food"
	},
	{
		src: tilkahru_thali_default,
		alt: "Grand Tilkahru Unlimited Thali feast",
		caption: "The Grand Tilkahru Unlimited Thali experience",
		category: "Food"
	},
	{
		src: interior1_default,
		alt: "Maati Mahal interior dining hall with traditional lighting and seating",
		caption: "Warm and inviting village-themed interior seating",
		category: "Restaurant"
	},
	{
		src: hero1_default,
		alt: "Maati Mahal grand exterior entrance and building",
		caption: "Welcome to Maati Mahal — Highway & Family Dining",
		category: "Restaurant"
	},
	{
		src: hero2_default,
		alt: "Maati Mahal lawn and outdoor dining environment",
		caption: "Spacious outdoor dining & celebrations lawn",
		category: "Restaurant"
	},
	{
		src: IMG_1960_default,
		alt: "Maati Mahal warm hospitality and dining atmosphere",
		caption: "Family dining moments at Maati Mahal",
		category: "Restaurant"
	},
	{
		src: matka_daal_default,
		alt: "Matka Daal slow cooked in clay pot",
		caption: "Earthen pot Matka Daal with pure ghee tempering",
		category: "Food"
	},
	{
		src: paneer_butter_masala_default,
		alt: "Rich Paneer Butter Masala curry",
		caption: "Velvety Paneer Butter Masala",
		category: "Food"
	},
	{
		src: kadhai_paneer_default,
		alt: "Kadhai Paneer with bell peppers and roasted spices",
		caption: "Sizzling Kadhai Paneer",
		category: "Food"
	},
	{
		src: daal_makhani_default,
		alt: "Slow cooked rich Daal Makhani",
		caption: "Rich and creamy Daal Makhani",
		category: "Food"
	},
	{
		src: matke_wali_lassi_default,
		alt: "Hand churned Matke Wali Lassi in kulhad",
		caption: "Chilled Matke Wali Lassi topped with malai",
		category: "Culture"
	},
	{
		src: kulhad_wali_chai_default,
		alt: "Kulhad Wali Chai with aromatic spices",
		caption: "Traditional Kadak Chai served in earthen kulhad",
		category: "Culture"
	},
	{
		src: amritsari_kulcha_default,
		alt: "Amritsari Stuffed Kulcha straight from tandoor",
		caption: "Crisp Amritsari Stuffed Kulcha",
		category: "Food"
	},
	{
		src: sawen_ki_kheer_default,
		alt: "Sawan Kheer festive pudding",
		caption: "Monsoon Special Sawan Kheer with dry fruits",
		category: "Food"
	},
	{
		src: gulab_jamun_default,
		alt: "Sweet Gulab Jamun dumplings",
		caption: "Freshly made hot Gulab Jamun",
		category: "Food"
	},
	{
		src: galary_default,
		alt: "Maati Mahal multi-facility signboard",
		caption: "Complete facilities: Pure Veg, Banquet, Marriage Lawn & Rest Rooms",
		category: "Events"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-an0JSNKy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-2_bzfTN6.css";
function SectionHeading({ eyebrow, title, intro, align = "center", as: As = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
				className: "mt-3 text-3xl leading-tight text-primary sm:text-4xl md:text-[2.75rem]",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: intro
			}) : null,
			align === "center" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, { className: "mx-auto mt-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, { className: "mt-6" })
		]
	});
}
function DecorativeDivider({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 160 16",
		className: `h-4 w-40 text-gold ${className}`,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 8h56",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 8h56",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 1l7 7-7 7-7-7 7-7z",
				stroke: "currentColor",
				strokeWidth: "1",
				className: "text-terracotta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "66",
				cy: "8",
				r: "1.8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "94",
				cy: "8",
				r: "1.8",
				fill: "currentColor"
			})
		]
	});
}
function Section({ children, className = "", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `px-5 py-16 sm:px-8 md:py-24 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function ArchImage({ src, alt, width, height, priority = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `arch-frame bg-secondary ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width,
			height,
			loading: priority ? "eager" : "lazy",
			decoding: priority ? "sync" : "async",
			...priority ? { fetchPriority: "high" } : {},
			className: "h-full w-full object-cover"
		})
	});
}
var buttonBase = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";
var variants = {
	primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
	gold: "bg-saffron text-accent-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
	outline: "hairline-gold bg-transparent text-primary hover:bg-secondary",
	ghostLight: "hairline-gold bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
};
function ActionLink({ to, href, variant = "primary", children, className = "" }) {
	const cls = `${buttonBase} ${variants[variant]} ${className}`;
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: to ?? "/",
		className: cls,
		children
	});
}
function ActionButton({ variant = "primary", children, className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: `${buttonBase} ${variants[variant]} ${className}`,
		children
	});
}
function Tag({ children, tone = "gold", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-sm px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${{
			gold: "bg-gold/15 text-primary",
			green: "bg-forest/12 text-forest",
			terracotta: "bg-terracotta/12 text-terracotta"
		}[tone]} ${className}`,
		children
	});
}
function Breadcrumb({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "text-xs text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:text-primary",
					children: "Home"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					"aria-hidden": "true",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					"aria-current": "page",
					className: "font-semibold text-primary",
					children: page
				})
			]
		})
	});
}
function PageHero({ eyebrow, title, intro, breadcrumb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "surface-royal px-5 pt-12 pb-14 sm:px-8 md:pt-16 md:pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "[&_a]:text-primary-foreground/70 [&_li]:text-primary-foreground/70",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { page: breadcrumb })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-6 text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base",
					children: intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, { className: "mt-7" })
			]
		})
	});
}
var logo_default = "/assets/logo-DDXlAXwV.webp";
var finalLogo_default = "/assets/finalLogo-B4f0HN4K.webp";
var vegsymbol_default = "/assets/vegsymbol-CBVVaWVT.webp";
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8 lg:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						"aria-label": `${restaurant.name} home`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: restaurant.name,
							className: "size-10 shrink-0 rounded-full border border-gold/60 object-cover mix-blend-multiply"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: finalLogo_default,
								alt: restaurant.name,
								className: "h-8 w-auto object-contain sm:h-10 lg:h-11 block mix-blend-multiply",
								style: { filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.15))" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 mt-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.55rem] sm:text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase",
									children: "Family  Restaurant"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: vegsymbol_default,
									alt: "Pure Veg",
									className: "h-4 w-auto sm:h-5 object-contain mix-blend-multiply"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Main",
						className: "hidden items-center gap-6 lg:flex",
						children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeOptions: { exact: link.to === "/" },
							className: "link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-primary [&.active]:font-semibold [&.active]:text-primary",
							children: link.label
						}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reservations",
							className: "inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5",
							children: "Reserve Table"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reservations",
							className: "inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground",
							children: "Reserve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-expanded": open,
							"aria-controls": "mobile-menu",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							className: "grid size-11 shrink-0 place-items-center rounded-md border border-border text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								className: "size-5",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.8",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M6 6l12 12M18 6L6 18",
									strokeLinecap: "round"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M4 7h16M4 12h16M4 17h16",
									strokeLinecap: "round"
								})
							})
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-menu",
				ref: panelRef,
				className: "border-t border-border bg-background px-5 pb-6 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Mobile",
					className: "flex flex-col",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						activeOptions: { exact: link.to === "/" },
						onClick: () => setOpen(false),
						className: "flex min-h-12 items-center border-b border-border/60 text-base font-medium text-foreground/85 [&.active]:font-semibold [&.active]:text-primary",
						children: link.label
					}, link.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${restaurant.phoneHref}`,
					className: "mt-5 flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold/60 text-sm font-semibold text-primary",
					children: ["Call ", restaurant.phone]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, { className: "mx-auto hidden" })
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "surface-royal px-5 pt-14 pb-8 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: restaurant.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75",
							children: restaurant.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, { className: "mt-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-4 text-sm text-primary-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: restaurant.instagram,
									className: "link-underline flex items-center gap-1.5",
									rel: "noreferrer noopener",
									target: "_blank",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "ig-grad",
											x1: "0%",
											y1: "100%",
											x2: "100%",
											y2: "0%",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "0%",
													stopColor: "#f09433"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "25%",
													stopColor: "#e6683c"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "50%",
													stopColor: "#dc2743"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "75%",
													stopColor: "#cc2366"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "100%",
													stopColor: "#bc1888"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "url(#ig-grad)",
											d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
										})]
									}), "Instagram"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: restaurant.facebook,
									className: "link-underline flex items-center gap-1.5",
									rel: "noreferrer noopener",
									target: "_blank",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										fill: "#1877F2",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
									}), "Facebook"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: restaurant.googleReviewUrl,
									className: "link-underline flex items-center gap-1.5",
									rel: "noreferrer noopener",
									target: "_blank",
									children: "Google Reviews"
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Footer",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/80",
							children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: "link-underline hover:text-primary-foreground transition-colors",
								children: link.label
							}) }, link.to))
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
							children: "Visit Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/80 not-italic",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fullAddress }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${restaurant.phoneHref}`,
									className: "link-underline",
									children: restaurant.phone
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${restaurant.email}`,
									className: "link-underline",
									children: restaurant.email
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1 text-sm text-primary-foreground/70",
							children: restaurant.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary-foreground/90",
									children: [h.days, ":"]
								}),
								" ",
								h.time
							] }, h.days))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 w-full h-48 rounded-lg overflow-hidden opacity-90 hover:opacity-100 transition-opacity",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Map showing ${restaurant.name} in ${restaurant.city}`,
							src: restaurant.mapEmbedUrl,
							loading: "lazy",
							className: "w-full h-full border-0"
						})
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-center gap-3 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					restaurant.name,
					", ",
					restaurant.city,
					". Pure vegetarian kitchen. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-1",
					children: [
						"Made with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							role: "img",
							"aria-label": "love",
							children: "❤️"
						}),
						" by",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.needysolutions.info/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-primary-foreground font-medium underline underline-offset-2 transition-colors",
							children: "needysolutions"
						})
					]
				})]
			})]
		})
	});
}
/** Helper to build absolute URLs from paths */
function absoluteUrl(path) {
	return `${restaurant.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
/** Sitewide Restaurant / LocalBusiness structured data. Never fabricate ratings or awards. */
var restaurantSchema = {
	"@context": "https://schema.org",
	"@type": ["Restaurant", "FoodEstablishment"],
	"@id": absoluteUrl("/#restaurant"),
	name: restaurant.name,
	alternateName: [...restaurant.alternateNames],
	description: restaurant.shortDescription,
	telephone: restaurant.phoneHref,
	email: restaurant.email,
	servesCuisine: [...restaurant.cuisine],
	priceRange: restaurant.priceRange,
	currenciesAccepted: "INR",
	paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
	hasMenu: absoluteUrl("/menu"),
	url: absoluteUrl("/"),
	image: absoluteUrl("/favicon.jpeg"),
	hasMap: restaurant.directionsUrl,
	address: {
		"@type": "PostalAddress",
		streetAddress: restaurant.addressLine,
		addressLocality: restaurant.city,
		addressRegion: restaurant.state,
		postalCode: restaurant.pin,
		addressCountry: restaurant.country
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: restaurant.geo.latitude,
		longitude: restaurant.geo.longitude
	},
	areaServed: [
		{
			"@type": "AdministrativeArea",
			name: "Singramau"
		},
		{
			"@type": "AdministrativeArea",
			name: "Sasrhapur"
		},
		{
			"@type": "AdministrativeArea",
			name: "Jaunpur"
		},
		{
			"@type": "AdministrativeArea",
			name: "Badlapur"
		},
		{
			"@type": "Place",
			name: "NH56 Varanasi-Lucknow Highway"
		}
	],
	openingHoursSpecification: restaurant.hoursSpec.map((spec) => ({
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [...spec.days],
		opens: spec.opens,
		closes: spec.closes
	})),
	sameAs: [restaurant.instagram, restaurant.facebook],
	acceptsReservations: "https://schema.org/True",
	potentialAction: {
		"@type": "ReserveAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: absoluteUrl("/reservations")
		},
		result: {
			"@type": "FoodEstablishmentReservation",
			name: "Table Reservation"
		}
	}
};
/** FAQPage structured data for Google Rich Snippets & People Also Ask */
var faqSchema = (faqs) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer
		}
	}))
});
/** WebSite schema — helps Google understand the site entity */
var websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": absoluteUrl("/#website"),
	name: restaurant.name,
	url: absoluteUrl("/"),
	publisher: { "@id": absoluteUrl("/#restaurant") },
	inLanguage: "en-IN"
};
var menuSchema = () => {
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
			hasMenuItem: menu.filter((d) => d.category === category).map((d) => ({
				"@type": "MenuItem",
				name: d.name,
				description: d.description,
				suitableForDiet: "https://schema.org/VegetarianDiet",
				offers: {
					"@type": "Offer",
					price: d.price,
					priceCurrency: "INR"
				}
			}))
		}))
	};
};
/** Structured data for an individual dish page */
var dishSchema = (dish) => ({
	"@context": "https://schema.org",
	"@type": "MenuItem",
	name: dish.name,
	description: dish.description,
	url: absoluteUrl(`/menu/${dish.id}`),
	...dish.image ? { image: dish.image } : {},
	suitableForDiet: ["https://schema.org/VegetarianDiet"],
	offers: {
		"@type": "Offer",
		price: dish.price,
		priceCurrency: "INR",
		availability: "https://schema.org/InStock"
	},
	isPartOf: { "@id": absoluteUrl("/menu#menu") },
	mainEntityOfPage: absoluteUrl(`/menu/${dish.id}`)
});
/** Breadcrumb schema — generates absolute item URLs */
var breadcrumbSchema = (name, path) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [{
		"@type": "ListItem",
		position: 1,
		name: "Home",
		item: absoluteUrl("/")
	}, {
		"@type": "ListItem",
		position: 2,
		name,
		item: absoluteUrl(path)
	}]
});
/** 3-level breadcrumb for dish pages: Home → Menu → Dish */
var dishBreadcrumbSchema = (dishName, dishPath) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: absoluteUrl("/")
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Menu",
			item: absoluteUrl("/menu")
		},
		{
			"@type": "ListItem",
			position: 3,
			name: dishName,
			item: absoluteUrl(dishPath)
		}
	]
});
function ReservationPrompt() {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const [isClosing, setIsClosing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("matiMahalReservationPopupDismissed")) return;
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 5e3);
		return () => clearTimeout(timer);
	}, []);
	const handleDismiss = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsVisible(false);
			sessionStorage.setItem("matiMahalReservationPopupDismissed", "true");
		}, 400);
	};
	const handleReserveClick = () => {
		sessionStorage.setItem("matiMahalReservationPopupDismissed", "true");
		setIsVisible(false);
	};
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-labelledby": "reservation-prompt-title",
		className: `fixed bottom-3 left-3 right-3 z-[100] rounded-[1.25rem] border bg-[#F8F0E3] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-400 ease-out md:bottom-6 md:left-auto md:right-6 md:w-[380px] ${isClosing ? "translate-y-4 opacity-0" : "fade-up opacity-100"}`,
		style: { borderColor: "#DCC6A5" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: handleDismiss,
			"aria-label": "Close",
			className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[#5F554F] transition-colors hover:bg-black/5 hover:text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl leading-none",
				"aria-hidden": "true",
				children: "×"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-2 text-[#76232E]",
					children: "PLAN YOUR VISIT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "mx-auto mb-3 text-[10px] tracking-widest text-[#C79A5B]",
					children: "──── ◆ ────"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "reservation-prompt-title",
					className: "font-display text-[1.75rem] font-semibold leading-tight text-[#76232E]",
					children: "Your Table Awaits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-[280px] text-sm leading-relaxed text-[#5F554F]",
					children: "Join us for an authentic dining experience, warm hospitality and the flavours of Rajasthan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						onClick: handleReserveClick,
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
							to: "/reservations",
							className: "w-full bg-[#76232E] hover:bg-[#5C1A23] text-[#F8F0E3]",
							children: "Reserve a Table"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleDismiss,
						className: "px-4 py-2 text-sm font-medium text-[#5F554F] transition-colors hover:text-[#76232E]",
						children: "Not now"
					})]
				})
			]
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/918960107779`,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
		"aria-label": "Chat on WhatsApp",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "32",
			height: "32",
			fill: "currentColor",
			viewBox: "0 0 16 16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" })
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-[70vh] items-center justify-center px-5 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "This page has wandered off, like a guest lost in a haveli corridor. Let us bring you back to the table."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/",
						children: "Return Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/menu",
						variant: "outline",
						children: "Explore the Menu"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-[70vh] items-center justify-center px-5 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: [
						"Something went wrong on our end. Please try again, or call us on ",
						restaurant.phone,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hairline-gold inline-flex min-h-11 items-center rounded-md px-6 text-sm font-semibold text-primary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${restaurant.name} | Pure Vegetarian Family Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `Experience authentic village-inspired pure vegetarian dining at ${restaurant.name} on NH56 Varanasi–Lucknow Highway in ${restaurant.city}. Traditional thalis, Bati Chokha, family dining and events.`
			},
			{
				property: "og:site_name",
				content: restaurant.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: `${restaurant.name} | Family Restaurant in ${restaurant.city}`
			},
			{
				name: "twitter:description",
				content: `Authentic village-inspired pure vegetarian cuisine, traditional thalis & Bati Chokha on NH56 in ${restaurant.city}.`
			},
			{
				name: "twitter:image",
				content: absoluteUrl("/favicon.jpeg")
			},
			{
				name: "theme-color",
				content: "#6E1F2A"
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			},
			{
				name: "geo.region",
				content: "IN-UP"
			},
			{
				name: "geo.placename",
				content: `${restaurant.city}, ${restaurant.state}`
			},
			{
				name: "geo.position",
				content: `${restaurant.geo.latitude};${restaurant.geo.longitude}`
			},
			{
				name: "ICBM",
				content: `${restaurant.geo.latitude}, ${restaurant.geo.longitude}`
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.jpeg",
				type: "image/jpeg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Yatra+One&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(restaurantSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(websiteSchema)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationPrompt, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-DMgzdq4n.mjs");
var Route$11 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({
		meta: [
			{ title: `${restaurant.name} | Pure Vegetarian Family Restaurant in ${restaurant.city}, NH56` },
			{
				name: "description",
				content: `Welcome to ${restaurant.name} (also searched as Mati Mahal) — authentic pure vegetarian village-inspired restaurant in ${restaurant.city} on the Varanasi–Lucknow Highway (NH56). Traditional thalis, Bati Chokha & family dining.`
			},
			{
				property: "og:title",
				content: `${restaurant.name} | Pure Veg Family Restaurant in ${restaurant.city}, NH56`
			},
			{
				property: "og:description",
				content: `Traditional village thalis, authentic Bati Chokha, family dining, banquet hall and warm hospitality in ${restaurant.city} on NH56 Varanasi–Lucknow Highway.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(brandFaqs))
		}]
	})
});
var $$splitComponentImporter$9 = () => import("./about-M5B_lNRX.mjs");
var Route$10 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({
		meta: [
			{ title: `About ${restaurant.name} | Village Inspired Vegetarian Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `The story behind ${restaurant.name} (also searched as Mati Mahal) — an authentic pure vegetarian kitchen in ${restaurant.city} on NH56, preserving traditional village recipes, stone-ground spices and warm hospitality.`
			},
			{
				property: "og:title",
				content: `Our Story | ${restaurant.name} (${restaurant.city})`
			},
			{
				property: "og:description",
				content: `Heritage, culinary philosophy, and the family behind ${restaurant.name} in ${restaurant.city} on the Varanasi–Lucknow Highway.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/about")
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/about")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("About", "/about"))
		}]
	})
});
var $$splitComponentImporter$8 = () => import("./catering-events-BqwOmkpu.mjs");
var Route$9 = createFileRoute("/catering-events")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		meta: [
			{ title: `Catering & Events | Pure Veg Catering in ${restaurant.city}` },
			{
				name: "description",
				content: `Pure vegetarian traditional catering in ${restaurant.city} for weddings, marriage lawns, family gatherings, corporate events and parties. Send an enquiry to ${restaurant.name}.`
			},
			{
				property: "og:title",
				content: `Catering & Events | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Traditional pure-veg catering and event bookings in ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/catering-events")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/catering-events")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Catering & Events", "/catering-events"))
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./contact-CymDyohI.mjs");
var Route$8 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: `Contact & Location | ${restaurant.name}, ${restaurant.city}` },
			{
				name: "description",
				content: `Contact ${restaurant.name} (also searched as Mati Mahal) in ${restaurant.city} on NH56 Varanasi–Lucknow Highway. Address, map directions, WhatsApp, phone and opening hours.`
			},
			{
				property: "og:title",
				content: `Contact ${restaurant.name} (${restaurant.city})`
			},
			{
				property: "og:description",
				content: `Find us in ${restaurant.city}: ${fullAddress}. Call, message or get driving directions on NH56.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/contact")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/contact")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Contact", "/contact"))
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./dining-experience-C_6at0Jh.mjs");
var Route$7 = createFileRoute("/dining-experience")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: `Dining Experience | Family Veg Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `Step inside ${restaurant.name} in ${restaurant.city} — authentic village ambience, brass thali service, spacious family seating and warm hospitality.`
			},
			{
				property: "og:title",
				content: `The Dining Experience | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Ambience, traditional serving and family dining at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/dining-experience")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/dining-experience")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Dining Experience", "/dining-experience"))
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./feedback-BFxGH6lW.mjs");
var Route$6 = createFileRoute("/feedback")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: `Share Your Feedback | ${restaurant.name}, ${restaurant.city}` },
			{
				name: "description",
				content: `Tell us about your visit to ${restaurant.name} in ${restaurant.city}. Rate the food, service, cleanliness and ambience — your feedback reaches our team directly.`
			},
			{
				property: "og:title",
				content: `Your Experience Matters | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Share compliments, suggestions or concerns with the team at ${restaurant.name}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/feedback")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/feedback")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Feedback", "/feedback"))
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./gallery-YUPFphQn.mjs");
var Route$5 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: `Gallery | ${restaurant.name} Pure Veg Restaurant Photos` },
			{
				name: "description",
				content: `Authentic photos of delicious pure veg food, dining ambience, village culture and events at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:title",
				content: `Gallery | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Food, interiors and celebrations at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/gallery")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/gallery")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Gallery", "/gallery"))
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./privacy-policy-dodMgmNf.mjs");
var Route$4 = createFileRoute("/privacy-policy")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: `Privacy Policy | ${restaurant.name}` },
			{
				name: "description",
				content: `How ${restaurant.name} collects, stores and uses the details you share through reservation, feedback, catering and contact forms.`
			},
			{
				property: "og:title",
				content: `Privacy Policy | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Our approach to your personal information at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/privacy-policy")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/privacy-policy")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Privacy Policy", "/privacy-policy"))
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./reservations-DJnlYYQZ.mjs");
var Route$3 = createFileRoute("/reservations")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: `Reserve a Table | ${restaurant.name}, ${restaurant.city}` },
			{
				name: "description",
				content: `Request a table at ${restaurant.name}, an authentic pure vegetarian restaurant in ${restaurant.city}. Share your date, time and guest count and our team will confirm.`
			},
			{
				property: "og:title",
				content: `Table Reservations | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Reserve a table for family dining at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/reservations")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/reservations")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Reservations", "/reservations"))
		}]
	})
});
var BASE_URL = restaurant.siteUrl.replace(/\/$/, "");
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const entries = [
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0",
			lastmod: today
		},
		{
			path: "/menu",
			changefreq: "weekly",
			priority: "0.9",
			lastmod: today
		},
		{
			path: "/reservations",
			changefreq: "monthly",
			priority: "0.9",
			lastmod: today
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8",
			lastmod: today
		},
		{
			path: "/dining-experience",
			changefreq: "monthly",
			priority: "0.8",
			lastmod: today
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.7",
			lastmod: today
		},
		{
			path: "/catering-events",
			changefreq: "monthly",
			priority: "0.8",
			lastmod: today
		},
		{
			path: "/feedback",
			changefreq: "monthly",
			priority: "0.6",
			lastmod: today
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.8",
			lastmod: today
		},
		{
			path: "/privacy-policy",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: today
		}
	];
	for (const dish of menu) entries.push({
		path: `/menu/${dish.id}`,
		changefreq: "monthly",
		priority: dish.bestseller ? "0.7" : "0.6",
		lastmod: today
	});
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...entries.map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./menu.index-bywIgjta.mjs");
var Route$1 = createFileRoute("/menu/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: `Menu | Maatimahal Thali & Pure Veg Dishes in ${restaurant.city}` },
			{
				name: "description",
				content: `Browse the complete pure vegetarian menu at ${restaurant.name}, ${restaurant.city} — Maatimahal specials, thalis, breads, desserts and beverages with prices.`
			},
			{
				property: "og:title",
				content: `Menu | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Maatimahal specials, thalis and classic vegetarian dishes at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/menu")
			},
			{
				property: "og:image",
				content: absoluteUrl("/favicon.jpeg")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/menu")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(menuSchema())
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Menu", "/menu"))
		}]
	})
});
var $$splitNotFoundComponentImporter = () => import("./menu_._dishId-x-9kBCVc.mjs");
var $$splitComponentImporter = () => import("./menu_._dishId-CgZoDJ93.mjs");
var Route = createFileRoute("/menu_/$dishId")({
	loader: async ({ params }) => {
		const dish = menu.find((d) => d.id === params.dishId);
		if (!dish) throw notFound();
		return {
			dish,
			relatedDishes: menu.filter((d) => d.category === dish.category && d.id !== dish.id).slice(0, 3)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { dish } = loaderData;
		const title = `${dish.name} | ${restaurant.name}, ${restaurant.city}`;
		const description = dish.story ? `${dish.description} ${dish.story.slice(0, 100)}...` : `${dish.description} Served at ${restaurant.name}, a pure vegetarian restaurant in ${restaurant.city}.`;
		const dishPath = `/menu/${dish.id}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: `${dish.name} | ${restaurant.name}`
				},
				{
					property: "og:description",
					content: dish.description
				},
				{
					property: "og:url",
					content: absoluteUrl(dishPath)
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:image",
					content: absoluteUrl("/favicon.jpeg")
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: absoluteUrl(dishPath)
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(dishSchema(dish))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(dishBreadcrumbSchema(dish.name, dishPath))
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var CateringEventsRoute = Route$9.update({
	id: "/catering-events",
	path: "/catering-events",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var DiningExperienceRoute = Route$7.update({
	id: "/dining-experience",
	path: "/dining-experience",
	getParentRoute: () => Route$12
});
var FeedbackRoute = Route$6.update({
	id: "/feedback",
	path: "/feedback",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$12
});
var PrivacyPolicyRoute = Route$4.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$12
});
var ReservationsRoute = Route$3.update({
	id: "/reservations",
	path: "/reservations",
	getParentRoute: () => Route$12
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var MenuIndexRoute = Route$1.update({
	id: "/menu/",
	path: "/menu/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CateringEventsRoute,
	ContactRoute,
	DiningExperienceRoute,
	FeedbackRoute,
	GalleryRoute,
	PrivacyPolicyRoute,
	ReservationsRoute,
	SitemapDotxmlRoute,
	MenuDishIdRoute: Route.update({
		id: "/menu_/$dishId",
		path: "/menu/$dishId",
		getParentRoute: () => Route$12
	}),
	MenuIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { restaurant as A, brandFaqs as C, fullAddress as D, feedbackTypes as E, trustHighlights as M, values as N, milestones as O, hero1_default as S, eventTypes as T, signatureDishes as _, ArchImage as a, interior1_default as b, Section as c, bati_chokha_sadi_thali_default as d, galleryImages as f, paneer_butter_masala_default as g, menuCategories as h, ActionLink as i, timeSlots as j, occasions as k, SectionHeading as l, menu as m, Route as n, DecorativeDivider as o, matka_daal_default as p, ActionButton as r, PageHero as s, router_exports as t, Tag as u, matke_wali_lassi_default as v, eventServices as w, hero2_default as x, tilkahru_thali_default as y };
