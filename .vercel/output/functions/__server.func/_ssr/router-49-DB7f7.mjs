import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rajasthani-folk-culture-performance-Tt6D6hoJ.js
var rajasthani_vegetarian_thali_brass_plate_default = "/assets/rajasthani-vegetarian-thali-brass-plate-DG2QHqgl.jpg";
var rajasthani_folk_culture_performance_default = "/assets/rajasthani-folk-culture-performance-CNNKgBkP.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-49-DB7f7.js
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
var styles_default = "/assets/styles-fvPXhxve.css";
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
	phone: "+91 98290 00000",
	phoneHref: "+919829000000",
	email: "hello@maatimahal.example",
	whatsapp: "+919829000000",
	addressLine: "Main Road",
	landmark: "Near Main Market",
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
		days: "Monday – Thursday",
		time: "11:00 AM – 10:30 PM"
	}, {
		days: "Friday – Sunday",
		time: "10:30 AM – 11:00 PM"
	}],
	/** Schema.org openingHoursSpecification source of truth */
	hoursSpec: [{
		days: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday"
		],
		opens: "11:00",
		closes: "22:30"
	}, {
		days: [
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "10:30",
		closes: "23:00"
	}]
};
var fullAddress = `${restaurant.addressLine}, ${restaurant.city}, ${restaurant.state} ${restaurant.pin}`;
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
		year: "1998",
		body: "The family kitchen begins serving neighbours from a small courtyard."
	},
	{
		year: "2007",
		body: "Our first dining room opens with twelve tables and one wood-fired chulha."
	},
	{
		year: "2015",
		body: "The traditional village thali becomes our signature."
	},
	{
		year: "2021",
		body: "A dedicated Jain kitchen with separate vessels is added."
	},
	{
		year: "2024",
		body: "Catering for weddings, family gatherings and corporate events begins."
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
							className: "size-10 shrink-0 rounded-full border border-gold/60 object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-3xl leading-tight sm:text-4xl",
								style: {
									fontFamily: "\"Yatra One\", serif",
									color: "#e4003f",
									WebkitTextStroke: "2px white",
									paintOrder: "stroke fill",
									textShadow: "2px 2px 4px rgba(0,0,0,0.4), 0px 4px 10px rgba(0,0,0,0.2)"
								},
								children: "माटी महल"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase sm:block",
								children: "Family  Restaurant"
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
			className: "mx-auto w-full max-w-6xl",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 grid grid-cols-2 gap-y-2 text-sm text-primary-foreground/80",
							children: [
								navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									className: "link-underline",
									children: l.label
								}) }, l.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/reservations",
									className: "link-underline",
									children: "Reservations"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy-policy",
									className: "link-underline",
									children: "Privacy Policy"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
							children: "Visit Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/80 not-italic",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fullAddress }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: restaurant.landmark }),
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
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					restaurant.name,
					", ",
					restaurant.city,
					". Pure vegetarian kitchen. All rights reserved."
				]
			})]
		})
	});
}
var dal_baati_churma_ghee_default = "/assets/dal-baati-churma-ghee-C41g9KJo.jpg";
var gatte_ki_sabzi_copper_bowl_default = "/assets/gatte-ki-sabzi-copper-bowl-nr7doB95.jpg";
var ker_sangri_bajra_roti_default = "/assets/ker-sangri-bajra-roti-BOwlWyqM.jpg";
var rajasthani_sweets_ghevar_malpua_default = "/assets/rajasthani-sweets-ghevar-malpua-Cwvg57PK.jpg";
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
	"royal-thali",
	"dal-baati-churma",
	"gatte-ki-sabzi",
	"ker-sangri",
	"paneer-tikka",
	"ghevar"
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
var Route$11 = createRootRouteWithContext()({
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
	const { queryClient } = Route$11.useRouteContext();
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-BFtq9d3o.mjs");
var Route$10 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
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
var $$splitComponentImporter$8 = () => import("./about-D1KfHIkJ.mjs");
var Route$9 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
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
var $$splitComponentImporter$7 = () => import("./catering-events-Uw1VfMwP.mjs");
var Route$8 = createFileRoute("/catering-events")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
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
var $$splitComponentImporter$6 = () => import("./contact-BREZC_Lx.mjs");
var Route$7 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
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
var $$splitComponentImporter$5 = () => import("./dining-experience-gZ6xF0Ij.mjs");
var Route$6 = createFileRoute("/dining-experience")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
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
var $$splitComponentImporter$4 = () => import("./feedback-CJIgaGjx.mjs");
var Route$5 = createFileRoute("/feedback")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
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
var $$splitComponentImporter$3 = () => import("./gallery-Z9UoY9au.mjs");
var Route$4 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
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
var $$splitComponentImporter$2 = () => import("./menu-BtLcAuQj.mjs");
var Route$3 = createFileRoute("/menu")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
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
var $$splitComponentImporter$1 = () => import("./privacy-policy-BhpJsk9u.mjs");
var Route$2 = createFileRoute("/privacy-policy")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
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
var $$splitComponentImporter = () => import("./reservations-BfN6DBh2.mjs");
var Route$1 = createFileRoute("/reservations")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
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
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
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
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	CateringEventsRoute: Route$8.update({
		id: "/catering-events",
		path: "/catering-events",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	DiningExperienceRoute: Route$6.update({
		id: "/dining-experience",
		path: "/dining-experience",
		getParentRoute: () => Route$11
	}),
	FeedbackRoute: Route$5.update({
		id: "/feedback",
		path: "/feedback",
		getParentRoute: () => Route$11
	}),
	GalleryRoute: Route$4.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$11
	}),
	MenuRoute: Route$3.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$11
	}),
	PrivacyPolicyRoute: Route$2.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$11
	}),
	ReservationsRoute: Route$1.update({
		id: "/reservations",
		path: "/reservations",
		getParentRoute: () => Route$11
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { trustHighlights as C, rajasthani_vegetarian_thali_brass_plate_default as E, timeSlots as S, rajasthani_folk_culture_performance_default as T, feedbackTypes as _, signatureDishes as a, occasions as b, ActionLink as c, PageHero as d, Section as f, eventTypes as g, eventServices as h, menuCategories as i, ArchImage as l, Tag as m, galleryImages as n, rajasthani_sweets_ghevar_malpua_default as o, SectionHeading as p, menu as r, ActionButton as s, router_exports as t, DecorativeDivider as u, fullAddress as v, values as w, restaurant as x, milestones as y };
