import { Brain, Camera, FileSpreadsheet, Layers } from 'lucide-react'

function Card({ icon: Icon, title, children }) {
  return (
    <div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-transform">
        <Icon size={20} />
      </div>
      <h3 className="text-slate-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </div>
  )
}

function ValueProps() {
  return (
    <section className="bg-slate-50" id="value">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to improve estimates</h2>
          <p className="mt-3 text-slate-600">Simple tools with powerful results</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card icon={Brain} title="AI Claim Analysis">
            Upload a claim and get a full summary, missing items, inconsistencies, and opportunities to increase payout.
          </Card>
          <Card icon={Layers} title="Room-Level Automation">
            ClaimTime breaks estimates by room and category for easier review.
          </Card>
          <Card icon={Camera} title="Photo AI Detection">
            Images are analyzed to identify damaged items automatically.
          </Card>
          <Card icon={FileSpreadsheet} title="Smart Export">
            Export to PDF, Excel, or share with your team.
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ValueProps
