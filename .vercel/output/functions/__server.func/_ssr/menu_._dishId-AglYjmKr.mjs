import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Section, n as Route, o as DecorativeDivider } from "./router-CvDEDZRW.mjs";
import { t as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu_._dishId-AglYjmKr.js
var import_jsx_runtime = require_jsx_runtime();
function DishPage() {
	const { dish } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-background pt-16 sm:pt-24 pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center text-sm font-semibold tracking-wide text-terracotta hover:text-primary transition-colors mb-4 sm:mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to Home"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "py-2 sm:py-8 md:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid gap-6 sm:gap-12 lg:gap-20 items-center ${dish.image ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 sm:space-y-8 order-2 md:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-gold",
									children: dish.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl",
									children: dish.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [
										dish.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold tracking-wider text-terracotta uppercase",
											children: "Bestseller"
										}),
										dish.jain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase",
											children: "Jain Available"
										}),
										dish.spice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full bg-orange-600/10 px-3 py-1 text-xs font-semibold tracking-wider text-orange-700 uppercase",
											children: dish.spice
										})
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeDivider, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose prose-stone prose-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xl leading-relaxed text-primary-foreground/90 font-light italic",
									children: [
										"\"",
										dish.description,
										"\""
									]
								}), dish.story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-loose text-muted-foreground whitespace-pre-line",
									children: dish.story
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-base leading-loose text-muted-foreground",
									children: [
										"Experience the authentic taste of Rajasthan with our meticulously prepared ",
										dish.name,
										". Every ingredient is sourced with care and crafted following traditional recipes that have been passed down through generations. Whether you are dining in or taking it away, this dish promises a warm, comforting embrace of village-style culinary heritage."
									]
								})]
							})
						]
					}), dish.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full overflow-hidden rounded-2xl shadow-xl order-1 md:order-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[4/3] md:aspect-square w-full relative group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dish.image,
								alt: dish.imageAlt || dish.name,
								className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" })]
						})
					})]
				})
			})]
		})
	});
}
//#endregion
export { DishPage as component };
