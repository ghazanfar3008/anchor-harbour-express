import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/logo-white.png
var logo_white_default = "/assets/logo-white-D7RO_XF2.png";
//#endregion
//#region src/components/site-nav.tsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNav() {
	return /* @__PURE__ */ jsxs("nav", {
		className: "fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-navy-deep/50 border-b border-white/5",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("img", {
					src: logo_white_default,
					alt: "Harbour Anchor Shipping",
					className: "h-10 w-10 object-contain"
				}), /* @__PURE__ */ jsx("span", {
					className: "font-heading font-bold text-xl md:text-2xl tracking-tight text-paper",
					children: "Harbour Anchor"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hidden md:flex gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60",
				children: links.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					className: "hover:text-white transition-colors",
					activeProps: { className: "text-anchor-blue" },
					activeOptions: { exact: true },
					children: l.label
				}, l.to))
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/contact",
				className: "bg-anchor-blue px-5 py-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all",
				children: "Get a Quote"
			})
		]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-navy-deep border-t border-white/5 py-20 px-8 md:px-20 text-paper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-4 gap-12 mb-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx("img", {
							src: logo_white_default,
							alt: "",
							className: "h-11 w-11 object-contain"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-heading font-bold tracking-tight text-3xl",
							children: "Harbour Anchor"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-white/40 max-w-sm text-sm leading-relaxed",
						children: "A Gulf-based B2B cargo partner moving freight by air, sea and land across UAE, Jeddah, Massawa and Karachi."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6",
					children: "Navigate"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2 text-sm text-white/60",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-white",
							children: "Home"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "hover:text-white",
							children: "Services"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-white",
							children: "About"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-white",
							children: "Contact"
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("address", {
					className: "not-italic text-sm text-white/60 flex flex-col gap-2",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "mailto:sales@harbouranchor.com",
							className: "hover:text-white",
							children: "sales@harbouranchor.com"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "mailto:info@harbouranchor.com",
							className: "hover:text-white",
							children: "info@harbouranchor.com"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://harbouranchor.com",
							className: "hover:text-white",
							children: "harbouranchor.com"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col md:flex-row justify-between gap-4 pt-10 border-t border-white/5 font-mono text-[9px] text-white/30 uppercase tracking-widest",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Harbour Anchor Shipping"
			] }), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-8",
				children: [/* @__PURE__ */ jsx("a", {
					href: "#",
					children: "Privacy"
				}), /* @__PURE__ */ jsx("a", {
					href: "#",
					children: "Terms of Carriage"
				})]
			})]
		})]
	});
}
//#endregion
export { SiteNav as n, SiteFooter as t };
