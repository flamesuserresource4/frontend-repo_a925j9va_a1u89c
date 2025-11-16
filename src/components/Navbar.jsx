import { useState } from 'react'
import { Menu, X, Sparkles, Search, Settings, ChevronDown, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const toggle = () => setOpen(v => !v)
  const toggleTheme = () => setDark(v => !v)

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${dark ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-xl border-b border-white/10`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur opacity-60" />
              <div className="relative px-3 py-1 rounded-xl bg-black text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-semibold tracking-wide">NovaSaaS</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <div className="group relative">
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full mt-2 hidden group-hover:block min-w-[220px] p-2 bg-black/80 border border-white/10 rounded-xl backdrop-blur-xl">
                <a className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5" href="#">Docs</a>
                <a className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5" href="#">Changelog</a>
                <a className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5" href="#">Community</a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                placeholder="Search"
                className="pl-9 pr-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold">Get Started</button>
          </div>

          <button onClick={toggle} className="md:hidden p-2 rounded-lg bg-white/10 text-white border border-white/10">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden pb-6 space-y-3">
            <a href="#features" className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5">Features</a>
            <a href="#solutions" className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5">Solutions</a>
            <a href="#pricing" className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5">Pricing</a>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
