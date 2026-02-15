'use client'

import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import Link from "next/link"

export default function HeadquartersPage() {
  return (
    <main className="bg-background text-foreground">
      <NavigationBar />

      {/* HERO */}
      <section className="relative px-6 py-28 text-center max-w-5xl mx-auto">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
          Corporate Headquarters
        </h1>

        <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
          HS Solutions operates globally with engineering teams and clients
          across multiple regions, delivering reliable custom software and
          long-term technology partnerships.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
          <span>✔ Global Clients</span>
          <span>✔ Remote Engineering Team</span>
          <span>✔ Enterprise-grade Systems</span>
        </div>
      </section>

      {/* LOCATION + INFO */}
      <section className="px-6 py-24 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* Head Office */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Head Office</h2>

            <p className="text-foreground/70 leading-relaxed">
              HS Solutions<br/>
              Kokata, West Bengal, India<br/>
              Remote Operations Worldwide
            </p>

            <p className="mt-6 text-foreground/70">
              Email: solutions@thehssolutions.com<br/>
              Phone / WhatsApp: +91 8145136512
            </p>

            <a
              href="https://maps.google.com/?q=Kolkata West Bengal"
              target="_blank"
              className="inline-block mt-6 text-primary font-semibold"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Kolkata%20West%20Bengal&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* GLOBAL OPERATIONS */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Global Operations
        </h2>

        <p className="max-w-3xl mx-auto text-foreground/70 mb-16">
          We serve clients across North America, Europe, and Asia.
          Our distributed engineering model enables fast communication,
          flexible scaling, and cost-efficient development while maintaining
          enterprise-grade quality and reliability.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "North America",
              desc: "Custom SaaS platforms, logistics systems, and automation tools."
            },
            {
              title: "Europe",
              desc: "Legacy software modernization and scalable backend architecture."
            },
            {
              title: "Asia-Pacific",
              desc: "Mobile apps, travel platforms, and high-performance APIs."
            },
          ].map((item, i) => (
            <div key={i} className="p-8 border rounded-xl bg-card/30 hover:border-primary transition">
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering First",
                desc: "Clean architecture, scalable systems, honest timelines."
              },
              {
                title: "Long-Term Partnerships",
                desc: "We support and evolve your software for years."
              },
              {
                title: "Transparent Communication",
                desc: "Clear updates, realistic pricing, no surprises."
              },
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-xl bg-background hover:border-primary transition">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something Together
        </h2>

        <p className="text-foreground/70 mb-10">
          Tell us about your software challenge. We’ll design the right solution.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition"
        >
          Contact Headquarters
        </Link>
      </section>

      <Footer />
    </main>
  )
}
