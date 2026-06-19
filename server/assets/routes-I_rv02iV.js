import { t as hero_ship_default } from "./hero-ship-DZzR_dFs.js";
import { n as SiteNav, t as SiteFooter } from "./site-footer-5QBSMhF4.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
var services = [
	{
		n: "01",
		t: "Air Freight",
		d: "Tailored freight forwarding solutions backed by an extensive carrier network for time-sensitive B2B cargo."
	},
	{
		n: "02",
		t: "Ocean Freight",
		d: "FCL, LCL and project cargo movements between UAE, Jeddah, Massawa and Karachi, plus the world's major shipping lanes."
	},
	{
		n: "03",
		t: "Land Transport",
		d: "Reliable trucking and cross-border haulage that gets goods to their destination on schedule."
	},
	{
		n: "04",
		t: "Customs Clearance",
		d: "Documentation, tariffs and regulatory compliance handled by specialists on the ground."
	},
	{
		n: "05",
		t: "Port Stack Facility",
		d: "Competitive rates on container stacking and yard management at key Gulf terminals."
	},
	{
		n: "06",
		t: "Slot Services",
		d: "Weekly feeder slots at reliable, transparent rates."
	},
	{
		n: "07",
		t: "Ship Agency",
		d: "Inward and outward clearance, chandling, crew handling, bunker coordination and tug services."
	}
];
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-navy-deep text-paper font-sans selection:bg-anchor-blue selection:text-white min-h-screen",
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: hero_ship_default,
							alt: "Container vessel at dawn",
							className: "w-full h-full object-cover opacity-70"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/20" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-4xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "animate-reveal flex items-center gap-4 mb-6",
							children: [/* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-anchor-blue" }), /* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs text-anchor-blue uppercase",
								children: "Gulf-based · B2B Cargo"
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-5xl md:text-8xl font-heading font-black tracking-tight mb-8 leading-[0.9] animate-lock",
							children: ["B2B logistics,", /* @__PURE__ */ jsx("span", {
								className: "block text-anchor-blue font-black tracking-tight",
								children: "tailored to your cargo."
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-xl text-white/70 text-lg leading-relaxed mb-10 animate-lock [animation-delay:100ms]",
							children: "Harbour Anchor is the middleman that moves freight across air, sea and land. One trusted partner for customs clearance, port handling and ship agency across UAE, Jeddah, Massawa and Karachi."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-4 animate-lock [animation-delay:200ms]",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "bg-anchor-blue px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all",
								children: "Request a Free Quote"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/services",
								className: "border border-white/20 px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all",
								children: "Explore Services"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-paper text-navy py-28 px-8 md:px-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-12 gap-12 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4",
							children: "Who We Are"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight",
							children: "A trusted B2B cargo partner."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-7 space-y-6 text-navy/70 leading-relaxed text-lg",
						children: [/* @__PURE__ */ jsx("p", { children: "Harbour Anchor Shipping operates as the middleman for businesses moving cargo across the Gulf and the wider region. Our work earns the confidence of manufacturers, distributors and trading houses that need a partner with feet on the ground." }), /* @__PURE__ */ jsx("p", { children: "We navigate the complexities of global logistics with precision and dedication, keeping freight moving across air, sea and land on every shipment, every time." })]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "bg-paper text-navy pb-28 px-8 md:px-20",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col md:flex-row justify-between items-end gap-8 mb-16",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4",
							children: "01 / What We Offer"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-5xl font-heading font-bold tracking-tight leading-none",
							children: "Explore Our Services"
						})] }), /* @__PURE__ */ jsx("p", {
							className: "md:w-1/3 text-sm text-navy/60 leading-relaxed",
							children: "A focused B2B service mix, engineered around your cargo, your timeline and your route."
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-4 gap-1",
						children: services.map((s) => /* @__PURE__ */ jsxs("div", {
							className: "group relative bg-white border border-navy/5 p-8 hover:bg-navy hover:text-white transition-all duration-500 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "absolute -right-4 -top-8 text-9xl font-heading font-light opacity-[0.04] group-hover:opacity-10 transition-opacity",
									children: s.n
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-bold mb-3 uppercase tracking-tight relative",
									children: s.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-navy/60 group-hover:text-white/70 mb-6 relative leading-relaxed",
									children: s.d
								}),
								/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-anchor-blue group-hover:w-full transition-all duration-500" })
							]
						}, s.n))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-navy hover:text-anchor-blue transition-colors",
							children: ["View All Services ", /* @__PURE__ */ jsx("span", {
								"aria-hidden": true,
								children: "→"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "bg-navy text-paper py-28 px-8 md:px-20",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-4",
						children: "Our Features"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight max-w-3xl mb-16",
						children: "Established in the Gulf. Serving businesses across the region."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-3 gap-10",
						children: [
							{
								t: "Regional Coverage",
								d: "Direct presence and partner networks across UAE, Jeddah, Massawa and Karachi."
							},
							{
								t: "On-Time Delivery",
								d: "Precision in every mile. We treat each schedule as a commitment, not a target."
							},
							{
								t: "24/7 Support",
								d: "A reliable line around the clock. Real people coordinating real cargo, always."
							}
						].map((f) => /* @__PURE__ */ jsxs("div", {
							className: "border-t border-white/10 pt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold uppercase tracking-widest text-sm text-anchor-blue mb-4",
								children: f.t
							}), /* @__PURE__ */ jsx("p", {
								className: "text-white/70 leading-relaxed",
								children: f.d
							})]
						}, f.t))
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-paper text-navy py-28 px-8 md:px-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-12 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-7",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4",
								children: "Get a Quote"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight mb-6",
								children: "Request a free quote today."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-navy/70 leading-relaxed max-w-xl",
								children: "Tell us where your cargo needs to go and we'll build the route."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-5 bg-navy text-paper p-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2",
								children: "Call for any query"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-heading font-light text-3xl mb-6",
								children: "sales@harbouranchor.com"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "inline-block bg-anchor-blue px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all",
								children: "Start a Conversation"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
