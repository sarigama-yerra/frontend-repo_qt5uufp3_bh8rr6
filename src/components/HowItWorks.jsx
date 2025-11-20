function Step({ number, title, desc }) {
  return (
    <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-semibold shadow-lg shadow-blue-600/30">{number}</div>
      <h3 className="text-white font-semibold text-lg mb-2 ml-8">{title}</h3>
      <p className="text-slate-300/90 ml-8">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section className="relative bg-[#0E1A2B] py-20" id="how">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How ClaimTime Works</h2>
          <p className="mt-3 text-slate-300/90">Clean steps that deliver fast results</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step number={1} title="Upload Claim & Photos" desc="Drag & drop PDF, ESX, or images." />
          <Step number={2} title="Analysis Begins" desc="Missing line items, price inconsistencies, and O&P issues are detected." />
          <Step number={3} title="Review & Fix" desc="Use simple toggles and transparent explanations." />
          <Step number={4} title="Export Improved Estimate" desc="Download or share instantly." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
