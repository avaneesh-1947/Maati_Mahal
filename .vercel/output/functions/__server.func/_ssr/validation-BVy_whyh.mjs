import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validation-BVy_whyh.js
var import_jsx_runtime = require_jsx_runtime();
var controlBase = "min-h-11 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring aria-[invalid=true]:border-destructive";
function Field({ label, htmlFor, required, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor,
				className: "text-sm font-semibold text-primary",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: " *"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-xs font-normal text-muted-foreground",
					children: "(optional)"
				})]
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: hint
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${htmlFor}-error`,
				role: "alert",
				className: "text-sm font-medium text-destructive",
				children: error
			}) : null
		]
	});
}
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: `${controlBase} ${props.className ?? ""}`
	});
}
function TextArea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		rows: props.rows ?? 4,
		className: `${controlBase} ${props.className ?? ""}`
	});
}
function Select(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		className: `${controlBase} ${props.className ?? ""}`
	});
}
function FormStatus({ state, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "status",
		className: `rounded-md border px-4 py-3 text-sm font-medium ${state === "success" ? "border-forest/40 bg-forest/8 text-forest" : "border-destructive/40 bg-destructive/8 text-destructive"}`,
		children: message
	});
}
var ratingLabels = [
	"Poor",
	"Fair",
	"Good",
	"Very Good",
	"Excellent"
];
function RatingInput({ name, label, value, onChange, required, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
				className: "text-sm font-semibold text-primary",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: " *"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ratingLabels.map((labelText, index) => {
					const score = index + 1;
					const active = value === score;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card text-foreground hover:border-ring"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name,
								value: score,
								checked: active,
								onChange: () => onChange(score),
								className: "sr-only"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: score
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: labelText })
						]
					}, score);
				})
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-sm font-medium text-destructive",
				children: error
			}) : null
		]
	});
}
var isPhone = (value) => /^[+]?[\d\s-]{6,20}$/.test(value.trim());
var isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
function requireName(value, errors, key = "name") {
	const v = value.trim();
	if (v.length < 2) errors[key] = "Please enter your full name (at least 2 characters).";
	else if (v.length > 100) errors[key] = "Please keep the name under 100 characters.";
}
function requirePhone(value, errors, key = "phone") {
	if (!value.trim()) errors[key] = "Please enter a phone number so we can confirm with you.";
	else if (!isPhone(value)) errors[key] = "Please enter a valid phone number.";
}
function optionalEmail(value, errors, key = "email") {
	if (value.trim() && !isEmail(value)) errors[key] = "Please enter a valid email address.";
}
function limitText(value, max, label, errors, key) {
	if (value.length > max) errors[key] = `Please keep ${label} under ${max} characters.`;
}
/** Trim and collapse whitespace; returns null for empty optional values. */
var clean = (value) => {
	const v = value.trim().replace(/\s+/g, " ");
	return v.length ? v : null;
};
//#endregion
export { TextArea as a, limitText as c, requirePhone as d, Select as i, optionalEmail as l, FormStatus as n, TextInput as o, RatingInput as r, clean as s, Field as t, requireName as u };
