import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-white.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-navy-deep/50 border-b border-white/5">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Harbour Anchor Shipping" className="h-10 w-10 object-contain" />
        <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-paper">Harbour Anchor</span>
      </Link>
      <div className="hidden md:flex gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-white transition-colors"
            activeProps={{ className: "text-anchor-blue" }}
            activeOptions={{ exact: true }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        to="/contact"
        className="bg-anchor-blue px-5 py-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all"
      >
        Get a Quote
      </Link>
    </nav>
  );
}
