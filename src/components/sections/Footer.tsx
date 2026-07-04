export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed & Developed by Anuj Malviya</p>
        <div className="flex items-center gap-4">
          <span>{new Date().getFullYear()}</span>
          <a href="#home" className="text-slate-400 transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
