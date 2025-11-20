function FAQItem({ q, a }) {
  return (
    <details className="group p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl">+</span>
      </summary>
      <p className="mt-3 text-slate-600">{a}</p>
    </details>
  )
}

function FAQ() {
  const items = [
    { q: 'Is ClaimTime accurate?', a: 'Yes. Results are continuously validated with real claims and updated pricing data.' },
    { q: 'What types of files can I upload?', a: 'PDF, ESX, and standard image formats like JPG and PNG.' },
    { q: 'Do I need technical experience?', a: 'No. The interface is simple and built for busy professionals.' },
    { q: 'Is there a limit on photos?', a: 'Plans include generous photo limits. High-volume users can add more.' },
    { q: 'How is ClaimTime used?', a: 'Upload estimates and photos, review suggested improvements, then export and share.' },
    { q: 'Do you offer team accounts?', a: 'Yes. Pro and Enterprise include team features and permissions.' },
  ]

  return (
    <section className="bg-slate-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((it) => (
            <FAQItem key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
