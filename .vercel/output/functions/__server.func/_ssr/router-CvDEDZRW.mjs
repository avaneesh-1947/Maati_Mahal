import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { L as notFound, _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rajasthani-folk-culture-performance-Tt6D6hoJ.js
var rajasthani_vegetarian_thali_brass_plate_default = "/assets/rajasthani-vegetarian-thali-brass-plate-DG2QHqgl.jpg";
var rajasthani_folk_culture_performance_default = "/assets/rajasthani-folk-culture-performance-CNNKgBkP.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/menu-ckwqSuLq.js
var dal_baati_churma_ghee_default = "/assets/dal-baati-churma-ghee-C41g9KJo.jpg";
var gatte_ki_sabzi_copper_bowl_default = "/assets/gatte-ki-sabzi-copper-bowl-nr7doB95.jpg";
var ker_sangri_bajra_roti_default = "/assets/ker-sangri-bajra-roti-BOwlWyqM.jpg";
var rajasthani_sweets_ghevar_malpua_default = "/assets/rajasthani-sweets-ghevar-malpua-Cwvg57PK.jpg";
var veg_thali_default = "/assets/veg-thali-DuCREmOj.jpg";
var menuCategories = [
	"Rajasthani Specials",
	"Thalis",
	"Starters",
	"Main Course",
	"Breads",
	"Desserts",
	"Beverages",
	"Jain Specials"
];
var menu = [
	{
		id: "bati-chokha",
		name: "Bati Chokha",
		description: "Traditional roasted wheat baati served with spiced mashed vegetables.",
		story: "Bati Chokha is the soulful comfort food of the village. Our baatis are hand-rolled and roasted slowly over cow dung cakes to impart that signature rustic, smoky flavour. We serve it alongside a fiery, perfectly mashed 'chokha' made from fire-roasted brinjals, tomatoes, and potatoes mixed with pungent mustard oil and fresh green chillies. Every bite is a nostalgic journey to the vibrant village courtyards of the heartland.",
		price: 250,
		category: "Rajasthani Specials",
		image: dal_baati_churma_ghee_default,
		imageAlt: "Bati Chokha preparation"
	},
	{
		id: "tilkahru-thali",
		name: "Tilkahru Thali (Unlimited thali - 25)",
		description: "Our special unlimited traditional thali experience.",
		story: "The Tilkahru Thali is a celebration of abundance and hospitality. Following the timeless tradition of 'Atithi Devo Bhavah', this unlimited thali ensures that your plate is never empty. We serve an endless array of traditional curries, fresh hot breads, rice, and cooling accompaniments. It's not just a meal; it's a grand feast designed to honor our guests with the warmth of an Indian home.",
		price: 25,
		category: "Thalis",
		image: veg_thali_default,
		imageAlt: "Tilkahru Thali"
	},
	{
		id: "matka-daal",
		name: "Matka Daal",
		description: "Slow-cooked lentils prepared authentically in an earthen pot.",
		story: "There is magic in the mud. Our Matka Daal is slow-cooked over a low wood fire in unglazed earthen pots (matkas) for several hours. This ancient technique allows the lentils to break down naturally while absorbing earthy aromas from the clay. Tempered with pure ghee, cumin, and whole dried red chillies, this simple staple is transformed into a rich, creamy, and unforgettable delicacy.",
		price: 200,
		category: "Main Course",
		image: gatte_ki_sabzi_copper_bowl_default,
		imageAlt: "Matka Daal"
	},
	{
		id: "sawan-kheer",
		name: "Sawan Kheer",
		description: "Festive milk and rice pudding enriched with dry fruits.",
		story: "Traditionally prepared to welcome the monsoon (Sawan), this kheer is a luxurious celebration in a bowl. We simmer full-fat milk for hours until it thickens and blushes pink, before introducing fragrant basmati rice, generous threads of saffron, and crushed green cardamom. Garnished with a royal mix of almonds, pistachios, and chironji, it is the perfect sweet end to your hearty meal.",
		price: 150,
		category: "Desserts",
		image: rajasthani_sweets_ghevar_malpua_default,
		imageAlt: "Sawan Kheer"
	},
	{
		id: "desi-lassi",
		name: "Desi Lassi",
		description: "Traditional hand-churned thick sweet yoghurt drink.",
		story: "Nothing beats the refreshing chill of our Desi Lassi. We use rich, full-cream yoghurt set in earthen vessels overnight. The yoghurt is then rigorously hand-churned using a wooden mathani to achieve a thick, frothy texture that blenders simply cannot replicate. Sweetened naturally and sometimes topped with a dollop of fresh malai, it cools the palate and aids digestion beautifully.",
		price: 80,
		category: "Beverages",
		image: rajasthani_folk_culture_performance_default,
		imageAlt: "Desi Lassi"
	},
	{
		id: "laal-dahi",
		name: "Laal Dahi",
		description: "Signature spiced red yoghurt preparation.",
		story: "Laal Dahi is our vibrant, closely guarded secret. This fiery yet cooling dish gets its striking crimson hue from premium Mathania red chillies, balanced perfectly with the tartness of fresh hung curd. Tempered with mustard seeds and curry leaves, it acts as a bold, tantalizing side dish that cuts through the richness of our heavier curries and leaves a lingering, complex warmth.",
		price: 100,
		category: "Rajasthani Specials",
		image: ker_sangri_bajra_roti_default,
		imageAlt: "Laal Dahi"
	},
	{
		id: "fara",
		name: "Fara",
		description: "Steamed rice flour dumplings stuffed with spiced lentils.",
		story: "Fara is a beloved, healthy delicacy rooted deeply in local tradition. We prepare fresh dough from stone-ground rice flour and mold it into delicate pockets. These are generously stuffed with a savoury, heavily spiced mix of chana and urad dal, fragrant with ginger, garlic, and fresh coriander. Steamed to perfection, they offer a wonderful contrast of a soft exterior and a hearty, flavourful core.",
		price: 120,
		category: "Starters",
		image: rajasthani_vegetarian_thali_brass_plate_default,
		imageAlt: "Fara"
	},
	{
		id: "seasoning-food",
		name: "Seasoning Food",
		description: "A special variety of seasonal preparations.",
		story: "Our 'Seasoning Food' is a tribute to the wisdom of eating according to the seasons (Ritucharya). The ingredients and preparation methods for this dish change entirely depending on the time of year. Whether it's warming, robust spices in the winter or cooling, light preparations in the summer, this dish is crafted from the freshest seasonal harvests directly from local farmers.",
		price: 100,
		category: "Main Course",
		image: veg_thali_default,
		imageAlt: "Seasoning Food"
	},
	{
		id: "dal-baati-churma",
		name: "Dal Baati Churma",
		description: "Wood-fired wheat baatis soaked in pure ghee, served with slow-cooked panchmel dal and sweet churma.",
		price: 340,
		category: "Rajasthani Specials",
		bestseller: true,
		jain: true,
		spice: "Mild",
		image: dal_baati_churma_ghee_default,
		imageAlt: "Dal baati churma with pure ghee poured over baatis in a brass bowl"
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
		image: gatte_ki_sabzi_copper_bowl_default,
		imageAlt: "Gatte ki sabzi served in a hammered copper bowl garnished with coriander"
	},
	{
		id: "ker-sangri",
		name: "Ker Sangri",
		description: "The desert classic — sun-dried ker berries and sangri beans tempered with mathania chilli.",
		price: 310,
		category: "Rajasthani Specials",
		spice: "Fiery",
		jain: true,
		image: ker_sangri_bajra_roti_default,
		imageAlt: "Ker sangri desert vegetable dish in a brass bowl with bajra roti"
	},
	{
		id: "laal-maas-veg",
		name: "Mirchi Ke Tipore",
		description: "Jodhpuri green chillies tossed with amchur and fennel — served as a fiery accompaniment.",
		price: 180,
		category: "Rajasthani Specials",
		spice: "Fiery"
	},
	{
		id: "royal-thali",
		name: "Royal Rajasthani Thali",
		description: "Seventeen preparations — dal baati churma, gatte, ker sangri, kadhi, seasonal sabzi, breads, rice, papad, chutneys and two sweets.",
		price: 690,
		category: "Thalis",
		bestseller: true,
		jain: true,
		image: rajasthani_vegetarian_thali_brass_plate_default,
		imageAlt: "Traditional Rajasthani vegetarian thali served in brass plates and bowls"
	},
	{
		id: "marwari-thali",
		name: "Marwari Everyday Thali",
		description: "Panchmel dal, one seasonal sabzi, bajra or wheat roti, rice, buttermilk and a sweet.",
		price: 380,
		category: "Thalis",
		jain: true
	},
	{
		id: "jain-thali",
		name: "Jain Special Thali",
		description: "Prepared without onion, garlic or root vegetables in dedicated vessels.",
		price: 420,
		category: "Thalis",
		jain: true
	},
	{
		id: "pyaaz-kachori",
		name: "Kachori (Jain: Dal)",
		description: "Flaky kachori with a spiced filling, served with tamarind and mint chutneys.",
		price: 140,
		category: "Starters",
		jain: true,
		spice: "Medium"
	},
	{
		id: "mirchi-vada",
		name: "Mirchi Vada",
		description: "Jodhpur-style stuffed chilli fritter with a potato and fennel filling.",
		price: 160,
		category: "Starters",
		spice: "Fiery"
	},
	{
		id: "paneer-tikka",
		name: "Malai Paneer Tikka",
		description: "Hand-set paneer marinated in cream, cardamom and white pepper, finished in the tandoor.",
		price: 320,
		category: "Starters",
		bestseller: true,
		spice: "Mild"
	},
	{
		id: "panchmel-dal",
		name: "Panchmel Dal",
		description: "Five lentils tempered with cumin, hing and ghee — simmered for three hours.",
		price: 240,
		category: "Main Course",
		jain: true,
		spice: "Mild"
	},
	{
		id: "govind-gatta",
		name: "Govind Gatta Curry",
		description: "Stuffed gram-flour rolls with dry fruits in a rich cashew and tomato gravy.",
		price: 330,
		category: "Main Course",
		spice: "Medium"
	},
	{
		id: "kadhi-pakoda",
		name: "Rajasthani Kadhi Pakoda",
		description: "Sour yoghurt kadhi with soft gram-flour pakodas and a red chilli tempering.",
		price: 260,
		category: "Main Course",
		jain: true,
		spice: "Medium"
	},
	{
		id: "bajra-roti",
		name: "Bajra Roti with Ghee",
		description: "Hand-patted millet roti from the griddle, brushed with white butter.",
		price: 70,
		category: "Breads",
		jain: true
	},
	{
		id: "missi-roti",
		name: "Missi Roti",
		description: "Gram flour and wheat roti with ajwain and coriander.",
		price: 80,
		category: "Breads",
		jain: true
	},
	{
		id: "ghevar",
		name: "Ghevar",
		description: "Honeycomb disc of ghee-fried batter soaked in saffron syrup, topped with rabri.",
		price: 220,
		category: "Desserts",
		bestseller: true,
		image: rajasthani_sweets_ghevar_malpua_default,
		imageAlt: "Ghevar and malpua Rajasthani sweets on a brass plate with pistachio and saffron"
	},
	{
		id: "malpua",
		name: "Malpua with Rabri",
		description: "Griddled saffron pancakes served warm with thickened milk.",
		price: 200,
		category: "Desserts"
	},
	{
		id: "moong-halwa",
		name: "Moong Dal Halwa",
		description: "Slow-roasted in ghee for hours, finished with almond and cardamom.",
		price: 190,
		category: "Desserts",
		jain: true
	},
	{
		id: "masala-chaas",
		name: "Masala Chaas",
		description: "Churned buttermilk with roasted cumin, black salt and curry leaf.",
		price: 90,
		category: "Beverages",
		jain: true
	},
	{
		id: "kesar-lassi",
		name: "Kesar Lassi",
		description: "Thick sweet lassi with saffron, served in a traditional brass tumbler.",
		price: 150,
		category: "Beverages",
		bestseller: true,
		jain: true
	},
	{
		id: "masala-chai",
		name: "Kadak Masala Chai",
		description: "Boiled with ginger, cardamom and fresh tulsi.",
		price: 70,
		category: "Beverages",
		jain: true
	},
	{
		id: "jain-paneer",
		name: "Jain Paneer Lababdar",
		description: "Paneer in a tomato and cashew gravy, cooked without onion or garlic.",
		price: 330,
		category: "Jain Specials",
		jain: true,
		spice: "Mild"
	},
	{
		id: "jain-sev-tamatar",
		name: "Jain Sev Tamatar",
		description: "Tangy tomato curry finished with crisp gram-flour sev.",
		price: 250,
		category: "Jain Specials",
		jain: true,
		spice: "Medium"
	}
];
var signatureDishes = menu.filter((d) => [
	"bati-chokha",
	"tilkahru-thali",
	"matka-daal",
	"sawan-kheer",
	"desi-lassi",
	"laal-dahi",
	"fara",
	"seasoning-food"
].includes(d.id));
var galleryImages = [
	{
		src: rajasthani_vegetarian_thali_brass_plate_default,
		alt: "Traditional Rajasthani vegetarian thali served in brass plates and bowls",
		caption: "The Royal Rajasthani Thali, served in brass",
		category: "Food"
	},
	{
		src: dal_baati_churma_ghee_default,
		alt: "Pure ghee being poured over wood-fired baati with panchmel dal and churma",
		caption: "Ghee poured over wood-fired baati",
		category: "Food"
	},
	{
		src: gatte_ki_sabzi_copper_bowl_default,
		alt: "Gatte ki sabzi in a hammered copper bowl garnished with coriander",
		caption: "Gatte ki sabzi in hammered copper",
		category: "Food"
	},
	{
		src: ker_sangri_bajra_roti_default,
		alt: "Ker sangri desert vegetable preparation with bajra roti",
		caption: "Ker sangri with bajra roti",
		category: "Food"
	},
	{
		src: rajasthani_sweets_ghevar_malpua_default,
		alt: "Ghevar and malpua Rajasthani sweets with saffron and pistachio",
		caption: "Ghevar and malpua from our sweet kitchen",
		category: "Food"
	},
	{
		src: rajasthani_folk_culture_performance_default,
		alt: "Rajasthani folk dancer performing ghoomar in a lamp-lit courtyard",
		caption: "Ghoomar evenings in the courtyard",
		category: "Culture"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CvDEDZRW.js
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
var styles_default = "/assets/styles-Bg1LVfxM.css";
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
	geo: {
		latitude: 25.9667,
		longitude: 82.2667
	},
	mapEmbedUrl: "https://www.google.com/maps?q=Singramau+Uttar+Pradesh&output=embed",
	directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Singramau+Uttar+Pradesh",
	instagram: "https://instagram.com/",
	facebook: "https://facebook.com/",
	googleReviewUrl: "https://www.google.com/maps",
	priceRange: "₹₹",
	cuisine: [
		"Village Inspired",
		"North Indian",
		"Vegetarian"
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
	}]
};
var fullAddress = `${restaurant.city}, ${restaurant.addressLine}, ${restaurant.pin}`;
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
	"Jain Options"
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
function Tag({ children, tone = "gold" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-sm px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${{
			gold: "bg-gold/15 text-primary",
			green: "bg-forest/12 text-forest",
			terracotta: "bg-terracotta/12 text-terracotta"
		}[tone]}`,
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
var logo_default = "/assets/logo-CQ4WEttI.jpeg";
var finalLogo_default = "/assets/finalLogo-CP_voAKY.png";
var vegsymbol_default = "/assets/vegsymbol-BhG4_x_-.jpg";
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
				className: "grid gap-10 md:grid-cols-3",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: restaurant.instagram,
									className: "link-underline",
									rel: "noreferrer noopener",
									target: "_blank",
									children: "Instagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: restaurant.facebook,
									className: "link-underline",
									rel: "noreferrer noopener",
									target: "_blank",
									children: "Facebook"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: restaurant.googleReviewUrl,
									className: "link-underline",
									rel: "noreferrer noopener",
									target: "_blank",
									children: "Google Reviews"
								})
							]
						})
					] }),
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Made with love by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.needysolutions.info/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary-foreground font-medium underline underline-offset-2 transition-colors",
						children: "needysolutions"
					})
				] })]
			})]
		})
	});
}
/** Sitewide Restaurant / LocalBusiness structured data. Never fabricate ratings or awards. */
var restaurantSchema = {
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
		addressCountry: restaurant.country
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: restaurant.geo.latitude,
		longitude: restaurant.geo.longitude
	},
	openingHoursSpecification: restaurant.hoursSpec.map((spec) => ({
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [...spec.days],
		opens: spec.opens,
		closes: spec.closes
	})),
	sameAs: [restaurant.instagram, restaurant.facebook],
	acceptsReservations: "https://schema.org/True"
};
var menuSchema = () => {
	const categories = [...new Set(menu.map((d) => d.category))];
	return {
		"@context": "https://schema.org",
		"@type": "Menu",
		name: `${restaurant.name} Menu`,
		inLanguage: "en",
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
var breadcrumbSchema = (name, path) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [{
		"@type": "ListItem",
		position: 1,
		name: "Home",
		item: "/"
	}, {
		"@type": "ListItem",
		position: 2,
		name,
		item: path
	}]
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
		href: `https://wa.me/916390278657`,
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
			{ title: `${restaurant.name} | Authentic Village Inspired Vegetarian Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `Experience authentic village inspired vegetarian cuisine at ${restaurant.name} in ${restaurant.city}. Traditional thalis, family dining and warm hospitality.`
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
				name: "theme-color",
				content: "#6E1F2A"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationPrompt, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-DEm0paZs.mjs");
var Route$11 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({
		meta: [
			{ title: `${restaurant.name} | Authentic Village Inspired Vegetarian Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `Experience authentic village inspired vegetarian cuisine at ${restaurant.name} in ${restaurant.city}. Explore traditional thalis, family dining, warm hospitality and timeless village flavours.`
			},
			{
				property: "og:title",
				content: `${restaurant.name} | Pure Veg Village Inspired Restaurant in ${restaurant.city}`
			},
			{
				property: "og:description",
				content: `Traditional village thalis, Jain-friendly options and warm family dining in ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
var $$splitComponentImporter$9 = () => import("./about-Bbd04-vP.mjs");
var Route$10 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({
		meta: [
			{ title: `About ${restaurant.name} | Marwari Vegetarian Kitchen in ${restaurant.city}` },
			{
				name: "description",
				content: `The story behind ${restaurant.name} — a pure vegetarian Marwari kitchen in ${restaurant.city} preserving Rajasthani recipes, stone-ground spices and traditional hospitality.`
			},
			{
				property: "og:title",
				content: `Our Story | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Heritage, philosophy and the family behind ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("About", "/about"))
		}]
	})
});
var $$splitComponentImporter$8 = () => import("./catering-events-S8Q_6N4b.mjs");
var Route$9 = createFileRoute("/catering-events")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		meta: [
			{ title: `Catering & Events | Pure Veg Rajasthani Catering in ${restaurant.city}` },
			{
				name: "description",
				content: `Pure vegetarian Rajasthani catering in ${restaurant.city} for weddings, family gatherings, corporate events and kitty parties. Send an enquiry to ${restaurant.name}.`
			},
			{
				property: "og:title",
				content: `Catering & Events | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Traditional pure-veg catering and group bookings in ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: "/catering-events"
			}
		],
		links: [{
			rel: "canonical",
			href: "/catering-events"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Catering & Events", "/catering-events"))
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./contact-CQmoxaLI.mjs");
var Route$8 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: `Contact & Location | ${restaurant.name}, ${restaurant.city}` },
			{
				name: "description",
				content: `Address, phone, WhatsApp and opening hours for ${restaurant.name} — a pure veg Rajasthani restaurant in ${restaurant.city}, near ${restaurant.landmark}.`
			},
			{
				property: "og:title",
				content: `Contact ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Find us in ${restaurant.city}: ${fullAddress}. Call, message or get directions.`
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Contact", "/contact"))
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./dining-experience-C5d26tjp.mjs");
var Route$7 = createFileRoute("/dining-experience")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: `Dining Experience | Family Veg Restaurant in ${restaurant.city}` },
			{
				name: "description",
				content: `Step inside ${restaurant.name} in ${restaurant.city} — carved arches, brass thali service, family seating and traditional Rajasthani hospitality.`
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
				content: "/dining-experience"
			}
		],
		links: [{
			rel: "canonical",
			href: "/dining-experience"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Dining Experience", "/dining-experience"))
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./feedback-s0zrfgjM.mjs");
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
				content: "/feedback"
			}
		],
		links: [{
			rel: "canonical",
			href: "/feedback"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Feedback", "/feedback"))
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./gallery-0TpkZf7L.mjs");
var Route$5 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: `Gallery | ${restaurant.name} Rajasthani Veg Restaurant Photos` },
			{
				name: "description",
				content: `Photos of food, interiors, culture and celebrations at ${restaurant.name}, ${restaurant.city} — traditional Rajasthani thalis and haveli-inspired dining rooms.`
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
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Gallery", "/gallery"))
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./privacy-policy-DALfFj2-.mjs");
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
				content: "/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./reservations-CBRfJIbK.mjs");
var Route$3 = createFileRoute("/reservations")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: `Reserve a Table | ${restaurant.name}, ${restaurant.city}` },
			{
				name: "description",
				content: `Request a table at ${restaurant.name}, an authentic pure vegetarian Rajasthani restaurant in ${restaurant.city}. Share your date, time and guest count and our team will confirm.`
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
				content: "/reservations"
			}
		],
		links: [{
			rel: "canonical",
			href: "/reservations"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema("Reservations", "/reservations"))
		}]
	})
});
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/menu",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/reservations",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/dining-experience",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/catering-events",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/feedback",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/privacy-policy",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
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
var $$splitComponentImporter$1 = () => import("./menu.index-BIm1E78l.mjs");
var Route$1 = createFileRoute("/menu/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: `Menu | Rajasthani Thali & Pure Veg Dishes in ${restaurant.city}` },
			{
				name: "description",
				content: `Browse the complete pure vegetarian menu at ${restaurant.name}, ${restaurant.city} — Rajasthani specials, thalis, Jain preparations, breads, desserts and beverages with prices.`
			},
			{
				property: "og:title",
				content: `Menu | ${restaurant.name}`
			},
			{
				property: "og:description",
				content: `Rajasthani specials, thalis and Jain-friendly dishes at ${restaurant.name}, ${restaurant.city}.`
			},
			{
				property: "og:url",
				content: "/menu"
			}
		],
		links: [{
			rel: "canonical",
			href: "/menu"
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
var $$splitComponentImporter = () => import("./menu_._dishId-AglYjmKr.mjs");
var Route = createFileRoute("/menu_/$dishId")({
	loader: async ({ params }) => {
		const dish = menu.find((d) => d.id === params.dishId);
		if (!dish) throw notFound();
		return { dish };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
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
export { menuCategories as C, rajasthani_folk_culture_performance_default as D, veg_thali_default as E, rajasthani_vegetarian_thali_brass_plate_default as O, menu as S, signatureDishes as T, restaurant as _, ArchImage as a, values as b, Section as c, eventServices as d, eventTypes as f, occasions as g, milestones as h, ActionLink as i, SectionHeading as l, fullAddress as m, Route as n, DecorativeDivider as o, feedbackTypes as p, ActionButton as r, PageHero as s, router_exports as t, Tag as u, timeSlots as v, rajasthani_sweets_ghevar_malpua_default as w, galleryImages as x, trustHighlights as y };
