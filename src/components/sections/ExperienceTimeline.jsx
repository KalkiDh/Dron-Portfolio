import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'JUN 2026 – AUG 2026',
    role: 'Visiting Research Intern',
    company: 'University of Windsor',
    location: 'Windsor, Ontario, Canada',
    description:
      'Will architect digital health assistant frameworks targeting wellness and social isolation support for aging populations under the Mitacs Globalink research initiative. Will engineer specialized interaction models to translate clinical geriatric care protocols into scalable software implementations.',
    tags: ['Digital Health', 'Research', 'System Architecture'],
    icon: 'health_and_safety',
    link: 'https://drive.google.com/file/d/1LHPqsjzNfdGQ1EpdGdU_YkN4fyt_OE5M/view?usp=sharing',
    active: false,
    side: 'right',
  },
  {
    period: 'DEC 2025 – PRESENT',
    role: 'AI Product Intern',
    company: 'Ontario Tech University',
    location: 'Ontario, Canada (Remote)',
    description:
      'Architecting an AI-driven document evaluation platform. Designing scalable data pipelines to transition unstructured file formats into structured contexts for Large Language Models.',
    tags: ['LLMs', 'RAG', 'Python', 'Multithreading'],
    icon: 'biotech',
    active: true,
    side: 'left',
  },
  {
    period: 'AUG 2025 – NOV 2025',
    role: 'Full Stack Developer & AI Intern',
    company: 'SRM Institute of Science and Technology',
    location: 'Kattankulathur, India',
    description:
      'Built a full-stack analytics system using FastAPI, React, and MongoDB with RESTful APIs. Integrated an optimized RAG chatbot to enable natural language queries on datasets.',
    tags: ['FastAPI', 'React', 'MongoDB', 'RAG'],
    link: 'https://drive.google.com/file/d/1DzkJEo3QMw_ft_SoAKTQ-GPA9pKaVmCZ/view?usp=drive_link',
    active: false,
    side: 'right',
  },
  {
    period: 'MAY 2025 – JUL 2025',
    role: 'Data Science Intern',
    company: 'Odysseus Solutions Pvt. Ltd.',
    location: 'Bangalore, India',
    description:
      'Contributed to a Generative AI chatbot using modular architecture with LangChain. Improved performance through debugging and system optimization in an Agile development setup.',
    tags: ['LangChain', 'GenAI', 'Agile', 'Python'],
    link: 'https://drive.google.com/file/d/1oYn3hkmh0YLBp9TjvvMs-f_SofjBoK7Y/view?usp=drive_link',
    active: false,
    side: 'left',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="flex items-center space-x-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="material-symbols-outlined text-blue-500 text-[32px]">hub</span>
          <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
            EXPERIENCE_LOG
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-700/40" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row ${
                exp.side === 'right' ? 'md:flex-row-reverse' : ''
              } justify-between items-start md:items-center mb-24 w-full group`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline node */}
              <div
                className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-sm z-10 transition-all duration-300 group-hover:scale-150 ${
                  exp.active
                    ? 'bg-blue-500 timeline-node'
                    : 'bg-zinc-600 group-hover:bg-blue-500 group-hover:timeline-node'
                }`}
              />

              {/* Period + role (metadata side) */}
              <div
                className={`w-full md:w-[45%] pl-8 md:pl-0 mb-4 md:mb-0 ${
                  exp.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div
                  className={`font-grotesk text-[10px] tracking-[0.2em] uppercase mb-2 ${
                    exp.active ? 'text-blue-400' : 'text-zinc-500'
                  }`}
                >
                  {exp.period}
                </div>
                <h3 className="font-grotesk font-medium text-[22px] text-white mb-1 leading-tight">
                  {exp.role}
                </h3>
                <div className="font-grotesk text-sm text-zinc-500 tracking-wider">
                  {exp.company}
                </div>
                <div className="font-grotesk text-[10px] text-zinc-400 tracking-wider mt-1">
                  {exp.location}
                </div>
              </div>

              {/* Glass card (description side) */}
              <div
                className={`w-full md:w-[45%] pl-8 ${
                  exp.side === 'left' ? 'md:pl-12' : 'md:pr-12 md:pl-0'
                }`}
              >
                <div className="glass-panel p-6 rounded-lg">
                  {/* Icon badge */}
                  {exp.icon && (
                    <div className="absolute top-3 right-3 text-blue-500/25">
                      <span className="material-symbols-outlined text-[22px]">{exp.icon}</span>
                    </div>
                  )}

                  <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-4 relative z-10">
                    {exp.description}
                  </p>

                  {/* Tags & Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-grotesk tracking-wider px-2 py-1 border ${
                            exp.active
                              ? 'text-blue-400 bg-blue-500/10 border-blue-500/25'
                              : 'text-zinc-500 bg-zinc-800/50 border-zinc-700/40'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 font-grotesk text-[10px] tracking-[0.12em] uppercase text-zinc-400 hover:text-blue-400 transition-colors shrink-0"
                      >
                        <span>VIEW LETTER</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
