import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as hero2_default, a as ArchImage, b as tilkahru_thali_default, c as Section, i as ActionLink, l as SectionHeading, s as PageHero, x as interior1_default, y as matke_wali_lassi_default } from "./router-ptbditD5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dining-experience-sV1G4mmz.js
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		eyebrow: "The Room",
		title: "Earthy Village Ambience & Warmth",
		body: "Traditional village-inspired decor and thoughtful lighting set the room. Comfortable family seating softens the experience, creating an authentic and welcoming rural haven where nothing shouts and everything belongs.",
		src: interior1_default,
		alt: "Maati Mahal interior dining hall with traditional lighting and seating",
		width: 1600,
		height: 1104
	},
	{
		eyebrow: "The Service",
		title: "Thalis Served the Traditional Way",
		body: "Your thali is laid out in the authentic order — curries, dal, hot breads, and cooling accompaniments. Refills arrive warmly and generously, honoring the sacred spirit of Atithi Devo Bhavah.",
		src: tilkahru_thali_default,
		alt: "Grand Tilkahru vegetarian thali feast served at Maati Mahal",
		width: 1600,
		height: 1104
	},
	{
		eyebrow: "The Space",
		title: "Built for Family Celebrations",
		body: "Spacious seating designed for large family gatherings, grandparent-grandchild lunches, highway travelers, and festive celebrations with ample parking and open lawn space.",
		src: hero2_default,
		alt: "Maati Mahal spacious dining and celebration lawn area",
		width: 1408,
		height: 1008
	},
	{
		eyebrow: "The Culture",
		title: "Earthen Flavours & Kulhad Tradition",
		body: "Every sip of thick churned lassi and hot brewed tea is served in natural clay kulhads, keeping the genuine village tradition alive with every sip.",
		src: matke_wali_lassi_default,
		alt: "Traditional Matke Wali Lassi served fresh in kulhad",
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
