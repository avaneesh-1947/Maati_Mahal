import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as restaurant, N as values, O as milestones, S as hero1_default, a as ArchImage, b as interior1_default, c as Section, i as ActionLink, l as SectionHeading, s as PageHero, x as hero2_default } from "./router-an0JSNKy.mjs";
import { n as FeatureCard } from "./DishCard-CDRSkufx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-M5B_lNRX.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "About",
			eyebrow: "Our Story",
			title: "Rooted in the Village, Cooked with Care",
			intro: "A family kitchen that grew into a highway dining destination, without letting go of the timeless village recipes it started with."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 md:grid-cols-2 md:gap-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						eyebrow: "Heritage",
						title: "A Register of Village Recipes",
						intro: restaurant.story
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchImage, {
					src: hero1_default,
					alt: `${restaurant.name} exterior in ${restaurant.city}`,
					width: 1200,
					height: 1408,
					className: "aspect-4/5 w-full md:aspect-[4/5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							align: "left",
							eyebrow: "Heritage",
							title: "A Register of Village Recipes",
							intro: restaurant.story
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted-foreground md:mt-0",
						children: "Village kitchens were shaped by patience, pure ingredients, and a deep respect for the land. Whole grains, freshly ground spices, slow-simmered lentils in earthen matkas, and baatis roasted over authentic fire. Maati Mahal (often searched as Mati Mahal or Maati Mehal) was born from the desire to bring this soulful, unhurried dining experience to families and highway travellers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "We cook that same timeless way today: masalas ground in-house, dals tempered with pure desi ghee, breads hand-crafted to order, and thalis served with boundless warmth."
					})
				] })
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-sandstone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What We Stand For",
				title: "Our Values"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
					title: v.title,
					body: v.body
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchImage, {
				src: hero2_default,
				alt: "Maati Mahal authentic village themed interior and family dining atmosphere",
				width: 1408,
				height: 1008,
				className: "aspect-4/5 w-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Founder & Kitchen",
					title: "Cooked by People Who Grew Up With It",
					intro: "Our culinary craft was passed down across generations, perfected over wood-fired chulhas in traditional village households."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted-foreground",
					children: "Every dal is tasted before service, every baati is cooked to smoky perfection, and our signature Tilkahru Thali is prepared to honor every diner. Around us is a dedicated team trained the traditional way — with respect for purity, freshness, and authentic flavours."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Our hospitality follows one sacred rule: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Atithi Devo Bhavah" }),
						". Fresh water and masala chai welcome you, nobody is rushed, and no one leaves unsatisfied."
					]
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-sandstone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "OUR JOURNEY",
					title: "Growing Across Cities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mx-auto mt-12 max-w-2xl space-y-8 sm:space-y-6",
					children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col sm:flex-row sm:gap-5 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-semibold text-terracotta shrink-0 sm:w-20",
							children: m.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-l border-gold/50 pl-4 sm:pl-5 text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
							children: m.body
						})]
					}, m.year))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-20 max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-terracotta mb-4",
							children: "ATITHI DEVO BHAVA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-px w-12 bg-gold/50 mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: "\"Every guest is welcomed with warmth and treated like family.\""
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-royal text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Come Sit With Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80",
					children: "The dining room is at its warmest when it is full of families."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/reservations",
						variant: "gold",
						children: "Reserve a Table"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/dining-experience",
						variant: "ghostLight",
						children: "See the Experience"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchImage, {
				src: interior1_default,
				alt: "Dining room with carved sandstone arches, maroon seating and brass lanterns",
				width: 1600,
				height: 1104,
				className: "aspect-16/9 w-full"
			})
		})
	] });
}
//#endregion
export { About as component };
