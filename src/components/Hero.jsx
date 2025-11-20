import { useEffect, useRef } from 'react'

function HexGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" width="28" height="24" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
            <path d="M14 0l14 8v8l-14 8L0 16V8z" fill="none" stroke="url(#g)" strokeWidth="0.6" />
          </pattern>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1F5EFF" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  )
}

function ParallaxMockup() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const rx = (e.clientY - innerHeight / 2) / innerHeight
      const ry = (e.clientX - innerWidth / 2) / innerWidth
      el.style.transform = `rotateX(${rx * -6}deg) rotateY(${ry * 6}deg)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative">
      <div ref={ref} className="transition-transform duration-200 will-change-transform">
        <div className="relative w-[520px] max-w-full">
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl shadow-blue-900/40">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-300/10 p-4 border-b border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="ml-2 text-xs text-slate-300">ClaimTime – Dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-12 gap-4">
              <div className="col-span-4 space-y-3">
                <div className="h-10 rounded-md bg-white/5 border border-white/10"></div>
                <div className="h-10 rounded-md bg-white/5 border border-white/10"></div>
                <div className="h-10 rounded-md bg-white/5 border border-white/10"></div>
                <div className="h-10 rounded-md bg-white/5 border border-white/10"></div>
              </div>
              <div className="col-span-8 space-y-3">
                <div className="h-40 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-400/20 border border-white/10"></div>
                <div className="h-20 rounded-md bg-white/5 border border-white/10"></div>
                <div className="h-20 rounded-md bg-white/5 border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A2B] via-[#0b1422] to-[#0E1A2B]" />
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-700/30 via-blue-500/10 to-blue-900/10 blur-3xl rounded-full" />
      <HexGrid />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              The Fastest Way to Analyze, Improve, and Prepare Insurance Claims.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              ClaimTime helps public adjusters, contractors, and mitigation teams find missing items, increase payouts, and save hours of manual work — automatically.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="px-6 py-3 rounded-lg bg-[#1F5EFF] hover:bg-[#3B82F6] text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors">Start for $19.99</a>
              <a href="#demo" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Watch Demo</a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-slate-300/80">
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Trusted by Adjusters Nationwide</div>
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Built for Accuracy & Speed</div>
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5">24/7 Automated Analysis</div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ParallaxMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
