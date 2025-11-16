import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white/70">
          <div>
            <h4 className="text-white font-semibold">NovaSaaS</h4>
            <p className="mt-2 text-sm">A motion-first platform designed for teams who care about precision, performance, and beauty.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Product</h5>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Company</h5>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Connect</h5>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20"><Github className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} NovaSaaS. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">Made with <Heart className="w-3 h-3 text-fuchsia-400" /> for builders.</p>
        </div>
      </div>
    </footer>
  )
}
