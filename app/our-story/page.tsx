'use client'

import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <main className="bg-background text-foreground">
      <NavigationBar />

      {/* HERO */}
      <section className="relative px-6 py-28 text-center max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
          Our Story
        </h1>

        <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
          HS Solutions began with a simple belief — software should solve real
          problems, not create new ones.
        </p>
      </section>

      {/* BEGINNING */}
      <section className="px-6 py-24 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <h2 className="text-3xl font-bold">Where It Started</h2>

            <p>
              We started as engineers building small tools to fix everyday
              problems in logistics, travel platforms, and business workflows.
              Many companies were running on spreadsheets and outdated systems.
            </p>

            <p>
              Instead of selling generic products, we focused on understanding
              how businesses actually work — their data, their customers,
              their bottlenecks. Then we built software around them.
            </p>
          </div>

          <div className="rounded-2xl border bg-card/30 p-8 text-center">
            <p className="text-lg italic text-foreground/70">
              “Good software disappears into the workflow.
              It works quietly while businesses grow.”
            </p>
          </div>

        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section className="px-6 py-28 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Growing Through Real Projects
        </h2>

        <div className="space-y-10 border-l border-border pl-6">
          <div>
            <h3 className="font-semibold text-primary">First Projects</h3>
            <p className="text-foreground/70">
              Ride-sharing backends, travel platforms, and automation tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Scaling Up</h3>
            <p className="text-foreground/70">
              APIs handling thousands of requests, real-time tracking systems,
              and custom SaaS platforms for global clients.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary">What We Learned</h3>
            <p className="text-foreground/70">
              Clean architecture matters. Honest timelines matter.
              Long-term support matters.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-28 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Engineering Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Understand First",
                desc: "We study your business before writing code.",
              },
              {
                title: "Build to Last",
                desc: "Clean architecture that scales with your company.",
              },
              {
                title: "Stay as Partners",
                desc: "Long-term support, not one-time projects.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border bg-background hover:border-primary transition">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="px-6 py-28 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Looking Ahead
        </h2>

        <p className="text-lg text-foreground/70 leading-relaxed">
          Our mission is simple: help businesses modernize legacy systems,
          build scalable platforms, and create tools that empower teams worldwide.
        </p>

        <p className="mt-6 text-lg text-foreground/70">
          Technology changes fast, but good engineering values stay the same.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition"
        >
          Let’s Build Together
        </Link>
      </section>

      <Footer />
    </main>
  )
}
