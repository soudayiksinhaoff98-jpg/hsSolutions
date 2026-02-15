import { NavigationBar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/infrastructure-map'
import { MetricsSection } from '@/components/sections/metrics'
import { SolutionTiers } from '@/components/sections/solution-tiers'
import { MigrationSection } from '@/components/sections/migration'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      
      <NavigationBar />

      {/* Each section gets its own background */}
      <section className="bg-background">
        <HeroSection />
      </section>

      <section id="projects" className="bg-background">
        <ProjectsSection />
      </section>

      <section className="bg-background">
        <MetricsSection />
      </section>

      <section className="bg-background">
        <SolutionTiers />
      </section>

      <section className="bg-background">
        <MigrationSection />
      </section>

      <Footer />
    </div>
  )
}
