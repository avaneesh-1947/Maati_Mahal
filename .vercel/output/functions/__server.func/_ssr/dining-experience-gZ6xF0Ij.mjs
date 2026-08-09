import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as rajasthani_vegetarian_thali_brass_plate_default, T as rajasthani_folk_culture_performance_default, c as ActionLink, d as PageHero, f as Section, l as ArchImage, p as SectionHeading } from "./router-49-DB7f7.mjs";
import { n as rajasthani_restaurant_interior_jharokha_arches_default, t as rajasthani_family_dining_celebration_default } from "./rajasthani-family-dining-celebration-BHi2V532.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dining-experience-gZ6xF0Ij.js
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		eyebrow: "The Room",
		title: "Sandstone, Brass and Lamplight",
		body: "Carved jharokha arches frame the room. Brass lanterns cast a low, warm light, block-print cushions soften the seating, and the floor is inlaid with a single mandala at its centre. Nothing shouts; everything belongs.",
		src: rajasthani_restaurant_interior_jharokha_arches_default,
		alt: "Restaurant interior with carved sandstone jharokha arches, maroon velvet seating and brass lanterns",
		width: 1600,
		height: 1104
	},
	{
		eyebrow: "The Service",
		title: "Thalis Served the Old Way",
		body: "Your thali is laid out in the order it is meant to be eaten — dal and baati at the centre, sabzi and kadhi to the side, chutneys at the rim, sweets last. Refills arrive quietly, before you have to ask.",
		src: rajasthani_vegetarian_thali_brass_plate_default,
		alt: "Rajasthani vegetarian thali laid out in brass katoris with dal, baati, churma and breads",
		width: 1600,
		height: 1104
	},
	{
		eyebrow: "The Table",
		title: "Built for Families",
		body: "Long tables for grandparents and grandchildren, high chairs without being asked, unhurried second helpings, and space for a birthday cake beside the ghevar.",
		src: rajasthani_family_dining_celebration_default,
		alt: "Rajasthani family of three generations dining together over brass thalis",
		width: 1408,
		height: 1008
	},
	{
		eyebrow: "The Evenings",
		title: "Folk Music and Ghoomar",
		body: "On selected weekend evenings, a sarangi player and a ghoomar dancer perform in the courtyard — quietly enough that conversation continues, close enough that children stand up to watch.",
		src: rajasthani_folk_culture_performance_default,
		alt: "Rajasthani folk dancer performing ghoomar beside brass lamps in a courtyard",
		width: 1008,
		height: 1008
	}
];
function DiningExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "Dining Experience",
			eyebrow: "The Experience",
			title: "An Evening in a Rajasthani Haveli",
			intro: "Warm light, brass service and a room built for long meals with people you love."
		}),
		chapters.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: index % 2 === 1 ? "surface-sandstone" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grid items-center gap-10 md:grid-cols-2 md:gap-14 ${index % 2 === 1 ? "md:[&>figure]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "m-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchImage, {
						src: chapter.src,
						alt: chapter.alt,
						width: chapter.width,
						height: chapter.height,
						className: "aspect-4/3 w-full"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: chapter.eyebrow,
					title: chapter.title,
					intro: chapter.body
				}) })]
			})
		}, chapter.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-royal text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Reserve Your Evening"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80",
					children: "Tell us when you would like to visit and how many are joining you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/reservations",
						variant: "gold",
						children: "Reserve a Table"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/gallery",
						variant: "ghostLight",
						children: "View the Gallery"
					})]
				})
			]
		})
	] });
}
//#endregion
export { DiningExperience as component };
