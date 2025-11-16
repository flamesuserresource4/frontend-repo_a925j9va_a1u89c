import { motion } from 'framer-motion'
import { Cpu, ShieldCheck, Zap, SlidersHorizontal, Layers, LineChart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Blazing performance',
    desc: 'Edge-optimized rendering with micro-interactions engineered for delight.',
    badge: '0.9s FCP',
  },
  {
    icon: SlidersHorizontal,
    title: 'Ultra-powerful filters',
    desc: 'Segment anything instantly with composable, real-time filters.',
    badge: 'Live',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SSO, audit trails, granular roles, and field-level encryption.',
    badge: 'SOC2',
  },
  {
    icon: Layers,
    title: 'Modular by design',
    desc: 'Every section is themeable, overridable, and fully componentized.',
    badge: 'Composable',
  },
  {
    icon: Cpu,
    title: 'AI-native workflows',
    desc: 'Automate the boring and amplify the brilliant with embedded AI.',
    badge: 'New',
  },
  {
    icon: LineChart,
    title: 'Observability built-in',
    desc: 'Realtime metrics, traces, and alerts. No config required.',
    badge: '99.99%',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-[#07080C] overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(700px_400px_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(700px_400px_at_80%_0%,rgba(236,72,153,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Designed for scale. Crafted for humans.
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">Every pixel and motion tuned for clarity, focus, and speed. Make it yours with deep theme controls.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur-xl" />
              <div className="relative flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-white">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-black font-bold">{f.badge}</span>
                  </div>
                  <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
