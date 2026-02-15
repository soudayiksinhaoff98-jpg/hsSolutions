import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { MapPin, Briefcase, Users } from 'lucide-react'
import Link from "next/link"

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Infrastructure Engineer',
      location: 'San Francisco, CA',
      department: 'Engineering',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      department: 'Engineering',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      location: 'New York, NY',
      department: 'Product',
      type: 'Full-time',
    },
    {
      title: 'Enterprise Sales Manager',
      location: 'Chicago, IL',
      department: 'Sales',
      type: 'Full-time',
    },
    {
      title: 'Systems Architect',
      location: 'London, UK',
      department: 'Engineering',
      type: 'Full-time',
    },
    {
      title: 'Technical Support Specialist',
      location: 'Remote',
      department: 'Support',
      type: 'Full-time',
    },
  ]

  const benefits = [
    { icon: '💰', title: 'Competitive Compensation', desc: 'Top-tier salaries and equity packages' },
    { icon: '🏥', title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage' },
    { icon: '🌍', title: 'Remote Work', desc: 'Flexible work location and hours' },
    { icon: '📚', title: 'Learning & Development', desc: 'Annual education budget and conference attendance' },
    { icon: '🚀', title: 'Career Growth', desc: 'Clear advancement paths and mentorship' },
    { icon: '⏱️', title: 'Work-Life Balance', desc: 'Generous PTO and sabbatical programs' },
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
            Join Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            Build the future of global logistics infrastructure with us
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-24 lg:py-32 bg-gradient-to-b from-background via-card/5 to-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl text-center mb-16">Why Join HS Solutions?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="mt-3 text-foreground/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl text-center mb-16">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, i) => (
              <div
                key={i}
                className="group relative rounded-xl border border-border/50 bg-gradient-to-r from-card/60 to-card/20 backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{position.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <button className="rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative px-6 py-24 lg:py-32 bg-gradient-to-r from-background via-background to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Our Culture</h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            We believe in building products that matter, with teams that care. Our culture is built on transparency, continuous learning, and collaborative problem-solving. We're not just building infrastructure—we're building the future together.
          </p>
    <Link
  href="/our-story"
  className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
>
  View Our Story
</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
