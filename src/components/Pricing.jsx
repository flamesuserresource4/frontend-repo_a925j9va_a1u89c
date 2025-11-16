import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For individuals exploring the platform',
    features: ['Unlimited personal projects', 'Community support', 'Basic automations'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    desc: 'For teams that need power & performance',
    features: ['Everything in Starter', 'Advanced filters', 'AI workflows', 'Priority support'],
    cta: 'Upgrade',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    desc: 'For organizations with complex needs',
    features: ['SSO & SCIM', 'Audit logs', 'Custom SLAs', 'Dedicated success'],
    cta: 'Contact sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-[#07080C] to-black">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(700px_400px_at_10%_0%,rgba(6,182,212,0.18),transparent),radial-gradient(700px_400px_at_90%_100%,rgba(168,85,247,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-bold text-white">Simple, transparent pricing</motion.h2>
          <p className="mt-3 text-white/70">Scale without surprises. Switch plans any time.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className={`relative overflow-hidden rounded-2xl border ${t.highlight ? 'border-cyan-400/40' : 'border-white/10'} bg-white/5 p-6`}> 
              {t.highlight && <div className="absolute -inset-px bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-emerald-400/10" />}
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="mt-1 text-white/70 text-sm">{t.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">{t.price}</span>
                  {t.price !== 'Let’s talk' && <span className="text-white/50">/mo</span>}
                </div>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-xl px-4 py-2.5 font-semibold ${t.highlight ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black' : 'bg-white/10 text-white border border-white/10 hover:bg-white/15'}`}>{t.cta}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
