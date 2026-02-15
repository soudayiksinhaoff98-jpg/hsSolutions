import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

const benefits = [
  'Eliminate 30-40% in third-party transaction fees',
  'Reduce infrastructure complexity by 60%',
  'Achieve real-time data sync in days, not months',
  'Scale globally without vendor lock-in',
  'Access advanced features at a fraction of SaaS costs',
  'Dedicated infrastructure with 99.99% SLA',
]

export function MigrationSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background via-card/10 to-background px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left content */}
          <div>
            <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Migrate from Legacy SaaS
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-foreground/80">
              Stop paying premium prices for mediocre infrastructure. HS Solutions delivers enterprise-grade
              architecture at a fraction of SaaS costs, with full control, real-time performance, and zero
              vendor lock-in.
            </p>

            {/* Benefits list */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}


            <Link
              href="/legacy-migration"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              Start Your Migration
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Right side - Feature comparison visual */}
          <div className="space-y-6">
            {/* Legacy SaaS */}
            <div className="rounded-2xl bg-card/40 border border-border/50 p-8 hover:border-destructive/50 transition-all duration-300">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <h3 className="font-bold text-foreground text-lg">Legacy SaaS Model</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Vendor lock-in</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Hidden transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Limited customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Slow implementation (3-6 months)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Black-box infrastructure</span>
                </li>
              </ul>
            </div>

            {/* HS Solutions */}
            <div className="relative rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <h3 className="font-bold text-foreground text-lg">HS Solutions</h3>
                </div>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Complete control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Zero hidden fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Full customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Days to deploy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Transparent architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
