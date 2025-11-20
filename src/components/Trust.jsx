function Trust() {
  return (
    <section className="bg-white" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-sm uppercase tracking-wider text-slate-500 mb-6">Trusted by leaders in restoration and claims</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {["Allstate","StateFarm","Xactimate","Symbility","Verisk","CCC"].map((name) => (
            <div key={name} className="h-12 rounded-md flex items-center justify-center bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-sm font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
