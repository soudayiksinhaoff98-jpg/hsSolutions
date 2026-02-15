'use client'

import { metricsData } from '@/lib/constants'

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-card/10 to-background px-6 py-24 lg:py-32">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Trusted by Clients Worldwide
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" />

          <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
            We build reliable web & mobile applications for global clients and growing startups —
            working like your in-house engineering team.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl border border-border/50
                bg-gradient-to-br from-card/60 to-card/20
                p-10 text-center backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-primary/50
                hover:shadow-2xl hover:shadow-primary/20
              "
            >
              {/* glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="text-5xl font-black sm:text-6xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  {metric.number}
                </div>

                <div className="mt-4 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-20 text-center text-lg text-foreground/70">
          Small team. Big focus. Clean code, honest timelines, long-term partnerships.
        </p>

      </div>
    </section>
  )
}
