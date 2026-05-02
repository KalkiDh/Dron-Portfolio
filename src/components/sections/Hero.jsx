import { motion } from 'framer-motion'
import { ArrowRight, Mail, Download, CodeXml } from 'lucide-react'

// Background image from Stitch design
const BG_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDwYHJRHUFYQo2W_aCTWHh_9LPiO9gwwWRLzpWY-t95hfq2cmdSpEV5N9sCIoI34n9FSWZ4xw_wio5fF8FLWhkwF4drmADFRw_1Qf6LWKedUYcMlspCYPuO2FtOMbIP3fO1YzBd3hX7DX00SvF4VCLp53JMW7AJPx3YGtjKjtrj1Di-IoswOjp1FP5bTMuIWhD1ZCJ45ouw2YQl8eCiVl96Mm2T15UIvCmAmJYNpZB7ZIjlOSgl2VyLc6tEHXuyRcxfFXemyO_1jtE'

const PROFILE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDJDW6VqPGdD_nLgk-kMUfr6-UZDu4iFmMWz-cBRsecAbUKiagRtJKmcBCeCPRj0_hTtR6wztCt4Esd2BpRipDQU5elvIV8giRvJHkaxx_kC-_eVrTtygRN3Eiu227ZIhthzzaKs4srLZLjPK7j4fwFytFFu8KLTmgtNjhLpQyTdHjhsQvXQfBMlYwq9QveAF7n50XfGorubbaEBUlAvmUv9ow4Hw7gV6sppUpw4F9y6a40awN-fhLjE5EJAMy3mB2rntaa9kCnpr0'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center border-b border-white/5 overflow-hidden">

      {/* ── Background layer ─────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMG}
          alt="Tech Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <div className="absolute inset-0 scanline opacity-5" />
      </div>

      {/* ── Ambient glow ─────────────────────────── */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* ── Content grid ─────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-24 pb-16">

        {/* Left column */}
        <motion.div
          className="col-span-1 lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-10 flex items-center space-x-2">
            <span className="font-grotesk text-[11px] tracking-[0.15em] uppercase text-blue-400">
              STATUS: ONLINE
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-grotesk font-bold text-[clamp(48px,7vw,80px)] leading-[1.05] tracking-[-0.04em] text-white mb-4 relative"
          >
            Dron Haritwal
            <span className="absolute -top-5 -right-6 text-blue-400/40">
              <CodeXml size={32} />
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="font-grotesk text-[clamp(18px,2.5vw,26px)] font-medium leading-[1.3] text-zinc-400 max-w-xl mb-10 border-l-2 border-blue-500 pl-4"
          >
            Computer Science (Data Science) Undergraduate building scalable software systems, LLM-based applications and RAG pipelines. Experienced in FastAPI, React, and Python.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="glow-button font-grotesk text-[11px] tracking-[0.12em] uppercase text-blue-400 px-8 py-4 flex items-center space-x-2"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="font-grotesk text-[11px] tracking-[0.12em] uppercase bg-blue-600 text-white px-8 py-4 flex items-center space-x-2 hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(0,112,243,0.35)] hover:shadow-[0_0_28px_rgba(0,112,243,0.55)]"
            >
              <span>CONTACT ME</span>
              <Mail size={14} />
            </a>
            <a
              href="https://drive.google.com/file/d/1pAGglho-eRerGZ21WHolDorr-qkY4z4E/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button font-grotesk text-[11px] tracking-[0.12em] uppercase text-zinc-400 px-8 py-4 flex items-center space-x-2 border-zinc-700 hover:border-blue-500"
            >
              <span>DOWNLOAD RESUME</span>
              <Download size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — profile card */}
        <motion.div
          className="col-span-1 lg:col-span-5 hidden lg:flex justify-end relative group"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow halo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 rounded-xl blur-2xl opacity-15 group-hover:opacity-30 transition duration-1000" />

          {/* Card */}
          <div className="relative rounded-xl border border-white/10 w-[380px] h-[480px] overflow-hidden glass-panel">
            <img
              src={PROFILE_IMG}
              alt="Tech Abstract Profile"
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 scanline opacity-15 mix-blend-overlay pointer-events-none" />

            {/* Reticle corners */}
            <div className="reticle-tl" />
            <div className="reticle-tr" />
            <div className="reticle-bl" />
            <div className="reticle-br" />

            {/* Coordinate badge */}
            <div className="absolute bottom-4 left-4 font-grotesk text-[9px] tracking-widest uppercase text-blue-400/50">
              ONTARIO TECH UNIV // REMOTE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sys-ready watermark */}
      <div className="absolute bottom-8 right-8 font-grotesk text-xs text-zinc-700 tracking-widest hidden md:block">
        SYS.READY // v1.0.42
      </div>
    </section>
  )
}
