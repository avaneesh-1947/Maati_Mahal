import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Tag } from "./router-an0JSNKy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DishCard-CDRSkufx.js
var import_jsx_runtime = require_jsx_runtime();
function DishCard({ dish }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/menu/$dishId",
		params: { dishId: dish.id },
		className: "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1",
		children: [dish.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[2/1] sm:aspect-4/3 overflow-hidden bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dish.image,
				alt: dish.imageAlt ?? dish.name,
				width: 1008,
				height: 756,
				loading: "lazy",
				decoding: "async",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
			})
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-2 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1 sm:gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: "green",
						className: "text-[9px] sm:text-xs px-1 py-0.5 sm:px-2.5 sm:py-1",
						children: "Pure Veg"
					}), dish.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: "terracotta",
						className: "text-[9px] sm:text-xs px-1 py-0.5 sm:px-2.5 sm:py-1",
						children: "Bestseller"
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 sm:mt-3 font-display text-sm sm:text-xl text-primary transition-colors group-hover:text-terracotta line-clamp-1 sm:line-clamp-none",
					children: dish.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 sm:mt-2 flex-1 text-[10px] sm:text-sm leading-snug sm:leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none",
					children: dish.description
				})
			]
		})]
	});
}
function MenuRow({ dish }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex flex-col gap-1 border-b border-border/70 py-5 sm:flex-row sm:items-start sm:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/menu/$dishId",
			params: { dishId: dish.id },
			className: "group block min-w-0 flex-1 hover:bg-muted/50 p-3 -mx-3 rounded-lg transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-primary transition-colors group-hover:text-terracotta",
						children: dish.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest text-xs font-semibold",
						"aria-label": "Pure vegetarian",
						children: "● Pure Veg"
					}),
					dish.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: "terracotta",
						children: "Bestseller"
					}) : null,
					dish.spice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: ["Spice: ", dish.spice]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
				children: dish.description
			})]
		}), "    "]
	});
}
function FeatureCard({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "hairline-gold rounded-lg bg-card p-6 transition-transform duration-300 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl text-primary",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: body
		})]
	});
}
//#endregion
export { FeatureCard as n, MenuRow as r, DishCard as t };
