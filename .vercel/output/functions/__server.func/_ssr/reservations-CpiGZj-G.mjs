import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as restaurant, D as fullAddress, c as Section, j as timeSlots, k as occasions, l as SectionHeading, r as ActionButton, s as PageHero } from "./router-BlamydFo.mjs";
import { a as TextArea, c as optionalEmail, i as Select, l as requireName, n as FormStatus, o as TextInput, s as limitText, t as Field, u as requirePhone } from "./validation-C97rv48X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-CpiGZj-G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	name: "",
	phone: "",
	email: "",
	date: "",
	time: "",
	guests: "2",
	occasion: "",
	request: ""
};
function ReservationForm() {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const set = (key) => (e) => setValues((v) => ({
		...v,
		[key]: e.target.value
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		const next = {};
		requireName(values.name, next);
		requirePhone(values.phone, next);
		optionalEmail(values.email, next);
		if (!values.date) next["date"] = "Please choose the date of your visit.";
		if (!values.time) next["time"] = "Please choose a preferred time.";
		const guests = Number(values.guests);
		if (!Number.isInteger(guests) || guests < 1 || guests > 200) next["guests"] = "Please enter the number of guests (1–200).";
		limitText(values.request, 600, "the special request", next, "request");
		setErrors(next);
		if (Object.keys(next).length) {
			setStatus("error");
			setMessage("Please correct the highlighted fields and submit again.");
			return;
		}
		const messageText = `*New Table Reservation Request*

*Name:* ${values.name.trim()}
*Phone:* ${values.phone.trim()}
${values.email ? `*Email:* ${values.email.trim()}\n` : ""}*Guests:* ${guests}
*Date:* ${values.date}
*Time:* ${values.time}
${values.occasion ? `*Occasion:* ${values.occasion.trim()}\n` : ""}${values.request ? `*Special Request:* ${values.request.trim()}\n` : ""}`;
		const whatsappUrl = `https://wa.me/918960107779?text=${encodeURIComponent(messageText)}`;
		window.open(whatsappUrl, "_blank");
		setStatus("success");
		setMessage("Thank you — your table request has reached us. Our team will call you shortly to confirm.");
		setValues(initial);
	};
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "flex flex-col gap-5",
		children: [
			status === "success" || status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormStatus, {
				state: status === "success" ? "success" : "error",
				message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						htmlFor: "r-name",
						required: true,
						error: errors["name"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "r-name",
							name: "name",
							autoComplete: "name",
							value: values.name,
							onChange: set("name"),
							"aria-invalid": Boolean(errors["name"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone Number",
						htmlFor: "r-phone",
						required: true,
						error: errors["phone"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "r-phone",
							name: "phone",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							value: values.phone,
							onChange: set("phone"),
							"aria-invalid": Boolean(errors["phone"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "r-email",
						error: errors["email"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "r-email",
							name: "email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: set("email"),
							"aria-invalid": Boolean(errors["email"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Number of Guests",
						htmlFor: "r-guests",
						required: true,
						error: errors["guests"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "r-guests",
							name: "guests",
							type: "number",
							min: 1,
							max: 200,
							inputMode: "numeric",
							value: values.guests,
							onChange: set("guests"),
							"aria-invalid": Boolean(errors["guests"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date",
						htmlFor: "r-date",
						required: true,
						error: errors["date"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "r-date",
							name: "date",
							type: "date",
							min: today,
							value: values.date,
							onChange: set("date"),
							"aria-invalid": Boolean(errors["date"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred Time",
						htmlFor: "r-time",
						required: true,
						error: errors["time"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							id: "r-time",
							name: "time",
							value: values.time,
							onChange: set("time"),
							"aria-invalid": Boolean(errors["time"]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a time"
							}), timeSlots.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t,
								children: t
							}, t))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Occasion",
						htmlFor: "r-occasion",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							id: "r-occasion",
							name: "occasion",
							value: values.occasion,
							onChange: set("occasion"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Not specified"
							}), occasions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: o,
								children: o
							}, o))]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Special Request",
				htmlFor: "r-request",
				error: errors["request"],
				hint: "High chair, seating preference, wheelchair access.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "r-request",
					name: "request",
					maxLength: 600,
					value: values.request,
					onChange: set("request"),
					"aria-invalid": Boolean(errors["request"])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hairline-gold rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground",
				children: "Reservation is confirmed only after confirmation from the restaurant team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:self-start",
				children: status === "loading" ? "Sending request…" : "Request Table"
			})
		]
	});
}
function Reservations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		breadcrumb: "Reservations",
		eyebrow: "Reservations",
		title: "Your Table Awaits",
		intro: "Tell us when you are coming and how many are joining you — we will keep a table ready."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Reservation Enquiry",
			title: "Request a Table",
			intro: "Fields marked with an asterisk are required. We will call to confirm before your visit."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationForm, {})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hairline-gold h-fit rounded-lg bg-secondary p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-primary",
					children: "Good to Know"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Large groups of 12 or more are best booked a day in advance." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We can accommodate most special requests — mention them in your booking notes." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tables are held for 20 minutes past the reserved time." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We are a fully vegetarian kitchen; outside food and alcohol are not served." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-6 border-gold/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold tracking-[0.2em] text-terracotta uppercase",
					children: "Visit Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground not-italic",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fullAddress }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: restaurant.landmark }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${restaurant.phoneHref}`,
							className: "link-underline font-semibold text-terracotta",
							children: restaurant.phone
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-1 text-sm text-muted-foreground",
					children: restaurant.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-primary",
							children: [h.days, ":"]
						}),
						" ",
						h.time
					] }, h.days))
				})
			]
		})]
	}) })] });
}
//#endregion
export { Reservations as component };
