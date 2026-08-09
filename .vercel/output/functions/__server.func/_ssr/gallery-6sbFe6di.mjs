import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as PageHero, f as Section, n as galleryImages } from "./router-2U5FG5nL.mjs";
import { t as hero1_default } from "./hero1-dOPlff5Y.mjs";
import { n as rajasthani_restaurant_interior_jharokha_arches_default, t as rajasthani_family_dining_celebration_default } from "./rajasthani-family-dining-celebration-BHi2V532.mjs";
import { t as rajasthani_catering_event_setup_default } from "./rajasthani-catering-event-setup-C7JNT9xg.mjs";
import { n as image_default, r as rajasthani_chef_traditional_cooking_default, t as hero2_default } from "./image-0hi0KbN5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-6sbFe6di.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var allImages = [
	...galleryImages,
	{
		src: rajasthani_restaurant_interior_jharokha_arches_default,
		alt: "Restaurant interior with carved sandstone jharokha arches and brass lanterns",
		caption: "Carved arches in the main dining room",
		category: "Restaurant"
	},
	{
		src: rajasthani_chef_traditional_cooking_default,
		alt: "Rajasthani cook preparing baati over a clay chulha with brass utensils",
		caption: "Baati over the clay chulha",
		category: "Restaurant"
	},
	{
		src: hero1_default,
		alt: "Padmini Rasoi exterior and ambiance",
		caption: "Our beautiful exterior",
		category: "Restaurant"
	},
	{
		src: hero2_default,
		alt: "Padmini Rasoi dining area and experience",
		caption: "A place for every occasion",
		category: "Restaurant"
	},
	{
		src: image_default,
		alt: "Padmini Rasoi facilities",
		caption: "More than a meal",
		category: "Restaurant"
	},
	{
		src: rajasthani_family_dining_celebration_default,
		alt: "Rajasthani family dining together over brass thalis with a folk musician nearby",
		caption: "A family celebration in progress",
		category: "Events"
	},
	{
		src: rajasthani_catering_event_setup_default,
		alt: "Rajasthani wedding catering buffet with brass vessels and marigold decorations",
		caption: "Traditional catering setup for weddings",
		category: "Events"
	}
];
var filters = [
	"All",
	"Food",
	"Restaurant",
	"Culture",
	"Events"
];
function Gallery() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const images = (0, import_react.useMemo)(() => filter === "All" ? allImages : allImages.filter((i) => i.category === filter), [filter]);
	const close = (0, import_react.useCallback)(() => setOpenIndex(null), []);
	(0, import_react.useEffect)(() => {
		if (openIndex === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") setOpenIndex((i) => i === null ? i : (i + 1) % images.length);
			if (e.key === "ArrowLeft") setOpenIndex((i) => i === null ? i : (i - 1 + images.length) % images.length);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [
		openIndex,
		images.length,
		close
	]);
	const active = openIndex === null ? null : images[openIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "Gallery",
			eyebrow: "Gallery",
			title: "Our Food, Rooms and Celebrations",
			intro: "A look at the plates we serve, the rooms we serve them in, and the evenings they belong to."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-wrap gap-2",
			children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": filter === f,
				onClick: () => {
					setFilter(f);
					setOpenIndex(null);
				},
				className: `min-h-11 rounded-md px-5 text-sm font-semibold transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "hairline-gold bg-card text-primary hover:bg-secondary"}`,
				children: f
			}) }, f))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3",
			children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: index % 5 === 0 ? "lg:row-span-2" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpenIndex(index),
					className: "group hairline-gold block h-full w-full overflow-hidden rounded-lg bg-secondary text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						width: 1200,
						height: 900,
						loading: "lazy",
						decoding: "async",
						className: `w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${index % 5 === 0 ? "h-64 lg:h-[33rem]" : "h-64"}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block px-4 py-3 text-sm font-medium text-primary",
						children: image.caption
					})]
				})
			}, `${image.src}-${image.caption}`))
		})] }),
		active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.caption,
			className: "fixed inset-0 z-60 flex flex-col items-center justify-center bg-[oklch(0.2_0.02_40/0.92)] p-4",
			onClick: close,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "m-0 max-h-full w-full max-w-4xl",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: active.src,
					alt: active.alt,
					className: "max-h-[70vh] w-full rounded-lg object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-4 text-center text-sm text-secondary",
					children: active.caption
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpenIndex((i) => i === null ? i : (i - 1 + images.length) % images.length),
						className: "hairline-gold min-h-11 rounded-md px-5 text-sm font-semibold text-secondary",
						children: "Previous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: close,
						autoFocus: true,
						className: "min-h-11 rounded-md bg-saffron px-5 text-sm font-semibold text-accent-foreground",
						children: "Close"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpenIndex((i) => i === null ? i : (i + 1) % images.length),
						className: "hairline-gold min-h-11 rounded-md px-5 text-sm font-semibold text-secondary",
						children: "Next"
					})
				]
			})]
		}) : null
	] });
}
//#endregion
export { Gallery as component };
