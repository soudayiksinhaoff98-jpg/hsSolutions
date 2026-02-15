import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-background">
      <NavigationBar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card/10 to-background px-6 py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            About <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">HS Solutions</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            Transforming global logistics through intelligent infrastructure and enterprise-grade systems
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 py-24 lg:py-32 bg-gradient-to-b from-background via-card/5 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Our Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                We're committed to building the most reliable, scalable, and secure infrastructure for global logistics operations. Our mission is to eliminate operational bottlenecks and empower enterprises to compete at scale.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Enterprise-grade reliability',
                  'Zero third-party dependencies',
                  'Real-time global infrastructure',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl p-12 overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-100" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-primary mb-4">6+</div>
                <p className="text-lg font-semibold text-foreground mb-2">Years of Excellence</p>
                <p className="text-foreground/60">Building trust with enterprises worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl text-center mb-16">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Reliability',
                description: 'Enterprise-grade uptime and performance metrics you can depend on',
              },
              {
                title: 'Innovation',
                description: 'Replacing expensive third-party APIs with custom infrastructure to reduce cost and increase control.'
              },

              {
                title: 'Partnership',
                description: 'Dedicated support and transparent communication with every client',
              },
            ].map((value, i) => (
              <div key={i} className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 lg:py-32 bg-gradient-to-r from-background via-background to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Ready to Transform Your Operations?</h2>
          <p className="mt-6 text-xl text-foreground/70">
            Join leading enterprises that trust HS Solutions for their critical infrastructure needs.
          </p>
          <button className="mt-10 group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105">
            Start Your Journey
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
