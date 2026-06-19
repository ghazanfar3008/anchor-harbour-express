import { n as SiteNav, t as SiteFooter } from "./site-footer-5QBSMhF4.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/contact.tsx?tsr-split=component
var serviceOptions = [
	"Air Freight",
	"Ocean Freight",
	"Land Transport",
	"Customs Clearance",
	"Port Stack Facility",
	"Slot Services",
	"Ship Agency Services"
];
function Contact() {
	const [submitted, setSubmitted] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-navy-deep text-paper font-sans min-h-screen",
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "pt-40 pb-16 px-8 md:px-20 border-b border-white/5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-anchor-blue" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-xs text-anchor-blue uppercase",
							children: "Get a Quote"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl md:text-7xl font-heading font-black tracking-tight leading-[0.95] max-w-4xl",
						children: ["Request a ", /* @__PURE__ */ jsx("span", {
							className: "text-anchor-blue font-black tracking-tight",
							children: "free quote."
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-2xl text-white/60 text-lg leading-relaxed",
						children: "Tell us about your cargo and we'll respond with a route, a rate and a real person to coordinate it."
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-8 md:px-20 py-20 bg-paper text-navy",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-12 gap-16",
					children: [/* @__PURE__ */ jsxs("aside", {
						className: "md:col-span-5 space-y-10",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-2",
							children: "Call for any query"
						}), /* @__PURE__ */ jsx("p", {
							className: "font-heading font-light text-3xl md:text-4xl",
							children: "Let's talk cargo."
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "border-t border-navy/10 pt-6",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2",
										children: "Sales"
									}), /* @__PURE__ */ jsx("a", {
										href: "mailto:sales@harbouranchor.com",
										className: "text-xl hover:text-anchor-blue transition-colors",
										children: "sales@harbouranchor.com"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "border-t border-navy/10 pt-6",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2",
										children: "General Enquiries"
									}), /* @__PURE__ */ jsx("a", {
										href: "mailto:info@harbouranchor.com",
										className: "text-xl hover:text-anchor-blue transition-colors",
										children: "info@harbouranchor.com"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "border-t border-navy/10 pt-6",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2",
										children: "Web"
									}), /* @__PURE__ */ jsx("a", {
										href: "https://harbouranchor.com",
										className: "text-xl hover:text-anchor-blue transition-colors",
										children: "harbouranchor.com"
									})]
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "md:col-span-7",
						children: submitted ? /* @__PURE__ */ jsxs("div", {
							className: "bg-navy text-paper p-12",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-heading font-bold tracking-tight text-3xl mb-4",
								children: "Thank you."
							}), /* @__PURE__ */ jsx("p", {
								className: "text-white/70 leading-relaxed",
								children: "Your request has been received. A member of our team will be in touch shortly at the email you provided."
							})]
						}) : /* @__PURE__ */ jsxs("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setSubmitted(true);
							},
							className: "bg-navy text-paper p-10 md:p-12 space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid md:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ jsx(Field, {
											label: "Your Name",
											name: "name",
											required: true
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "Company",
											name: "company"
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "Email",
											name: "email",
											type: "email",
											required: true
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "Phone",
											name: "phone",
											type: "tel"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2",
									children: "Select Service"
								}), /* @__PURE__ */ jsxs("select", {
									name: "service",
									required: true,
									className: "w-full bg-transparent border border-white/20 px-4 py-3 text-paper focus:border-anchor-blue focus:outline-none transition-colors",
									defaultValue: "",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										className: "text-navy",
										children: "Select a service…"
									}), serviceOptions.map((s) => /* @__PURE__ */ jsx("option", {
										value: s,
										className: "text-navy",
										children: s
									}, s))]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2",
									children: "Shipment Details"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 5,
									placeholder: "Origin, destination, cargo type, weight, timeline…",
									className: "w-full bg-transparent border border-white/20 px-4 py-3 text-paper placeholder:text-white/30 focus:border-anchor-blue focus:outline-none transition-colors"
								})] }),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "bg-anchor-blue px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all",
									children: "Submit Request"
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
		className: "block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2",
		children: [label, required && " *"]
	}), /* @__PURE__ */ jsx("input", {
		type,
		name,
		required,
		className: "w-full bg-transparent border border-white/20 px-4 py-3 text-paper focus:border-anchor-blue focus:outline-none transition-colors"
	})] });
}
//#endregion
export { Contact as component };
