import { createFileRoute, Link } from "@tanstack/react-router";
import heroShip from "@/assets/hero-ship.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harbour Anchor Shipping — B2B Cargo, Air, Ocean & Land" },
      { name: "description", content: "Harbour Anchor Shipping is a Gulf-based B2B cargo partner offering air freight, ocean freight, land transport, customs clearance and ship agency across UAE, Jeddah, Massawa and Karachi." },
      { property: "og:title", content: "Harbour Anchor Shipping" },
      { property: "og:description", content: "B2B cargo and freight forwarding across UAE, Jeddah, Massawa and Karachi." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Air Freight", d: "Tailored freight forwarding solutions backed by an extensive carrier network for time-sensitive B2B cargo." },
  { n: "02", t: "Ocean Freight", d: "FCL, LCL and project cargo movements between UAE, Jeddah, Massawa and Karachi, plus the world's major shipping lanes." },
  { n: "03", t: "Land Transport", d: "Reliable trucking and cross-border haulage that gets goods to their destination on schedule." },
  { n: "04", t: "Customs Clearance", d: "Documentation, tariffs and regulatory compliance handled by specialists on the ground." },
  { n: "05", t: "Port Stack Facility", d: "Competitive rates on container stacking and yard management at key Gulf terminals." },
  { n: "06", t: "Slot Services", d: "Weekly feeder slots at reliable, transparent rates." },
  { n: "07", t: "Ship Agency", d: "Inward and outward clearance, chandling, crew handling, bunker coordination and tug services." },
];

function Index() {
  return (
    <div className="bg-navy-deep text-paper font-sans selection:bg-anchor-blue selection:text-white min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroShip} alt="Container vessel at dawn" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="animate-reveal flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-anchor-blue" />
            <span className="font-mono text-xs text-anchor-blue uppercase">Gulf-based · B2B Cargo</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-heading mb-8 leading-[0.9] animate-lock">
            B2B logistics,
            <span className="font-sans not-italic font-extrabold block text-anchor-blue tracking-tight">tailored to your cargo.</span>
          </h1>
          <p className="max-w-xl text-white/70 text-lg leading-relaxed mb-10 animate-lock [animation-delay:100ms]">
            Harbour Anchor is the middleman that moves freight across air, sea and land. One trusted partner for customs clearance, port handling and ship agency across UAE, Jeddah, Massawa and Karachi.
          </p>
          <div className="flex flex-wrap gap-4 animate-lock [animation-delay:200ms]">
            <Link to="/contact" className="bg-anchor-blue px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all">
              Request a Free Quote
            </Link>
            <Link to="/services" className="border border-white/20 px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper text-navy py-28 px-8 md:px-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-heading leading-tight">A trusted B2B cargo partner.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-navy/70 leading-relaxed text-lg">
            <p>Harbour Anchor Shipping operates as the middleman for businesses moving cargo across the Gulf and the wider region. Our work earns the confidence of manufacturers, distributors and trading houses that need a partner with feet on the ground.</p>
            <p>We navigate the complexities of global logistics with precision and dedication, keeping freight moving across air, sea and land on every shipment, every time.</p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-paper text-navy pb-28 px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">01 / What We Offer</span>
            <h2 className="text-5xl font-heading leading-none">Explore Our Services</h2>
          </div>
          <p className="md:w-1/3 text-sm text-navy/60 leading-relaxed">
            A focused B2B service mix, engineered around your cargo, your timeline and your route.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((s) => (
            <div key={s.n} className="group relative bg-white border border-navy/5 p-8 hover:bg-navy hover:text-white transition-all duration-500 overflow-hidden">
              <span className="absolute -right-4 -top-8 text-9xl font-heading opacity-[0.04] group-hover:opacity-10 transition-opacity">{s.n}</span>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight relative">{s.t}</h3>
              <p className="text-sm text-navy/60 group-hover:text-white/70 mb-6 relative leading-relaxed">{s.d}</p>
              <div className="h-px w-8 bg-anchor-blue group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/services" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-navy hover:text-anchor-blue transition-colors">
            View All Services <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy text-paper py-28 px-8 md:px-20">
        <span className="font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-4">Our Features</span>
        <h2 className="text-4xl md:text-5xl font-heading leading-tight max-w-3xl mb-16">
          Established in the Gulf. Serving businesses across the region.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "Regional Coverage", d: "Direct presence and partner networks across UAE, Jeddah, Massawa and Karachi." },
            { t: "On-Time Delivery", d: "Precision in every mile. We treat each schedule as a commitment, not a target." },
            { t: "24/7 Support", d: "A reliable line around the clock. Real people coordinating real cargo, always." },
          ].map((f) => (
            <div key={f.t} className="border-t border-white/10 pt-8">
              <h3 className="font-bold uppercase tracking-widest text-sm text-anchor-blue mb-4">{f.t}</h3>
              <p className="text-white/70 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper text-navy py-28 px-8 md:px-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">Get a Quote</span>
            <h2 className="text-4xl md:text-6xl font-heading leading-tight mb-6">Request a free quote today.</h2>
            <p className="text-navy/70 leading-relaxed max-w-xl">
              Tell us where your cargo needs to go and we'll build the route.
            </p>
          </div>
          <div className="md:col-span-5 bg-navy text-paper p-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2">Call for any query</span>
            <p className="font-heading text-3xl mb-6">sales@harbouranchor.com</p>
            <Link to="/contact" className="inline-block bg-anchor-blue px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
