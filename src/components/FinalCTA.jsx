function FinalCTA() {
  return (
    <section className="relative bg-[#0E1A2B] py-20" id="cta">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(31,94,255,0.25),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start Improving Your Claims Today.</h2>
        <p className="mt-3 text-slate-300">Join thousands of professionals who trust ClaimTime to increase accuracy and save time.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-6 py-3 rounded-lg bg-[#1F5EFF] hover:bg-[#3B82F6] text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors">Get Started</a>
          <a href="#demo" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Book a Demo</a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
