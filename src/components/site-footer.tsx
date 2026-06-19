import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-white.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-20 px-8 md:px-20 text-paper">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="" className="h-11 w-11 object-contain" />
            <h2 className="font-heading font-bold tracking-tight text-3xl">Harbour Anchor</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            A Gulf-based B2B cargo partner moving freight by air, sea and land across UAE, Jeddah, Massawa and Karachi.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6">Navigate</h4>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6">Contact</h4>
          <address className="not-italic text-sm text-white/60 flex flex-col gap-2">
            <a href="mailto:sales@harbouranchor.com" className="hover:text-white">sales@harbouranchor.com</a>
            <a href="mailto:info@harbouranchor.com" className="hover:text-white">info@harbouranchor.com</a>
            <a href="https://harbouranchor.com" className="hover:text-white">harbouranchor.com</a>
          </address>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-10 border-t border-white/5 font-mono text-[9px] text-white/30 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Harbour Anchor Shipping</span>
        <div className="flex gap-8">
          <a href="#">Privacy</a>
          <a href="#">Terms of Carriage</a>
        </div>
      </div>
    </footer>
  );
}
