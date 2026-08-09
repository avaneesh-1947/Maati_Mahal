import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validation-G-n6OImg.js
var import_jsx_runtime = require_jsx_runtime();
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "ahgwdkgrwzyhtuefbiev",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_l5I1782y_dJMjN5IdyNgyA_dgJZAQZA",
		"VITE_SUPABASE_URL": "https://ahgwdkgrwzyhtuefbiev.supabase.co"
	}["VITE_SUPABASE_URL"] || typeof process !== "undefined" && process.env?.["SUPABASE_URL"];
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "ahgwdkgrwzyhtuefbiev",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_l5I1782y_dJMjN5IdyNgyA_dgJZAQZA",
		"VITE_SUPABASE_URL": "https://ahgwdkgrwzyhtuefbiev.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || typeof process !== "undefined" && process.env?.["SUPABASE_PUBLISHABLE_KEY"];
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const missing = [...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []];
		console.warn(`[Supabase] Missing environment variable(s): ${missing.join(", ")}. Supabase features are disabled.`);
		return null;
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: typeof window !== "undefined" ? localStorage : void 0,
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
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
export { TextArea as a, limitText as c, requirePhone as d, supabase as f, Select as i, optionalEmail as l, FormStatus as n, TextInput as o, RatingInput as r, clean as s, Field as t, requireName as u };
