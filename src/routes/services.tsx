import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Harbour Anchor Shipping" },
      { name: "description", content: "Air freight, ocean freight, land transport, door-to-door, customs clearance, port stack, slot services and ship agency from Harbour Anchor." },
      { property: "og:title", content: "Harbour Anchor Services" },
      { property: "og:description", content: "A complete suite of air, sea and land logistics services." },
    ],
  }),
  component: Services,
});

const services = [
  { t: "Air Freight", d: "Our team ensures smooth cargo movement with tailored freight-forwarding solutions. Trust in our extensive carrier network and expertise to provide seamless air transportation for urgent, high-value or oversized consignments." },
  { t: "Ocean Freight", d: "Sail with confidence. We handle FCL, LCL, breakbulk and project cargo across the world's principal trade lanes, with dedicated specialists managing every bill of lading." },
  { t: "Land Transport", d: "Seamless land transport solutions across the Gulf and beyond. Our trucking partners and cross-border haulage networks make sure goods arrive efficiently and on time." },
  { t: "Door-to-Door Services", d: "A hassle-free experience from pick-up to delivery. One coordinator, one point of accountability — we make the journey as effortless as possible." },
  { t: "Customs Clearance", d: "Adherence to customs regulations and the paperwork that comes with them. Our brokerage team handles documentation, classification and clearance so your cargo keeps moving." },
  { t: "Port Stack Facility", d: "Competitive rates on stack and container-managing services. Optimise shipping costs without compromising service quality, with capacity at key Gulf terminals." },
  { t: "Slot Services", d: "We operate feeder vessels on a weekly service routing from Jebel Ali to Bandar Abbas and vice versa. Competitive slot rates ensure reliable and efficient services between these port pairs." },
  { t: "Ship Agency", d: "Dedicated support for precise and reliable vessel operations: inward and outward clearance, ship chandling, crew handling, bunker coordination, offshore tug/boat services and crew sign-on/off." },
];

function Services() {
  return (
    <div className="bg-navy-deep text-paper font-sans selection:bg-anchor-blue selection:text-white min-h-screen">
      <SiteNav />

      <section className="pt-40 pb-24 px-8 md:px-20 border-b border-white/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-anchor-blue" />
          <span className="font-mono text-xs text-anchor-blue uppercase">Our Services</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.95] max-w-4xl">
          Logistics solutions across <span className="text-anchor-blue not-italic font-sans font-extrabold">air, sea and land.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
          From a single air-freight booking to full ship-agency support, every service is delivered by specialists who know the route, the regulations and the risk.
        </p>
      </section>

      <section className="bg-paper text-navy px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-1">
          {services.map((s, i) => (
            <article key={s.t} className="group relative bg-white border border-navy/5 p-10 hover:bg-navy hover:text-white transition-all duration-500 overflow-hidden">
              <span className="absolute -right-4 -top-8 text-[10rem] font-serif opacity-[0.04] group-hover:opacity-10 transition-opacity">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight relative">{s.t}</h2>
              <p className="text-navy/60 group-hover:text-white/70 leading-relaxed relative mb-6">{s.d}</p>
              <div className="h-px w-8 bg-anchor-blue group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-serif italic text-3xl md:text-4xl mb-6">Not sure which service fits your cargo?</h3>
          <Link to="/contact" className="inline-block bg-navy text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-anchor-blue transition-all">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
