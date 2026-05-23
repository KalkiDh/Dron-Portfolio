import { motion } from 'framer-motion'

const certs = [
  {
    issuer: 'AWS  ·  2025',
    title: 'AWS Certified Solutions Architect - Associate',
    matIcon: 'cloud_done',
    link: 'https://drive.google.com/file/d/1VCKlnYA9aOX1b4mKQzCzK7uhUW6Mgl6r/view?usp=sharing',
  },
  {
    issuer: 'Oracle  ·  2025',
    title: 'Generative AI Professional',
    matIcon: 'verified',
    link: 'https://drive.google.com/file/d/18IED7hHFHLyl-jhVZVxBb5N48T3zkO75/view?usp=drive_link',
  },
  {
    issuer: 'Oracle  ·  2025',
    title: 'Data Science Professional',
    matIcon: 'analytics',
    link: 'https://drive.google.com/file/d/1HMZl3UokE_vSGnSBkDt-gGoiaUGsE5az/view?usp=drive_link',
  },
  {
    issuer: 'NPTEL  ·  Certification',
    title: 'Introduction to Machine Learning',
    matIcon: 'model_training',
    link: 'https://drive.google.com/file/d/1GonmD3QsUXaNZ5ZxU1X_02TZ1OhbQ2om/view?usp=drive_link',
  },
  {
    issuer: 'NPTEL  ·  Certification',
    title: 'NPTEL Online Certification 1',
    matIcon: 'workspace_premium',
    link: 'https://drive.google.com/file/d/1XG-5ADET3eqVFbBTulBCEMMQEaMOLzwB/view?usp=drive_link',
  },
  {
    issuer: 'NPTEL  ·  Certification',
    title: 'NPTEL Online Certification 2',
    matIcon: 'workspace_premium',
    link: 'https://drive.google.com/file/d/1XbVCtTjPrji3UAEh-wsPoEyeFv5_PS06/view?usp=drive_link',
  },
]

const awards = [
  {
    position: '1ST POSITION',
    title: 'Pentathon 2.0',
    icon: 'emoji_events',
    highlight: true,
  },
  {
    position: 'FINALIST',
    title: 'I-HACK — IIT Bombay',
    icon: 'school',
    highlight: false,
  },
  {
    position: 'FINALIST',
    title: 'HackStreet 3.0',
    icon: 'code',
    highlight: false,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeLeft = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 relative border-t border-white/5 bg-black"
    >
      <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* ─── CERTIFICATIONS ─────────────────────────── */}
        <motion.div
          className="flex items-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="material-symbols-outlined text-blue-500 text-[32px]">workspace_premium</span>
          <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
            SYS_CERTS
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeLeft}
              className="glass-panel p-8 rounded-xl flex items-center space-x-6 group relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/30 group-hover:border-blue-500/50 transition-colors group-hover:shadow-[0_0_15px_rgba(0,112,243,0.25)] relative z-10 flex-shrink-0">
                <span className="material-symbols-outlined text-blue-400 text-[32px]">
                  {cert.matIcon}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <div className="font-grotesk text-[10px] tracking-widest uppercase text-blue-400 mb-1">
                  {cert.issuer}
                </div>
                <h3 className="font-grotesk font-medium text-[20px] text-white group-hover:text-blue-400 transition-colors leading-tight mb-3">
                  {cert.title}
                </h3>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 font-grotesk text-[10px] tracking-[0.12em] uppercase text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <span>VIEW CREDENTIAL</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                )}
              </div>

              <div className="reticle-tl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="reticle-br opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* ─── AWARDS ─────────────────────────────────── */}
        <motion.div
          className="flex items-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="material-symbols-outlined text-blue-500 text-[32px]">emoji_events</span>
          <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
            SYS_AWARDS
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={fadeRight}
              className={`glass-panel p-8 rounded-xl group relative overflow-hidden transition-all duration-300 ${
                award.highlight ? 'border-yellow-500/30 hover:border-yellow-400' : ''
              }`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  award.highlight ? 'bg-yellow-400/5' : 'bg-blue-500/5'
                }`}
              />

              {/* Icon */}
              <div
                className={`p-3 rounded-lg border mb-5 w-fit relative z-10 group-hover:shadow-[0_0_15px_rgba(0,112,243,0.25)] transition-all ${
                  award.highlight
                    ? 'bg-yellow-400/10 border-yellow-500/30 group-hover:border-yellow-400/60'
                    : 'bg-zinc-800/50 border-zinc-700/30 group-hover:border-blue-500/50'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[28px] ${
                    award.highlight ? 'text-yellow-400' : 'text-blue-400'
                  }`}
                >
                  {award.icon}
                </span>
              </div>

              <div className="relative z-10">
                <div
                  className={`font-grotesk text-[10px] tracking-[0.2em] uppercase mb-2 ${
                    award.highlight ? 'text-yellow-400' : 'text-blue-400'
                  }`}
                >
                  {award.position}
                </div>
                <h3
                  className={`font-grotesk font-medium text-[20px] leading-tight transition-colors ${
                    award.highlight
                      ? 'text-yellow-100 group-hover:text-yellow-300'
                      : 'text-white group-hover:text-blue-400'
                  }`}
                >
                  {award.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── EDUCATION ───────────────────────────────── */}
        <motion.div
          className="flex items-center space-x-4 mt-20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="material-symbols-outlined text-blue-500 text-[32px]">school</span>
          <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
            SYS_EDUCATION
          </h2>
        </motion.div>

        <motion.div
          className="glass-panel p-10 rounded-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
          <div className="reticle-tl" />
          <div className="reticle-tr" />
          <div className="reticle-bl" />
          <div className="reticle-br" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 gap-6">
            <div>
              <div className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-2">
                B.TECH  ·  2027 (EXPECTED)
              </div>
              <h3 className="font-grotesk font-semibold text-[24px] text-white mb-1">
                Computer Science (Data Science)
              </h3>
              <div className="font-grotesk text-sm text-zinc-500">
                SRM Institute of Science and Technology · Kattankulathur, India
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <div className="font-grotesk text-[10px] tracking-widest uppercase text-zinc-400 mb-1">CGPA</div>
              <div className="font-grotesk font-bold text-[42px] text-blue-400 leading-none">
                9.07
                <span className="text-[18px] text-zinc-400 font-normal"> / 10</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
