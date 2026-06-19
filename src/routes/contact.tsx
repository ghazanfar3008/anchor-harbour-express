import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Harbour Anchor Shipping" },
      { name: "description", content: "Request a free quote or speak with the Harbour Anchor logistics team. Email sales@harbouranchor.com or info@harbouranchor.com." },
      { property: "og:title", content: "Contact Harbour Anchor" },
      { property: "og:description", content: "Request a free quote. Empowering your journey — seamless solutions await." },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Air Freight",
  "Ocean Freight",
  "Land Transport",
  "Customs Clearance",
  "Port Stack Facility",
  "Slot Services",
  "Ship Agency Services",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-navy-deep text-paper font-sans min-h-screen">
      <SiteNav />

      <section className="pt-40 pb-16 px-8 md:px-20 border-b border-white/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-anchor-blue" />
          <span className="font-mono text-xs text-anchor-blue uppercase">Get a Quote</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.95] max-w-4xl">
          Request a <span className="text-anchor-blue not-italic font-sans font-extrabold">free quote.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
          Tell us about your cargo and we'll respond with a route, a rate and a real person to coordinate it.
        </p>
      </section>

      <section className="px-8 md:px-20 py-20 bg-paper text-navy">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Contact info */}
          <aside className="md:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 block mb-2">Call for any query</span>
              <p className="font-serif italic text-3xl md:text-4xl">Let's talk cargo.</p>
            </div>

            <div className="space-y-6">
              <div className="border-t border-navy/10 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2">Sales</span>
                <a href="mailto:sales@harbouranchor.com" className="text-xl hover:text-anchor-blue transition-colors">
                  sales@harbouranchor.com
                </a>
              </div>
              <div className="border-t border-navy/10 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2">General Enquiries</span>
                <a href="mailto:info@harbouranchor.com" className="text-xl hover:text-anchor-blue transition-colors">
                  info@harbouranchor.com
                </a>
              </div>
              <div className="border-t border-navy/10 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-anchor-blue block mb-2">Web</span>
                <a href="https://harbouranchor.com" className="text-xl hover:text-anchor-blue transition-colors">
                  harbouranchor.com
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="bg-navy text-paper p-12">
                <h2 className="font-serif italic text-3xl mb-4">Thank you.</h2>
                <p className="text-white/70 leading-relaxed">
                  Your request has been received. A member of our team will be in touch shortly at the email you provided.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-navy text-paper p-10 md:p-12 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Your Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2">
                    Select Service
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-paper focus:border-anchor-blue focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-navy">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="text-navy">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2">
                    Shipment Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Origin, destination, cargo type, weight, timeline…"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-paper placeholder:text-white/30 focus:border-anchor-blue focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-anchor-blue px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-paper hover:text-navy transition-all"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-anchor-blue mb-2">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border border-white/20 px-4 py-3 text-paper focus:border-anchor-blue focus:outline-none transition-colors"
      />
    </div>
  );
}
