import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { Zap, Radio, Cloud, Shield, Gauge, Database } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: 'Real-Time Dispatch',
      description: 'Ultra-low latency dispatching system with AI-powered route optimization and real-time updates',
    },
    {
      icon: Radio,
      title: 'Live Tracking',
      description: 'Sub-second location updates with predictive analytics and automated alerts',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Global CDN with edge computing capabilities and automatic failover',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption, compliance certifications, and DDoS protection',
    },
    {
      icon: Gauge,
      title: 'Performance Monitoring',
      description: 'Real-time analytics dashboard with custom alerts and predictive insights',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Scalable database solutions with automatic sharding and replication',
    },
  ]

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
            Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            Comprehensive solutions for every aspect of your logistics operations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 lg:py-32 bg-gradient-to-b from-background via-card/5 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 text-primary transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="mt-4 text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more →
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl text-center mb-16">How We Work</h2>
          <div className="grid gap-12 md:grid-cols-4">
            {[
              { step: '01', title: 'Assessment', desc: 'We analyze your current operations' },
              { step: '02', title: 'Planning', desc: 'Design a tailored solution' },
              { step: '03', title: 'Implementation', desc: 'Deploy with minimal disruption' },
              { step: '04', title: 'Optimization', desc: 'Continuous improvement & support' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-foreground/60">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-6 text-3xl text-primary/30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
