function StarRow() {
  return (
    <div className="flex gap-1 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function Testimonial({ quote, name, role }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <StarRow />
      <p className="mt-3 text-slate-700">“{quote}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200" />
        <div>
          <p className="text-slate-900 font-medium">{name}</p>
          <p className="text-slate-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What professionals say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial quote="ClaimTime increased my estimate payouts by 30%." name="Jordan M." role="Public Adjuster" />
          <Testimonial quote="We save 4–6 hours per claim." name="Samantha R." role="Mitigation Lead" />
          <Testimonial quote="Finally a tool actually built for adjusters." name="Diego P." role="Contractor" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
