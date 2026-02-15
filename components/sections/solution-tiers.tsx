import { Zap, Radio, Cloud } from 'lucide-react'
import { solutionTiers } from '@/lib/constants'

const iconMap = {
  Zap: Zap,
  Radio: Radio,
  Cloud: Cloud,
}

export function SolutionTiers() {
  return (
    <section className="relative bg-gradient-to-b from-background via-card/5 to-background px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Our Core Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            Three essential pillars powering enterprise logistics operations worldwide
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {solutionTiers.map((solution, index) => {
            const Icon = iconMap[solution.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-xl p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className="mb-8 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{solution.title}</h3>

                  {/* Description */}
                  <p className="mt-4 text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{solution.description}</p>

                  {/* Learn more link */}
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
