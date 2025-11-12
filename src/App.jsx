import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Plane, Calendar, MapPin, Search, Menu } from 'lucide-react'

function App() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <Plane className="h-5 w-5 text-orange-400" />
              </div>
              <span className="text-lg font-semibold tracking-tight">AeroVoyage</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#destinations" className="hover:text-white transition">Destinations</a>
              <a href="#deals" className="hover:text-white transition">Deals</a>
              <a href="#experiences" className="hover:text-white transition">Experiences</a>
              <a href="#support" className="hover:text-white transition">Support</a>
              <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 transition">Sign in</button>
            </nav>
            <button className="md:hidden rounded-lg p-2 text-white/80 hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Spline cover */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        {/* Spline background */}
        <div className="absolute inset-0" aria-hidden="true">
          <Spline
            scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
            New: Interactive boarding pass experience
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Plan your next escape with style
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Discover flights, stays, and unique journeys—all in one modern, frictionless platform.
          </p>

          {/* Search card */}
          <div className="mt-10 w-full max-w-4xl">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group relative">
                  <label className="mb-1 flex items-center gap-2 text-left text-xs uppercase tracking-wide text-white/60">
                    <MapPin className="h-4 w-4 text-orange-400" /> From
                  </label>
                  <input
                    type="text"
                    placeholder="City or airport"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-3 text-sm placeholder:text-white/40 focus:border-orange-400/50 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="group relative">
                  <label className="mb-1 flex items-center gap-2 text-left text-xs uppercase tracking-wide text-white/60">
                    <MapPin className="h-4 w-4 text-orange-400" /> To
                  </label>
                  <input
                    type="text"
                    placeholder="City or airport"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-3 text-sm placeholder:text-white/40 focus:border-orange-400/50 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="group relative">
                  <label className="mb-1 flex items-center gap-2 text-left text-xs uppercase tracking-wide text-white/60">
                    <Calendar className="h-4 w-4 text-orange-400" /> Depart
                  </label>
                  <input
                    type="date"
                    defaultValue={today}
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400/50 focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="group relative">
                  <label className="mb-1 flex items-center gap-2 text-left text-xs uppercase tracking-wide text-white/60">
                    <Calendar className="h-4 w-4 text-orange-400" /> Return
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400/50 focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="text-left text-xs text-white/60">
                  Best price guarantee • Carbon offset available
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-white to-orange-200 px-5 py-3 text-sm font-semibold text-black shadow/30 transition hover:from-white hover:to-orange-300">
                  <Search className="h-4 w-4" /> Search trips
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights section */}
      <section id="experiences" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Smart itineraries',
              desc: 'Auto-organized plans that adapt in real time.',
            },
            {
              title: 'Seamless payments',
              desc: 'Pay in your currency with fintech-grade security.',
            },
            {
              title: 'Members-only deals',
              desc: 'Unlock hidden fares and exclusive upgrades.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-white/40 to-orange-300/60 p-[1px]">
                <div className="h-full w-full rounded-[10px] bg-black" />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10/5 bg-black/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} AeroVoyage. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
