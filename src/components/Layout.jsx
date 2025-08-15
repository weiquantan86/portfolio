import { Link, NavLink, Outlet } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
        <Link to="/" className="font-semibold">TWQ</Link>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <NavLink to="/projects" className="hover:opacity-80">Projects</NavLink>
          <NavLink to="/about" className="hover:opacity-80">About</NavLink>
          <NavLink to="/contact" className="hover:opacity-80">Contact</NavLink>
          {/* Optional: theme toggle later */}
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-70">
        © {new Date().getFullYear()} Tan Wei Quan. All rights reserved.
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        {/* mx-auto centers; px adds side padding; py adds breathing room; space-y adds vertical rhythm for stacked sections */}
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-12"> 
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
