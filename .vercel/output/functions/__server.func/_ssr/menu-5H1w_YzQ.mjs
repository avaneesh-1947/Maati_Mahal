import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as ActionLink, d as PageHero, f as Section, i as menuCategories, r as menu, x as restaurant } from "./router-2U5FG5nL.mjs";
import { r as MenuRow } from "./DishCard-C1WO00Ie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-5H1w_YzQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const [jainOnly, setJainOnly] = (0, import_react.useState)(false);
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return menu.filter((dish) => {
			if (category !== "All" && dish.category !== category) return false;
			if (jainOnly && !dish.jain) return false;
			if (!q) return true;
			return dish.name.toLowerCase().includes(q) || dish.description.toLowerCase().includes(q) || dish.category.toLowerCase().includes(q);
		});
	}, [
		query,
		category,
		jainOnly
	]);
	const grouped = (0, import_react.useMemo)(() => menuCategories.map((c) => ({
		category: c,
		dishes: results.filter((d) => d.category === c)
	})).filter((group) => group.dishes.length > 0), [results]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "Menu",
			eyebrow: "Pure Vegetarian Menu",
			title: "Every Dish, Cooked to Order",
			intro: "Rajasthani specials, generous thalis and Jain preparations made in separate vessels. Prices are in Indian Rupees and include no service charge."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "menu-search",
							className: "text-sm font-semibold text-primary",
							children: "Search the menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "menu-search",
							type: "search",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Try “baati”, “thali” or “kachori”",
							className: "min-h-11 w-full rounded-md border border-input bg-card px-3.5 text-base"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-3 text-sm font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: jainOnly,
							onChange: (e) => setJainOnly(e.target.checked),
							className: "size-5 accent-[var(--primary)]"
						}), "Jain options only"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "sr-only",
					children: "Menu categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1 pb-1",
					children: ["All", ...menuCategories].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": category === c,
						onClick: () => setCategory(c),
						className: `min-h-11 rounded-md px-4 text-sm font-semibold whitespace-nowrap transition-colors ${category === c ? "bg-primary text-primary-foreground" : "hairline-gold bg-card text-primary hover:bg-secondary"}`,
						children: c
					}) }, c))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				role: "status",
				children: [
					"Showing ",
					results.length,
					" of ",
					menu.length,
					" dishes."
				]
			}),
			grouped.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hairline-gold mt-10 rounded-lg bg-secondary p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-primary",
						children: "No dishes matched that search"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Try a different word, or clear the filters to see the full menu."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setQuery("");
							setCategory("All");
							setJainOnly(false);
						},
						className: "mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground",
						children: "Clear filters"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-14",
				children: grouped.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": `cat-${group.category.replace(/\s+/g, "-")}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: `cat-${group.category.replace(/\s+/g, "-")}`,
						className: "border-b-2 border-gold/50 pb-2 font-display text-2xl text-primary sm:text-3xl",
						children: group.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: group.dishes.map((dish) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRow, { dish }, dish.id)) })]
				}, group.category))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-royal text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Tasted Something You Like?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80",
					children: "Reserve a table, or call us for Jain and festival requirements."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/reservations",
						variant: "gold",
						children: "Reserve a Table"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						href: `tel:${restaurant.phoneHref}`,
						variant: "ghostLight",
						children: ["Call ", restaurant.phone]
					})]
				})
			]
		})
	] });
}
//#endregion
export { MenuPage as component };
