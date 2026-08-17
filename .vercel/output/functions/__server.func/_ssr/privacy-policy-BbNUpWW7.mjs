import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as restaurant, D as fullAddress, c as Section, s as PageHero } from "./router-ptbditD5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-BbNUpWW7.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "What we collect",
		body: "Only what you type into our forms: your name, phone number, optional email, visit or event details, ratings and any message you write. We do not run advertising or marketing trackers on this website."
	},
	{
		title: "Why we collect it",
		body: "To confirm your table, respond to a catering enquiry, reply to a message, or act on your feedback. Nothing more."
	},
	{
		title: "How it is stored",
		body: "Submissions are stored in our secure managed database. The website itself cannot read past submissions — only the restaurant team can, through a private administrative view."
	},
	{
		title: "Feedback and reviews",
		body: "Feedback is treated as private correspondence. We never publish your feedback, name or ratings on this website without your explicit permission."
	},
	{
		title: "Sharing",
		body: "We do not sell, rent or trade your details. We share them only where legally required."
	},
	{
		title: "Retention",
		body: "Reservation and enquiry records are kept only as long as needed for service and accounting, then removed."
	},
	{
		title: "Your choices",
		body: "You may ask us to correct or delete the details you have submitted. Write to us and we will act on it."
	}
];
function PrivacyPolicy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		breadcrumb: "Privacy Policy",
		eyebrow: "Privacy",
		title: "Your Details, Handled with Care",
		intro: "A short, plain-language explanation of what we collect through this website and why."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-8",
		children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl text-primary",
			children: s.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: s.body
		})] }, s.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl text-primary",
			children: "Contact us about privacy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
			className: "mt-2 space-y-1 text-sm text-muted-foreground not-italic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: restaurant.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fullAddress }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${restaurant.email}`,
						className: "link-underline text-terracotta",
						children: restaurant.email
					}),
					" ",
					"·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${restaurant.phoneHref}`,
						className: "link-underline text-terracotta",
						children: restaurant.phone
					})
				] })
			]
		})] })]
	}) })] });
}
//#endregion
export { PrivacyPolicy as component };
