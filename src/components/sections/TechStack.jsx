import { motion } from 'framer-motion'

const stack = [
  { icon: 'devicon-python-plain',                      label: 'Python',      color: '#3776AB', glow: 'rgba(55,118,171,0.6)'   },
  { icon: 'devicon-javascript-plain',                  label: 'JavaScript',  color: '#F7DF1E', glow: 'rgba(247,223,30,0.6)'   },
  { icon: 'devicon-java-plain',                        label: 'Java',        color: '#ED8B00', glow: 'rgba(237,139,0,0.6)'    },
  { icon: 'devicon-react-original',                    label: 'React',       color: '#61DAFB', glow: 'rgba(97,218,251,0.6)'   },
  { icon: 'devicon-fastapi-plain',                     label: 'FastAPI',     color: '#009688', glow: 'rgba(0,150,136,0.6)'    },
  { icon: 'devicon-django-plain',                      label: 'Django',      color: '#092E20', glow: 'rgba(9,46,32,0.8)'      },
  { icon: 'devicon-tensorflow-original',               label: 'TensorFlow',  color: '#FF6F00', glow: 'rgba(255,111,0,0.6)'   },
  { icon: 'devicon-pytorch-original',                  label: 'PyTorch',     color: '#EE4C2C', glow: 'rgba(238,76,44,0.6)'   },
  { icon: 'devicon-amazonwebservices-plain-wordmark',  label: 'AWS',         color: '#FF9900', glow: 'rgba(255,153,0,0.6)'   },
  { icon: 'devicon-docker-plain',                      label: 'Docker',      color: '#2496ED', glow: 'rgba(36,150,237,0.6)'  },
  { icon: 'devicon-mongodb-plain',                     label: 'MongoDB',     color: '#47A248', glow: 'rgba(71,162,72,0.6)'   },
  { icon: 'devicon-postgresql-plain',                  label: 'PostgreSQL',  color: '#336791', glow: 'rgba(51,103,145,0.6)'  },
  { icon: 'devicon-git-plain',                         label: 'Git',         color: '#F05032', glow: 'rgba(240,80,50,0.6)'   },
  { icon: 'devicon-mysql-plain',                       label: 'SQL',         color: '#4479A1', glow: 'rgba(68,121,161,0.6)'  },
  { icon: 'devicon-flask-original',                    label: 'Flask',       color: '#ffffff', glow: 'rgba(255,255,255,0.4)' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden:  { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-28 relative border-t border-white/5 bg-[#0b0e15]"
    >
      {/* Scanline */}
      <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          className="flex items-center space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="material-symbols-outlined text-blue-500 text-[32px]">memory</span>
          <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
            SYS_STACK
          </h2>
        </motion.div>

        {/* Skill category labels */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { label: 'LANGUAGES',  items: 'Python · Java · JavaScript · SQL' },
            { label: 'FRAMEWORKS', items: 'FastAPI · React · Django · Flask'  },
            { label: 'AI / ML',    items: 'NLP · TensorFlow · PyTorch · Scikit-Learn' },
            { label: 'LLM / TOOLS', items: 'LangChain · LangGraph · FAISS · Docker · AWS' },
          ].map((cat) => (
            <div key={cat.label} className="terminal-inset rounded-lg px-4 py-3 border border-zinc-800/60">
              <div className="font-grotesk text-[9px] tracking-[0.2em] uppercase text-blue-400 mb-1">
                {cat.label}
              </div>
              <div className="font-inter text-[11px] text-zinc-500 leading-relaxed">
                {cat.items}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Icon grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.label}
              variants={item}
              className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden cursor-default"
            >
              {/* Hover color wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `${tech.color}08` }}
              />

              {/* Icon */}
              <i
                className={`${tech.icon} text-[44px] text-zinc-600 transition-all duration-300 z-10`}
                onMouseEnter={e => {
                  e.currentTarget.style.color  = tech.color
                  e.currentTarget.style.filter = `drop-shadow(0 0 10px ${tech.glow})`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color  = ''
                  e.currentTarget.style.filter = ''
                }}
              />

              {/* Label */}
              <span className="mt-3 font-grotesk text-[9px] text-zinc-600 tracking-widest uppercase z-10 group-hover:text-white transition-colors duration-300">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
