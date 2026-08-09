import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as PageHero, f as Section, g as eventTypes, h as eventServices, l as ArchImage, p as SectionHeading, s as ActionButton, x as restaurant } from "./router-DUV4NYHj.mjs";
import { n as FeatureCard } from "./DishCard-5isaNWwB.mjs";
import { t as rajasthani_catering_event_setup_default } from "./rajasthani-catering-event-setup-C7JNT9xg.mjs";
import { a as TextArea, c as limitText, d as requirePhone, f as supabase, i as Select, l as optionalEmail, n as FormStatus, o as TextInput, s as clean, t as Field, u as requireName } from "./validation-G-n6OImg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catering-events-DMSQbZrz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	name: "",
	phone: "",
	email: "",
	eventType: "",
	eventDate: "",
	guests: "",
	message: ""
};
function EventForm() {
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
		if (!values.eventType) next["eventType"] = "Please choose the type of event.";
		if (values.guests) {
			const g = Number(values.guests);
			if (!Number.isInteger(g) || g < 1 || g > 5e3) next["guests"] = "Please enter a valid number of guests.";
		}
		limitText(values.message, 1500, "your message", next, "message");
		setErrors(next);
		if (Object.keys(next).length) {
			setStatus("error");
			setMessage("Please correct the highlighted fields and submit again.");
			return;
		}
		setStatus("loading");
		const { error } = await supabase.from("event_enquiries").insert({
			name: values.name.trim(),
			phone: values.phone.trim(),
			email: clean(values.email),
			event_type: values.eventType,
			event_date: values.eventDate || null,
			guests: values.guests ? Number(values.guests) : null,
			message: clean(values.message)
		});
		if (error) {
			setStatus("error");
			setMessage("We could not send your enquiry just now. Please try again or call us directly.");
			return;
		}
		setStatus("success");
		setMessage("Thank you — your event enquiry has reached us. Our team will be in touch soon.");
		setValues(initial);
	};
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
						label: "Name",
						htmlFor: "e-name",
						required: true,
						error: errors["name"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "e-name",
							autoComplete: "name",
							value: values.name,
							onChange: set("name"),
							"aria-invalid": Boolean(errors["name"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						htmlFor: "e-phone",
						required: true,
						error: errors["phone"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "e-phone",
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
						htmlFor: "e-email",
						error: errors["email"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "e-email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: set("email"),
							"aria-invalid": Boolean(errors["email"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Event Type",
						htmlFor: "e-type",
						required: true,
						error: errors["eventType"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							id: "e-type",
							value: values.eventType,
							onChange: set("eventType"),
							"aria-invalid": Boolean(errors["eventType"]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select an event type"
							}), eventTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t,
								children: t
							}, t))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Event Date",
						htmlFor: "e-date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "e-date",
							type: "date",
							value: values.eventDate,
							onChange: set("eventDate")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Estimated Guests",
						htmlFor: "e-guests",
						error: errors["guests"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "e-guests",
							type: "number",
							min: 1,
							inputMode: "numeric",
							value: values.guests,
							onChange: set("guests"),
							"aria-invalid": Boolean(errors["guests"])
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				htmlFor: "e-message",
				error: errors["message"],
				hint: "Menu preferences, Jain requirements, venue and timing details.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "e-message",
					maxLength: 1500,
					value: values.message,
					onChange: set("message"),
					"aria-invalid": Boolean(errors["message"])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:self-start",
				children: status === "loading" ? "Sending enquiry…" : "Send Event Enquiry"
			})
		]
	});
}
function CateringEvents() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "Catering & Events",
			eyebrow: "Celebrations",
			title: "Traditional Catering for Your Occasion",
			intro: "From an intimate family lunch to a wedding feast — pure vegetarian menus, brass service and Rajasthani warmth."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 md:grid-cols-2 md:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchImage, {
				src: rajasthani_catering_event_setup_default,
				alt: "Rajasthani wedding catering buffet with brass serving vessels and marigold decorations in a haveli courtyard",
				width: 1408,
				height: 1008,
				className: "aspect-4/3 w-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "How We Cater",
				title: "Cooked Fresh, Served Warm",
				intro: "We cook on site wherever possible, keep Jain preparations in separate vessels, and serve in brass. Menus are built around your guest count, timings and the season."
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-sandstone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Services",
				title: "Occasions We Cater For"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: eventServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
					title: s.title,
					body: s.body
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "enquiry",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Event Enquiry",
					title: "Tell Us About Your Event",
					intro: "Share a few details and our team will respond with menu options and availability."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventForm, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 max-w-3xl text-sm text-muted-foreground",
					children: [
						"Prefer to talk it through? Call us on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${restaurant.phoneHref}`,
							className: "link-underline font-semibold text-terracotta",
							children: restaurant.phone
						}),
						"."
					]
				})
			]
		})
	] });
}
//#endregion
export { CateringEvents as component };
