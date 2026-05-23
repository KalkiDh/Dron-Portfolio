import { motion } from 'framer-motion'

const projects = [
  {
    id: 'srm-career',
    size: 'large',   // md:col-span-8
    icon: 'psychology',
    tags: ['NLP', 'Random Forest', 'Vector Search'],
    title: 'SRM Career Catalyst — AI Resume Analyzer',
    description:
      'Built a resume analyzer using NLP and Random Forest trained on 700+ resumes. Developed a modular recommendation engine using vector search and clustering to suggest optimal career trajectories based on market data.',
    links: [
      { label: 'READ CASE STUDY', icon: 'article', href: 'https://github.com/KalkiDh/SRM_Resume_Expert#readme', variant: 'primary' },
      { label: 'SOURCE CODE',     icon: 'code',    href: 'https://github.com/KalkiDh/SRM_Resume_Expert', variant: 'outline' },
    ],
    bgIcon: 'account_tree',
  },
  {
    id: 'rag-chatbot',
    size: 'small',   // md:col-span-4
    icon: 'smart_toy',
    tags: ['LangChain', 'Vector DB', 'YouTube API'],
    title: 'RAG YouTube Chatbot',
    description:
      'Developed a RAG pipeline using LangChain and YouTube Data API. Enabled semantic search and contextual Q&A using vector retrieval from video transcripts.',
    links: [
      { label: 'READ CASE STUDY', icon: 'article', href: 'https://github.com/KalkiDh/YtChatBot#readme', variant: 'primary' },
      { label: 'SOURCE CODE',     icon: 'code',    href: 'https://github.com/KalkiDh/YtChatBot', variant: 'outline' },
    ],
  },
  {
    id: 'shanthi-portfolio',
    size: 'small',   // md:col-span-4
    icon: 'language',
    tags: ['React', 'CSS', 'Portfolio', 'Academic'],
    title: 'Dr. Shanthi Johnson — Academic Portfolio',
    description:
      'Designed and developed a full-stack academic portfolio for Dr. Shanthi Johnson, VP Research & Innovation at the University of Windsor. Showcases her research on aging, injury prevention, and senior social isolation, along with publications and funding history.',
    links: [
      { label: 'LIVE SITE', icon: 'open_in_new', href: 'https://shanthijohnson.com/', variant: 'live' },
    ],
  },
  {
    id: 'medical-policy',
    size: 'large',   // md:col-span-8
    icon: 'local_hospital',
    tags: ['FastAPI', 'LangChain', 'Docker', 'RAG'],
    title: 'Medical Policy Assistant',
    description:
      'A document-aware AI assistant that lets users upload medical policy PDFs and ask contextual questions. Built with Python, FastAPI, and LangChain using vector embeddings for semantic search. Containerized with Docker and deployed live on Netlify.',
    links: [
      { label: 'READ CASE STUDY', icon: 'article',       href: 'https://github.com/KalkiDh/MedicalPolicyAssistant#readme', variant: 'primary' },
      { label: 'SOURCE CODE',     icon: 'code',          href: 'https://github.com/KalkiDh/MedicalPolicyAssistant',        variant: 'outline' },
      { label: 'LIVE DEMO',       icon: 'open_in_new',   href: 'https://medicalassistdron.netlify.app/',                   variant: 'live'    },
    ],
    bgIcon: 'biotech',
  },
  {
    id: 'srm-placement',
    size: 'large',   // md:col-span-8
    icon: 'dashboard',
    tags: ['FastAPI', 'React', 'MongoDB', 'RAG'],
    title: 'SRM Placement Analytics Dashboard',
    description:
      'Built a full-stack placement analytics system serving 20+ active SRM stakeholders. Features user-role-based data access, dynamic dashboard creation, and an optimized RAG chatbot for natural language queries on private placement datasets.',
    links: [],
    bgIcon: 'insights',
  },
  {
    id: 'answer-evaluation',
    size: 'small',   // md:col-span-4
    icon: 'grading',
    tags: ['Python', 'LLM', 'Evaluation'],
    title: 'AI Answer Sheet Evaluation System',
    description:
      'Developed an AI-powered answer sheet evaluation pipeline during the Ontario Tech University research internship to automate and structure complex grading tasks.',
    links: [],
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProjectCard({ project, index }) {
  const colSpan =
    project.size === 'large'
      ? 'col-span-1 md:col-span-8'
      : 'col-span-1 md:col-span-4'

  const gradientDir =
    project.size === 'large'
      ? 'bg-gradient-to-br'
      : 'bg-gradient-to-bl'

  return (
    <motion.div
      className={`glass-panel ${colSpan} rounded-xl p-8 group min-h-[400px] flex flex-col justify-between relative overflow-hidden`}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {/* Hover gradient wash */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${gradientDir} from-blue-500/5 to-transparent`}
      />

      {/* Top row: icon + tags */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30 group-hover:border-blue-500/50 transition-colors group-hover:shadow-[0_0_15px_rgba(0,112,243,0.25)]">
          <span className="material-symbols-outlined text-blue-400">{project.icon}</span>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-grotesk text-blue-400 bg-blue-500/10 px-2 py-1 border border-blue-500/25"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow justify-end">
        <h3
          className={`font-grotesk font-medium text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight ${
            project.size === 'large' ? 'text-[24px]' : 'text-[20px]'
          }`}
        >
          {project.title}
        </h3>
        <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {project.links && project.links.length > 0 ? (
            project.links.map((link) => {
              if (link.variant === 'primary') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button font-grotesk text-[10px] tracking-[0.12em] uppercase text-blue-400 px-5 py-3 flex items-center space-x-2 bg-blue-500/10"
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[13px]">{link.icon}</span>
                  </a>
                )
              }
              if (link.variant === 'live') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-grotesk text-[10px] tracking-[0.12em] uppercase text-emerald-400 px-5 py-3 flex items-center space-x-2 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_16px_rgba(16,185,129,0.3)] transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[13px]">{link.icon}</span>
                  </a>
                )
              }
              // outline (default)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button font-grotesk text-[10px] tracking-[0.12em] uppercase text-zinc-400 px-5 py-3 flex items-center space-x-2 border-zinc-700/60 hover:border-blue-500"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[13px]">{link.icon}</span>
                </a>
              )
            })
          ) : (
            <div className="flex items-center space-x-2 font-grotesk text-[10px] tracking-[0.12em] uppercase text-zinc-500 px-4 py-2.5 border border-zinc-800/50 bg-zinc-900/30 rounded">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>PRIVATE REPOSITORY</span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative ghost icon */}
      {project.bgIcon && (
        <div className="absolute right-0 bottom-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none translate-x-1/4 translate-y-1/4">
          <span className="material-symbols-outlined text-[240px]">{project.bgIcon}</span>
        </div>
      )}
    </motion.div>
  )
}


function TerminalInset() {
  return (
    <motion.div
      className="terminal-inset col-span-1 md:col-span-12 rounded-xl p-8 font-grotesk relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-[10px] text-blue-400 tracking-widest">LIVE_TERMINAL</span>
      </div>

      <div className="text-blue-400 mb-3 text-sm">$ cat current_focus.txt</div>
      <div className="text-zinc-400 pl-4 mb-4 text-sm leading-relaxed space-y-1">
        <div>&gt; Building scalable answer evaluation pipelines for LLM/RAG systems.</div>
        <div>&gt; Optimizing vector retrieval latency with FAISS and semantic chunking.</div>
        <div>&gt; Architecting fault-tolerant microservices with Docker and FastAPI.</div>
      </div>
      <div className="text-blue-400 text-sm flex items-center">
        $ <span className="cursor-blink ml-2" />
      </div>
    </motion.div>
  )
}

export default function ProjectBento() {
  return (
    <section
      id="projects"
      className="py-28 bg-night-1 border-t border-white/5 relative"
    >
      <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Header row */}
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-2">
              PORTFOLIO
            </div>
            <h2 className="font-grotesk font-semibold text-[clamp(28px,4vw,48px)] tracking-tight text-white">
              DATA_MODELS
            </h2>
          </div>
          <div className="font-grotesk text-xs text-zinc-400 tracking-wider hidden md:block">
            EXECUTE: ./view_all.sh
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <TerminalInset />
        </div>
      </div>
    </section>
  )
}
