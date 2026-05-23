import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Plus } from 'lucide-react'

const links = [
  { label: 'GITHUB',   href: 'https://github.com/KalkiDh',              Icon: Github   },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/dronharitwal',         Icon: Linkedin },
  { label: 'EMAIL',    href: 'mailto:dronharitwal123@gmail.com',             Icon: Mail     },
]

const contactItems = [
  { icon: Mail,  text: 'dronharitwal123@gmail.com',  href: 'mailto:dronharitwal123@gmail.com'  },
  { icon: Mail,  text: 'dh4829@srmist.edu.in',       href: 'mailto:dh4829@srmist.edu.in'       },
  { icon: Phone, text: '+91 8811038321',              href: 'tel:+918811038321'                 },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-black w-full border-t border-white/5"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />

      {/* Corner crosshairs */}
      <div className="absolute top-4 left-4 text-zinc-500 pointer-events-none"><Plus size={16} /></div>
      <div className="absolute top-4 right-4 text-zinc-500 pointer-events-none"><Plus size={16} /></div>
      <div className="absolute bottom-4 left-4 text-zinc-500 pointer-events-none"><Plus size={16} /></div>
      <div className="absolute bottom-4 right-4 text-zinc-500 pointer-events-none"><Plus size={16} /></div>

      {/* Contact section */}
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left: heading */}
          <div>
            <div className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-3">
              04_CONTACT
            </div>
            <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white mb-4">
              INITIATE_CONNECTION
            </h2>
            <p className="font-inter text-sm text-zinc-500 leading-relaxed max-w-sm">
              Open to research collaborations, full-stack and AI engineering roles, and interesting conversations. Reach out via any channel below.
            </p>
          </div>

          {/* Right: contact cards + social buttons */}
          <div className="flex flex-col space-y-3">
            {contactItems.map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="glass-panel flex items-center space-x-4 px-5 py-4 rounded-lg group hover:border-blue-500 transition-all"
              >
                <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20 group-hover:border-blue-500/60 transition-colors">
                  <Icon size={14} className="text-blue-400" />
                </div>
                <span className="font-grotesk text-sm text-zinc-400 group-hover:text-white transition-colors tracking-wide">
                  {text}
                </span>
              </a>
            ))}

            {/* GitHub + LinkedIn CTA buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/KalkiDh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-5 py-4 rounded-lg font-grotesk text-[11px] tracking-[0.15em] uppercase bg-zinc-900 border border-zinc-700/60 text-zinc-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(0,112,243,0.25)] transition-all duration-300 group"
              >
                <Github size={16} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dronharitwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-5 py-4 rounded-lg font-grotesk text-[11px] tracking-[0.15em] uppercase bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(0,112,243,0.5)] transition-all duration-300 group"
              >
                <Linkedin size={16} className="text-blue-200 group-hover:text-white transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 z-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-blue-500 font-black text-xl tracking-tighter font-grotesk"
          >
            Dron Haritwal
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-grotesk text-[10px] tracking-widest uppercase text-zinc-400">
              ALL SYSTEMS OPERATIONAL
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex space-x-6"
          >
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 font-grotesk text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-500 cursor-crosshair"
              >
                <Icon size={12} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 font-grotesk text-[10px] tracking-widest uppercase text-zinc-400">
          © {new Date().getFullYear()} DRON HARITWAL // CHENNAI, TAMIL NADU // ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  )
}
