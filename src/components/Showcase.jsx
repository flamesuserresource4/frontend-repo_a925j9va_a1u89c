import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Check, XCircle } from 'lucide-react'

const data = [
  { id: 1, tag: 'analytics', title: 'Revenue Insights', score: 98 },
  { id: 2, tag: 'automation', title: 'Workflow Orchestrator', score: 95 },
  { id: 3, tag: 'security', title: 'Audit Trails', score: 92 },
  { id: 4, tag: 'analytics', title: 'Funnel Explorer', score: 96 },
  { id: 5, tag: 'automation', title: 'Playbook Builder', score: 91 },
  { id: 6, tag: 'security', title: 'Policy Studio', score: 93 },
]

const tags = ['analytics', 'automation', 'security']

export default function Showcase() {
  const [active, setActive] = useState(tags)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return data.filter((d) => active.includes(d.tag) && d.title.toLowerCase().includes(query.toLowerCase()))
  }, [active, query])

  const toggle = (t) => {
    setActive((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  const clear = () => setActive([])
  const all = () => setActive(tags)

  return (
    <section id="solutions" className="relative py-24 bg-[#07080C] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_500px_at_80%_80%,rgba(34,197,94,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">See it in action</h2>
            <p className="mt-2 text-white/70 max-w-xl">Ultra-powerful filters let you slice, dice, and focus in real time. Every card animates with buttery smooth motion.</p>
          </div>

          <div className="w-full sm:w-auto space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((t) => (
                <button key={t} onClick={() => toggle(t)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${active.includes(t) ? 'bg-white text-black border-white' : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'}`}>
                  <Filter className="w-4 h-4" />
                  {t}
                </button>
              ))}
              <button onClick={all} className="text-white/70 hover:text-white text-sm underline">Select all</button>
              <button onClick={clear} className="text-white/70 hover:text-white text-sm underline">Clear</button>
            </div>
            <div className="relative">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search modules" className="w-full sm:w-80 pl-3 pr-10 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            </div>
          </div>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">{item.tag}</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-white text-black font-bold">{item.score}</span>
                  </div>
                  <div className="mt-4 h-24 rounded-lg bg-black/60 border border-white/10" />
                  <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" /> Verified • <XCircle className="w-4 h-4 text-fuchsia-400" /> Undoable
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
