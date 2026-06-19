import { createFileRoute, Link } from "@tanstack/react-router";
import heroShip from "@/assets/hero-ship.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Harbour Anchor Shipping" },
      { name: "description", content: "Harbour Anchor Shipping is a Gulf-based B2B cargo partner moving freight across air, sea and land for businesses around the region." },
      { property: "og:title", content: "About Harbour Anchor" },
      { property: "og:description", content: "A trusted B2B cargo and freight-forwarding partner across the Gulf." },
      { property: "og:image", content: heroShip },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-navy-deep text-paper font-sans min-h-screen">
      <SiteNav />

      <section className="relative pt-40 pb-32 px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroShip} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-anchor-blue" />
            <span className="font-mono text-xs text-anchor-blue uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight leading-[0.95] mb-8">
            Navigating complexity with <span className="text-anchor-blue font-black tracking-tight">precision and dedication.</span>
          </h1>
          <p className="max-w-2xl text-white/70 text-lg leading-relaxed">
            Harbour Anchor Shipping was established in the Gulf and has gone on to serve businesses across the region, moving cargo across air, sea and land with the discipline of a specialist crew.
          </p>
        </div>
      </section>

      <section className="bg-paper text-navy py-28 px-8 md:px-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-4">Our Story</span>
            <h2 className="text-4xl font-heading font-bold tracking-tight leading-tight">A trusted B2B cargo partner.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-navy/70 leading-relaxed text-lg">
            <p>Harbour Anchor stands as a reliable B2B logistics partner in the Gulf region. With a commitment to excellence, we have earned the confidence of our clients through dependable and efficient services.</p>
            <p>Our offering covers Air Freight, Ocean Freight, Land Transport, Customs Clearance, Port Stack Facility, Slot Services and Ship Agency Services. We act as the middleman between cargo owners and carriers, delivering tailored solutions across UAE, Jeddah, Massawa and Karachi.</p>
            <p>At Harbour Anchor, we navigate the complexities of global logistics with precision and dedication, ensuring the smooth flow of goods across air, sea and land.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper py-28 px-8 md:px-20">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Regional Coverage", d: "Connecting UAE, Jeddah, Massawa and Karachi, with onward links to the global trade network." },
            { n: "02", t: "On-Time Delivery", d: "Precision in every mile. Every schedule is a promise we plan around." },
            { n: "03", t: "24/7 Telephone Support", d: "Always by your side, around the clock. A reliable lifeline for time-critical freight." },
          ].map((f) => (
            <div key={f.t}>
              <div className="text-5xl font-heading font-light text-anchor-blue mb-4">{f.n}</div>
              <h3 className="font-bold uppercase tracking-widest text-sm mb-3">{f.t}</h3>
              <p className="text-white/60 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper text-navy py-24 px-8 md:px-20 text-center">
        <h3 className="font-heading font-bold tracking-tight text-3xl md:text-5xl mb-8 max-w-3xl mx-auto">
          Ready to move your cargo with a partner who treats it like their own?
        </h3>
        <Link to="/contact" className="inline-block bg-navy text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-anchor-blue transition-all">
          Get in Touch
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
