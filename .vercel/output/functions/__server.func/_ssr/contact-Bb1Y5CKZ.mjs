import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as restaurant, D as fullAddress, c as Section, i as ActionLink, l as SectionHeading, r as ActionButton, s as PageHero } from "./router-CfKJcX5S.mjs";
import { a as TextArea, c as optionalEmail, l as requireName, n as FormStatus, o as TextInput, s as limitText, t as Field, u as requirePhone } from "./validation-C97rv48X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bb1Y5CKZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	name: "",
	phone: "",
	email: "",
	subject: "",
	message: ""
};
function ContactForm() {
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
		if (values.message.trim().length < 5) next["message"] = "Please tell us a little more (at least 5 characters).";
		limitText(values.message, 2e3, "your message", next, "message");
		limitText(values.subject, 150, "the subject", next, "subject");
		setErrors(next);
		if (Object.keys(next).length) {
			setStatus("error");
			setMessage("Please correct the highlighted fields and submit again.");
			return;
		}
		const messageText = `*New Contact Message*

*Name:* ${values.name.trim()}
*Phone:* ${values.phone.trim()}
${values.email ? `*Email:* ${values.email.trim()}\n` : ""}${values.subject ? `*Subject:* ${values.subject.trim()}\n` : ""}*Message:* ${values.message.trim()}`;
		const whatsappUrl = `https://wa.me/918960107779?text=${encodeURIComponent(messageText)}`;
		window.open(whatsappUrl, "_blank");
		setStatus("success");
		setMessage("Thank you for writing to us — we will reply as soon as we can.");
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
						htmlFor: "c-name",
						required: true,
						error: errors["name"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "c-name",
							autoComplete: "name",
							value: values.name,
							onChange: set("name"),
							"aria-invalid": Boolean(errors["name"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						htmlFor: "c-phone",
						required: true,
						error: errors["phone"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "c-phone",
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
						htmlFor: "c-email",
						error: errors["email"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "c-email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: set("email"),
							"aria-invalid": Boolean(errors["email"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Subject",
						htmlFor: "c-subject",
						error: errors["subject"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "c-subject",
							maxLength: 150,
							value: values.subject,
							onChange: set("subject"),
							"aria-invalid": Boolean(errors["subject"])
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				htmlFor: "c-message",
				required: true,
				error: errors["message"],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "c-message",
					rows: 5,
					maxLength: 2e3,
					value: values.message,
					onChange: set("message"),
					"aria-invalid": Boolean(errors["message"])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:self-start",
				children: status === "loading" ? "Sending message…" : "Send Message"
			})
		]
	});
}
function Contact() {
	const whatsappHref = `https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			breadcrumb: "Contact",
			eyebrow: "Contact",
			title: `Find Us in ${restaurant.city}`,
			intro: `${restaurant.landmark}. Call ahead for large groups, Jain menus or festival timings.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Details",
					title: restaurant.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-muted-foreground",
							children: fullAddress
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "Landmark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-muted-foreground",
							children: restaurant.landmark
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${restaurant.phoneHref}`,
								className: "link-underline text-terracotta",
								children: restaurant.phone
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappHref,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "link-underline text-terracotta",
								children: restaurant.whatsapp
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${restaurant.email}`,
								className: "link-underline text-terracotta",
								children: restaurant.email
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-semibold text-primary",
							children: "Opening Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 space-y-1 text-muted-foreground",
							children: restaurant.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								h.days,
								": ",
								h.time
							] }, h.days))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						href: `tel:${restaurant.phoneHref}`,
						children: "Call Restaurant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						href: restaurant.directionsUrl,
						variant: "outline",
						children: "Get Directions"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: `Map showing ${restaurant.name} in ${restaurant.city}`,
				src: restaurant.mapEmbedUrl,
				loading: "lazy",
				className: "hairline-gold h-80 w-full rounded-lg lg:h-full"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "surface-sandstone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Write to Us",
				title: "Send a Message",
				intro: "Questions about menus, group bookings or timings — we read every message."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		})
	] });
}
//#endregion
export { Contact as component };
