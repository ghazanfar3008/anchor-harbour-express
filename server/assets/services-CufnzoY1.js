import { n as SiteNav, t as SiteFooter } from "./site-footer-5QBSMhF4.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/services.tsx?tsr-split=component
var services = [
	{
		t: "Air Freight",
		d: "Our team ensures smooth cargo movement with tailored freight-forwarding solutions. Trust an extensive carrier network and seasoned coordinators for urgent, high-value or oversized B2B consignments."
	},
	{
		t: "Ocean Freight",
		d: "Sail with confidence. We handle FCL, LCL, breakbulk and project cargo across the world's principal trade lanes, with regular movements between UAE, Jeddah, Massawa and Karachi."
	},
	{
		t: "Land Transport",
		d: "Seamless land transport solutions across the Gulf. Trucking partners and cross-border haulage networks make sure goods arrive efficiently and on time."
	},
	{
		t: "Customs Clearance",
		d: "Adherence to customs regulations and the paperwork that comes with them. Our brokerage team handles documentation, classification and clearance so your cargo keeps moving."
	},
	{
		t: "Port Stack Facility",
		d: "Competitive rates on stack and container-managing services. Optimise shipping costs without compromising service quality, with capacity at key Gulf terminals."
	},
	{
		t: "Slot Services",
		d: "Weekly feeder slots at reliable, transparent rates."
	},
	{
		t: "Ship Agency",
		d: "Dedicated support for precise and reliable vessel operations: inward and outward clearance, ship chandling, crew handling, bunker coordination, offshore tug and boat services and crew sign-on or sign-off."
	}
];
function Services() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-navy-deep text-paper font-sans selection:bg-anchor-blue selection:text-white min-h-screen",
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "pt-40 pb-24 px-8 md:px-20 border-b border-white/5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-anchor-blue" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-xs text-anchor-blue uppercase",
							children: "Our Services"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl md:text-7xl font-heading font-black tracking-tight leading-[0.95] max-w-4xl",
						children: ["Logistics solutions across ", /* @__PURE__ */ jsx("span", {
							className: "text-anchor-blue font-black tracking-tight",
							children: "air, sea and land."
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-2xl text-white/60 text-lg leading-relaxed",
						children: "From a single air-freight booking to full ship-agency support, every service is delivered by specialists who know the route, the regulations and the risk."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "bg-paper text-navy px-8 md:px-20 py-20",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 gap-1",
					children: services.map((s, i) => /* @__PURE__ */ jsxs("article", {
						className: "group relative bg-white border border-navy/5 p-10 hover:bg-navy hover:text-white transition-all duration-500 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "absolute -right-4 -top-8 text-[10rem] font-heading font-light opacity-[0.04] group-hover:opacity-10 transition-opacity",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold mb-4 uppercase tracking-tight relative",
								children: s.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-navy/60 group-hover:text-white/70 leading-relaxed relative mb-6",
								children: s.d
							}),
							/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-anchor-blue group-hover:w-full transition-all duration-500" })
						]
					}, s.t))
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-20 text-center",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading font-bold tracking-tight text-3xl md:text-4xl mb-6",
						children: "Not sure which service fits your cargo?"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-block bg-navy text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-anchor-blue transition-all",
						children: "Talk to Our Team"
					})]
				})]
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { Services as component };
