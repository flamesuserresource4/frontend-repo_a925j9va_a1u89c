import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Stars } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_600px_at_10%_10%,rgba(56,189,248,0.2),transparent)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white/80 backdrop-blur pointer-events-auto">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Live Beta • Experience the future of work
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Build, launch, and scale with obsessive precision
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            A hyper-flexible platform for teams who demand speed, elegance, and deep customization. Motion-first. AI-native. Enterprise-ready.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 pointer-events-auto">
            <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-black shadow-lg shadow-fuchsia-500/20">
              Start free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10">
              Explore features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            {["Ultra-smooth", "Realtime", "Secure", "Modular"].map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
