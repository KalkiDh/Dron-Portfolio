import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Database, Menu, X } from 'lucide-react'

const navLinks = [
  { label: '01_EXPERIENCE', href: '#experience' },
  { label: '02_PROJECTS',   href: '#projects'   },
  { label: '03_STACK',      href: '#stack'      },
  { label: '04_CERTS',      href: '#certifications' },
  { label: '05_CONTACT',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,112,243,0.08)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-5 max-w-[1280px] mx-auto">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-blue-500 tracking-tighter font-grotesk hover:text-blue-400 transition-colors"
        >
          Dron Haritwal
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.href);
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`font-grotesk uppercase tracking-[0.2em] text-[10px] transition-all duration-300 active:scale-95 cursor-pointer ${
                active === link.href
                  ? 'text-blue-400'
                  : 'text-zinc-500 hover:text-blue-400 hover:tracking-[0.25em]'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Icon row */}
        <div className="flex items-center space-x-2">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-500 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded"
            title="Terminal"
          >
            <Terminal size={18} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-blue-500 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded"
            title="Database"
          >
            <Database size={18} />
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-blue-500 hover:text-blue-400 transition-colors p-2"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-8 pb-6 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setTimeout(() => {
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block font-grotesk uppercase tracking-[0.2em] text-[11px] text-zinc-400 hover:text-blue-400 py-3 border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
