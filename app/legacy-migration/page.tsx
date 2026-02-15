'use client'

import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import Link from "next/link"

export default function LegacyMigrationPage() {
  return (
    <main className="bg-background text-foreground">
      <NavigationBar />

      {/* HERO */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Migrate Your Legacy SaaS <br />
          <span className="text-primary">Without Breaking Your Business</span>
        </h1>

        <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
          We modernize old SaaS platforms, databases, and monolithic systems
          into scalable, secure, cloud-ready architecture — with zero downtime.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold"
          >
            Get Migration Plan
          </Link>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="px-6 py-20 bg-card/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Signs Your SaaS Needs Migration
            </h2>

            <ul className="space-y-4 text-foreground/70">
              <li>• Slow performance and frequent downtime</li>
              <li>• Old frameworks that developers avoid</li>
              <li>• Expensive hosting and scaling problems</li>
              <li>• Security risks and outdated dependencies</li>
              <li>• Hard to add new features</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What We Migrate
            </h2>

            <ul className="space-y-4 text-foreground/70">
              <li>• Monolith → Microservices</li>
              <li>• On-premise → Cloud (AWS / GCP / Azure)</li>
              <li>• Old PHP / Java → Modern Node / React / Go</li>
              <li>• SQL Server / MySQL → Scalable DB Architecture</li>
              <li>• Legacy UI → Modern UX</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Migration Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {[
            {
              title: "Audit",
              desc: "We analyze code, database, infra, and business workflows."
            },
            {
              title: "Plan",
              desc: "We design migration roadmap with zero-downtime strategy."
            },
            {
              title: "Migrate",
              desc: "Data migration, API rebuild, UI modernization."
            },
            {
              title: "Optimize",
              desc: "Performance tuning, monitoring, scaling setup."
            },
          ].map((step, i) => (
            <div key={i} className="p-8 rounded-xl border bg-card/30">
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-24 bg-card/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {[
            "⚡ Faster performance",
            "🔒 Better security",
            "📈 Easy scaling",
            "💰 Lower infra cost",
            "🚀 Faster feature delivery",
            "🧑‍💻 Developer-friendly codebase",
          ].map((b, i) => (
            <div key={i} className="p-6 rounded-xl border bg-background">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Still Running on Legacy Code?
        </h2>

        <p className="text-lg text-foreground/70 mb-10">
          Let’s analyze your system and create a safe migration plan.
        </p>

        <Link
          href="/contact"
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold"
        >
          Talk to an Engineer
        </Link>
      </section>

      <Footer />
    </main>
  )
}
