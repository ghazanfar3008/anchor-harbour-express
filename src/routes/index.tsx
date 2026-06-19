import { createFileRoute } from "@tanstack/react-router";
import heroShip from "@/assets/hero-ship.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-navy-deep text-paper font-sans selection:bg-anchor-blue selection:text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-navy-deep/40 border-b border-white/5">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Harbour Anchor Shipping" className="h-9 w-9 object-contain bg-paper rounded-sm p-0.5" />
            <span className="font-serif text-2xl tracking-tight italic">Harbour Anchor</span>
          </a>
          <div className="hidden md:flex gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            <a href="#services" className="hover:text-white transition-colors">Fleet</a>
            <a href="#services" className="hover:text-white transition-colors">Logistics</a>
            <a href="#heritage" className="hover:text-white transition-colors">Heritage</a>
            <a href="#network" className="hover:text-white transition-colors">Network</a>
          </div>
        </div>
        <button className="bg-anchor-blue px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-paper hover:text-navy transition-all">
          Track Shipment
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroShip}
            alt="Container ship at dawn"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="animate-reveal flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-anchor-blue" />
            <span className="font-mono text-xs text-anchor-blue uppercase">Est. 1924 / Global Maritime Leader</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-[0.9] animate-lock">
            Reliable.
            <span className="font-sans not-italic font-extrabold block text-anchor-blue">Precise. Global.</span>
          </h1>
          <p className="max-w-md text-white/70 text-lg leading-relaxed mb-10 animate-lock [animation-delay:100ms]">
            Moving the heavy machinery of global commerce with surgical precision and maritime authority.
          </p>
          <div className="flex flex-wrap gap-4 animate-lock [animation-delay:200ms]">
            <button className="bg-anchor-blue px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-paper hover:text-navy transition-all">
              Request a Quote
            </button>
            <button className="border border-white/20 px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Fleet
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 md:right-20 z-10 hidden md:flex items-end gap-12 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <div><div className="text-anchor-blue text-2xl font-serif not-italic mb-1">412</div>Active Vessels</div>
          <div><div className="text-anchor-blue text-2xl font-serif not-italic mb-1">1,840</div>Ports Served</div>
          <div><div className="text-anchor-blue text-2xl font-serif not-italic mb-1">99.4%</div>On-Time</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-32 px-8 md:px-20 bg-paper text-navy">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">01 / Global Operations</span>
            <h2 className="text-5xl font-serif italic leading-none">Our Core Services</h2>
          </div>
          <p className="md:w-1/3 text-sm text-navy/60 leading-relaxed">
            Leveraging a century of oceanic mastery to solve the logistics challenges of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {[
            { n: "01", t: "Trans-Pacific Cargo", d: "High-capacity linehaul between major Asian hubs and the American West Coast." },
            { n: "02", t: "Precision Cold-Chain", d: "Temperature-controlled logistics for sensitive pharmaceuticals and food-grade freight." },
            { n: "03", t: "Last-Mile Intermodal", d: "Seamless integration from port to rail and road, delivering to the final dock." },
          ].map((s) => (
            <div key={s.n} className="group relative bg-white border border-navy/5 p-10 hover:bg-navy hover:text-white transition-all duration-500 overflow-hidden">
              <span className="absolute -right-4 -top-8 text-9xl font-serif opacity-[0.03] group-hover:opacity-10 transition-opacity">{s.n}</span>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight relative">{s.t}</h3>
              <p className="text-sm text-navy/60 group-hover:text-white/70 mb-8 relative">{s.d}</p>
              <div className="h-px w-8 bg-anchor-blue group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Heritage band */}
      <section id="heritage" className="bg-paper text-navy px-8 md:px-20 pb-32">
        <div className="grid md:grid-cols-12 gap-12 items-center border-t border-navy/10 pt-20">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">02 / Heritage</span>
            <h3 className="text-4xl font-serif italic leading-tight">A century of holding the line.</h3>
          </div>
          <div className="md:col-span-7 space-y-6 text-navy/70 leading-relaxed">
            <p>From a single tugboat in Rotterdam in 1924, Harbour Anchor has grown into a specialist carrier trusted by governments, manufacturers, and global retailers — without ever sacrificing the discipline of a small crew.</p>
            <p>We measure success in bills of lading closed on time, in cargo that arrived exactly as it left, and in clients who have stayed with us for generations.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="font-mono text-xs text-anchor-blue uppercase tracking-widest mb-12 block">Maritime Authority</span>
          <blockquote className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight mb-12">
            “In an industry defined by volatility, Harbour Anchor provides the literal and metaphorical grounding we need for our global supply chain.”
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-anchor-blue/20 border border-white/10 rounded-full mb-4" />
            <cite className="not-italic font-bold uppercase tracking-widest text-xs">Marcus Thorne</cite>
            <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">VP Operations, Nord-Global</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="network" className="bg-navy-deep border-t border-white/5 py-20 px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" className="h-10 w-10 object-contain bg-paper rounded-sm p-0.5" />
              <h2 className="font-serif italic text-3xl">Harbour Anchor</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Providing specialized ocean transportation and logistics solutions across six continents. Built on a century of maritime heritage.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6">Contact</h4>
            <address className="not-italic text-sm text-white/60 flex flex-col gap-2">
              <span>Port of Rotterdam, Terminal 4</span>
              <span>support@harbouranchor.com</span>
              <span>+31 10 234 5678</span>
            </address>
          </div>
          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-anchor-blue mb-6">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Maritime Hub</a>
              <a href="#" className="hover:text-white">Annual Reports</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-12 border-t border-white/5 font-mono text-[9px] text-white/30 uppercase tracking-widest">
          <span>© 2024 Harbour Anchor Shipping Line</span>
          <div className="flex gap-8">
            <a href="#">Privacy Protocol</a>
            <a href="#">Terms of Carriage</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
