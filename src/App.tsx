import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Route, Routes } from 'react-router-dom'
import { BackgroundFX } from './components/BackgroundFX'
import { CursorGlow } from './components/CursorGlow'
import { LoadingScreen } from './components/LoadingScreen'
import { AboutSection } from './components/sections/AboutSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { CertificatesSection } from './components/sections/CertificatesSection'
import { EducationContactSection } from './components/sections/EducationContactSection'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { MarqueeSection } from './components/sections/MarqueeSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { StatsSection } from './components/sections/StatsSection'
import { navigation } from './constants/content'
import { Button } from './components/ui/button'
import './App.css'

function PortfolioPage() {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="min-h-screen text-slate-100">
      <BackgroundFX />
      <CursorGlow />
      <LoadingScreen />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080808]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="text-lg font-semibold tracking-[0.35em] text-slate-50">ANUJ</a>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="hidden md:inline-flex">
              Resume
            </Button>
            <button className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-100 md:hidden" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <motion.div initial={prefersReduced ? false : { opacity: 0, y: 16 }} animate={prefersReduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <HeroSection />
        </motion.div>
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificatesSection />
        <StatsSection />
        <EducationContactSection />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
    </Routes>
  )
}

export default App
