export default function Home() {
  return (
    <section className="space-y-6">
      <h1>Tan Wei Quan — Data & Software Intern</h1>
      <p className="max-w-2xl">
        I build data‑driven apps and models. Currently studying CS at SIM;
        available Tue/Wed/Fri for part‑time internships.
      </p>

      <div className="flex flex-wrap gap-3">
        <a href="/resume.pdf" className="btn-ghost">Resume</a>
        <a href="https://github.com/..." className="btn-ghost">GitHub</a>
        <a href="https://www.linkedin.com/in/..." className="btn-ghost">LinkedIn</a>
      </div>
      <div className="h-40 border border-white/20 rounded-2xl grid place-items-center">
  You should see particles behind this box.
</div>


      {/* Example card using our token utilities */}
      <div className="card p-6 mt-6">
        <h2>Featured Projects</h2>
        <p className="mt-2">A quick look at my recent work in data, ML, and web.</p>
      </div>
    </section>
  )
}
