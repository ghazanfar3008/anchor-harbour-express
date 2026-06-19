import { t as hero_ship_default } from "./hero-ship-DZzR_dFs.js";
import { n as SiteNav, t as SiteFooter } from "./site-footer-5QBSMhF4.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-navy-deep text-paper font-sans min-h-screen",
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative pt-40 pb-32 px-8 md:px-20 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ jsx("img", {
						src: hero_ship_default,
						alt: "",
						className: "w-full h-full object-cover opacity-30"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-4xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 mb-6",
							children: [/* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-anchor-blue" }), /* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs text-anchor-blue uppercase",
								children: "About Us"
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-5xl md:text-7xl font-heading font-black tracking-tight leading-[0.95] mb-8",
							children: ["Navigating complexity with ", /* @__PURE__ */ jsx("span", {
								className: "text-anchor-blue font-black tracking-tight",
								children: "precision and dedication."
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-2xl text-white/70 text-lg leading-relaxed",
							children: "Harbour Anchor Shipping was established in the Gulf and has gone on to serve businesses across the region, moving cargo across air, sea and land with the discipline of a specialist crew."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-paper text-navy py-28 px-8 md:px-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-12 gap-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4",
							children: "Our Story"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-4xl font-heading font-bold tracking-tight leading-tight",
							children: "A trusted B2B cargo partner."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-8 space-y-6 text-navy/70 leading-relaxed text-lg",
						children: [
							/* @__PURE__ */ jsx("p", { children: "Harbour Anchor stands as a reliable B2B logistics partner in the Gulf region. With a commitment to excellence, we have earned the confidence of our clients through dependable and efficient services." }),
							/* @__PURE__ */ jsx("p", { children: "Our offering covers Air Freight, Ocean Freight, Land Transport, Customs Clearance, Port Stack Facility, Slot Services and Ship Agency Services. We act as the middleman between cargo owners and carriers, delivering tailored solutions across UAE, Jeddah, Massawa and Karachi." }),
							/* @__PURE__ */ jsx("p", { children: "At Harbour Anchor, we navigate the complexities of global logistics with precision and dedication, ensuring the smooth flow of goods across air, sea and land." })
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-navy text-paper py-28 px-8 md:px-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-12",
					children: [
						{
							n: "01",
							t: "Regional Coverage",
							d: "Connecting UAE, Jeddah, Massawa and Karachi, with onward links to the global trade network."
						},
						{
							n: "02",
							t: "On-Time Delivery",
							d: "Precision in every mile. Every schedule is a promise we plan around."
						},
						{
							n: "03",
							t: "24/7 Telephone Support",
							d: "Always by your side, around the clock. A reliable lifeline for time-critical freight."
						}
					].map((f) => /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-5xl font-heading font-light text-anchor-blue mb-4",
							children: f.n
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-bold uppercase tracking-widest text-sm mb-3",
							children: f.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/60 leading-relaxed",
							children: f.d
						})
					] }, f.t))
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "bg-paper text-navy py-24 px-8 md:px-20 text-center",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "font-heading font-bold tracking-tight text-3xl md:text-5xl mb-8 max-w-3xl mx-auto",
					children: "Ready to move your cargo with a partner who treats it like their own?"
				}), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "inline-block bg-navy text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-anchor-blue transition-all",
					children: "Get in Touch"
				})]
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { About as component };
