'use client'

import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"
import animationData from "@/components/lottie/main.json"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground min-h-[650px]">

      {/* Lottie Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none flex items-center justify-center bg-background">
        <div className="w-full max-w-[1200px] h-[500px] md:h-[650px]">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
            className="opacity-25"
          />
        </div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="px-6 py-28 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-black sm:text-6xl lg:text-7xl leading-tight tracking-tight">
          Custom Software Built <br />
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Around Your Business
          </span>
        </h1>

        <p className="mt-8 text-xl text-foreground/75 leading-relaxed">
          We design and build web apps, mobile apps, backend systems,
          and automation tools for startups and businesses worldwide —
          working like your in-house engineering team.
        </p>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <a
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/30 hover:scale-105 transition-all"
          >
            Start Your Project <ArrowRight size={18} />
          </a>

          <a
            href="#projects"
            className="px-8 py-4 border border-border rounded-full font-bold hover:bg-card/50 transition-all"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
          <span>✔ Global Clients</span>
          <span>✔ Custom Software Specialists</span>
          <span>✔ Long-term Support</span>
        </div>
      </div>
    </section>
  )
}
