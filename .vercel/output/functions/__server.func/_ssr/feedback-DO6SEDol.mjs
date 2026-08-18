import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as restaurant, E as feedbackTypes, c as Section, l as SectionHeading, r as ActionButton, s as PageHero } from "./router-D8aqHFLr.mjs";
import { a as TextArea, i as Select, n as FormStatus, o as TextInput, r as RatingInput, s as limitText, t as Field } from "./validation-C97rv48X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feedback-DO6SEDol.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialText = {
	name: "",
	contact: "",
	visitDate: "",
	feedbackType: "General Feedback",
	favouriteDish: "",
	enjoyedMost: "",
	comments: "",
	recommend: "",
	contactRequested: false
};
var initialRatings = {
	overall: null,
	food: null,
	service: null,
	cleanliness: null,
	ambience: null,
	value: null
};
function FeedbackForm() {
	const [values, setValues] = (0, import_react.useState)(initialText);
	const [ratings, setRatings] = (0, import_react.useState)(initialRatings);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const set = (key) => (e) => setValues((v) => ({
		...v,
		[key]: e.target.value
	}));
	const rate = (key) => (score) => setRatings((r) => ({
		...r,
		[key]: score
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		const next = {};
		const name = values.name.trim();
		if (name.length < 2) next["name"] = "Please enter your name (at least 2 characters).";
		if (!ratings.overall) next["overall"] = "Please give an overall rating.";
		limitText(values.comments, 2e3, "your comments", next, "comments");
		limitText(values.enjoyedMost, 1e3, "this answer", next, "enjoyedMost");
		setErrors(next);
		if (Object.keys(next).length) {
			setStatus("error");
			setMessage("Please correct the highlighted fields and submit again.");
			return;
		}
		const ratingsSummary = [
			ratings.overall ? `*Overall Experience:* ${ratings.overall}/5` : null,
			ratings.food ? `*Food:* ${ratings.food}/5` : null,
			ratings.service ? `*Service:* ${ratings.service}/5` : null,
			ratings.cleanliness ? `*Cleanliness:* ${ratings.cleanliness}/5` : null,
			ratings.ambience ? `*Ambience:* ${ratings.ambience}/5` : null,
			ratings.value ? `*Value for Money:* ${ratings.value}/5` : null
		].filter(Boolean).join("\n");
		const messageText = `*Guest Feedback*

*Name:* ${name}
${values.contact ? `*Contact:* ${values.contact.trim()}\n` : ""}${values.visitDate ? `*Visit Date:* ${values.visitDate}\n` : ""}*Feedback Type:* ${values.feedbackType}

*Ratings:*
${ratingsSummary}

${values.favouriteDish ? `*Favourite Dish:* ${values.favouriteDish.trim()}\n` : ""}${values.recommend ? `*Would Recommend:* ${values.recommend === "yes" ? "Yes" : "No"}\n` : ""}${values.enjoyedMost ? `*Enjoyed Most:* ${values.enjoyedMost.trim()}\n` : ""}${values.comments ? `*Comments:* ${values.comments.trim()}\n` : ""}${values.contactRequested ? "*Customer requested a callback regarding this feedback.*" : ""}`;
		const whatsappUrl = `https://wa.me/918960107779?text=${encodeURIComponent(messageText)}`;
		window.open(whatsappUrl, "_blank");
		setStatus("success");
		setMessage("Thank you for sharing your experience — every word reaches our team.");
		setValues(initialText);
		setRatings(initialRatings);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "flex flex-col gap-6",
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
						htmlFor: "f-name",
						required: true,
						error: errors["name"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "f-name",
							autoComplete: "name",
							value: values.name,
							onChange: set("name"),
							"aria-invalid": Boolean(errors["name"])
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email or Phone",
						htmlFor: "f-contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "f-contact",
							value: values.contact,
							onChange: set("contact")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Visit Date",
						htmlFor: "f-date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "f-date",
							type: "date",
							value: values.visitDate,
							onChange: set("visitDate")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Feedback Type",
						htmlFor: "f-type",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "f-type",
							value: values.feedbackType,
							onChange: set("feedbackType"),
							children: feedbackTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t,
								children: t
							}, t))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hairline-gold flex flex-col gap-6 rounded-lg bg-secondary/60 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "overall",
						label: "Overall Experience",
						value: ratings.overall,
						onChange: rate("overall"),
						required: true,
						error: errors["overall"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "food",
						label: "Food",
						value: ratings.food,
						onChange: rate("food")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "service",
						label: "Service",
						value: ratings.service,
						onChange: rate("service")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "cleanliness",
						label: "Cleanliness",
						value: ratings.cleanliness,
						onChange: rate("cleanliness")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "ambience",
						label: "Ambience",
						value: ratings.ambience,
						onChange: rate("ambience")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingInput, {
						name: "value",
						label: "Value for Money",
						value: ratings.value,
						onChange: rate("value")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Favourite Dish",
					htmlFor: "f-dish",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "f-dish",
						value: values.favouriteDish,
						onChange: set("favouriteDish")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Would you recommend us?",
					htmlFor: "f-recommend",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						id: "f-recommend",
						value: values.recommend,
						onChange: set("recommend"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Prefer not to say"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "yes",
								children: "Yes, gladly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "no",
								children: "Not yet"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What did you enjoy most?",
				htmlFor: "f-enjoyed",
				error: errors["enjoyedMost"],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "f-enjoyed",
					rows: 3,
					maxLength: 1e3,
					value: values.enjoyedMost,
					onChange: set("enjoyedMost"),
					"aria-invalid": Boolean(errors["enjoyedMost"])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Comments",
				htmlFor: "f-comments",
				error: errors["comments"],
				hint: "Tell us anything that would help us serve you better.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "f-comments",
					rows: 5,
					maxLength: 2e3,
					value: values.comments,
					onChange: set("comments"),
					"aria-invalid": Boolean(errors["comments"])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-start gap-3 text-sm text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: values.contactRequested,
					onChange: (e) => setValues((v) => ({
						...v,
						contactRequested: e.target.checked
					})),
					className: "mt-1 size-5 accent-[var(--primary)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Yes, I would like someone from the team to contact me about this feedback." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: "Your feedback reaches our team privately and is never published on this website."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:self-start",
				children: status === "loading" ? "Sending feedback…" : "Share Feedback"
			})
		]
	});
}
function Feedback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		breadcrumb: "Feedback",
		eyebrow: "Feedback",
		title: "Your Experience Matters",
		intro: "Compliments help us know what to protect. Suggestions help us grow. Complaints help us correct."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Tell Us Everything",
			title: "Rate Your Visit",
			intro: "Only your name and an overall rating are required — the rest is welcome, never expected."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackForm, {})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hairline-gold h-fit rounded-lg bg-secondary p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-primary",
				children: "How We Use It"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every submission is read by the restaurant team, usually the same week." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feedback is kept private and is never published on this website." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If you ask us to contact you, we will use the phone or email you provide." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Urgent concerns are best raised on the spot, or by calling",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${restaurant.phoneHref}`,
							className: "link-underline font-semibold text-terracotta",
							children: restaurant.phone
						}),
						"."
					] })
				]
			})]
		})]
	}) })] });
}
//#endregion
export { Feedback as component };
