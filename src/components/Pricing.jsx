import { useState } from 'react'

function Toggle({ value, onChange }) {
  return (
    <button onClick={() => onChange(!value)} className="relative inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 text-slate-700">
      <span className={!value ? 'px-3 py-1 bg-white rounded-full shadow-sm' : 'px-3 py-1'}>Monthly</span>
      <span className={value ? 'px-3 py-1 bg-white rounded-full shadow-sm' : 'px-3 py-1'}>Annual</span>
    </button>
  )
}

function PriceCard({ title, price, desc, cta }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow">
      <h3 className="text-slate-900 font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-slate-600">{desc}</p>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-500 mb-1 text-sm">{title === 'Starter' ? '' : '/mo'}</span>
      </div>
      <button className="mt-6 w-full px-4 py-2 rounded-lg bg-[#1F5EFF] hover:bg-[#3B82F6] text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors">{cta}</button>
    </div>
  )
}

function Pricing() {
  const [annual, setAnnual] = useState(false)
  return (
    <section className="bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple Pricing</h2>
          <p className="mt-2 text-slate-600">Only pay for what you use.</p>
          <div className="mt-4 flex items-center justify-center">
            <Toggle value={annual} onChange={setAnnual} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard title="Starter" price="$19.99" desc="Unlocks the system + 50 credits" cta="Start for $19.99" />
          <PriceCard title="Pro" price={annual ? '$79' : '$89'} desc="For high-volume adjusters" cta="Start Pro" />
          <PriceCard title="Enterprise" price="Custom" desc="Custom workflow + team access" cta="Contact Sales" />
        </div>
      </div>
    </section>
  )
}

export default Pricing
