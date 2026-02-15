const projects = [
 {
  title: "RideFlow Mobility Platform & Address Search Engine",
  desc: "Full-stack ride-sharing backend with live driver tracking, route optimization, and booking lifecycle management. Includes driver analytics dashboard and real-time location streaming.",
  impact: "Simulated 10k+ rides with <200ms API latency and stable realtime tracking",
  link: "https://github.com/hsSolutions-prod/rideflow"
},
{
  title: "Velto Ride Booking ",
  desc: "Built a custom geocoding and address search system using open map tiles to replace costly third-party APIs. Implemented autocomplete, reverse geocoding, and route lookup.",
  impact: "Reduced map API cost by ~90% while supporting thousands of location queries/day",
  link: "https://veltocitylink.com/"
},
{
  title: "Travel Planning WebApp",
  desc: "Full-stack travel planning platform with trip management, destination search, itinerary builder, and booking workflow integration.",
  impact: "Handled multi-user trip planning with scalable backend and responsive UI",
  link: "https://thetourister.in"
}

]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Projects Built So Far
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Real systems solving real problems. No buzzwords, just working code.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card/50 p-8 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/70 mb-4">{p.desc}</p>

              <div className="text-sm text-foreground/80 mb-4">
                🚀 {p.impact}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="text-primary text-sm font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
