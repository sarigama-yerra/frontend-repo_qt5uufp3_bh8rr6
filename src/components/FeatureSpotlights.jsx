function Spotlight({ title, desc, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-6">{desc}</p>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 min-h-[200px]">
          {children}
        </div>
      </div>
    </div>
  )
}

function FeatureSpotlights() {
  return (
    <section className="bg-[#0E1A2B] py-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Spotlight title="Difference Finder" desc="Side-by-side comparison reveals what changed between estimates.">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-white/5 border border-white/10 rounded-lg" />
            <div className="h-40 bg-white/5 border border-white/10 rounded-lg" />
          </div>
        </Spotlight>
        <Spotlight title="Claim Summary" desc="Summaries, missing items, and suggested improvements in one place.">
          <div className="h-40 bg-gradient-to-r from-blue-500/20 to-blue-300/10 rounded-lg border border-white/10" />
        </Spotlight>
        <Spotlight title="Manual Review Tool" desc="Room navigation, item editor, RCV calculations, and depreciation fields.">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <div className="h-8 bg-white/5 rounded" />
              <div className="h-8 bg-white/5 rounded" />
              <div className="h-8 bg-white/5 rounded" />
            </div>
            <div className="col-span-2 space-y-2">
              <div className="h-24 bg-white/5 rounded" />
              <div className="h-8 bg-white/5 rounded" />
              <div className="h-8 bg-white/5 rounded" />
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  )
}

export default FeatureSpotlights
