import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as Tag } from "./router-DUV4NYHj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DishCard-5isaNWwB.js
var import_jsx_runtime = require_jsx_runtime();
function DishCard({ dish }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]",
		children: [dish.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-4/3 overflow-hidden bg-secondary",
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
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "green",
							children: "Pure Veg"
						}),
						dish.jain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "gold",
							children: "Jain Available"
						}) : null,
						dish.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							tone: "terracotta",
							children: "Bestseller"
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-xl text-primary",
					children: dish.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: dish.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-display text-lg font-semibold text-terracotta",
					children: ["₹", dish.price]
				})
			]
		})]
	});
}
function MenuRow({ dish }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex flex-col gap-1 border-b border-border/70 py-5 sm:flex-row sm:items-start sm:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-primary",
						children: dish.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest text-xs font-semibold",
						"aria-label": "Pure vegetarian",
						children: "● Pure Veg"
					}),
					dish.jain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						tone: "gold",
						children: "Jain"
					}) : null,
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "shrink-0 font-display text-lg font-semibold text-terracotta sm:pt-0.5",
			children: ["₹", dish.price]
		})]
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
