export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080808]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_80%_10%,_rgba(139,92,246,0.16),_transparent_28%),radial-gradient(circle_at_20%_80%,_rgba(6,182,212,0.16),_transparent_25%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0,_rgba(255,255,255,0)_42%)] mix-blend-screen" />
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="absolute right-[-15%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%2523n)%22 opacity=%221%22/%3E%3C/svg%3E')]" />
      <div className="particle particle-a" />
      <div className="particle particle-b" />
      <div className="particle particle-c" />
    </div>
  )
}
