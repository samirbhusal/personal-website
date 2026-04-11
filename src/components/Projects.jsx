import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import '../styles/Projects.css'

const filters = ['All', 'Automation', 'AI / ML', 'Frontend', 'Mobile']

const projects = [
  {
    cat: 'Automation',
    icon: '🥒',
    title: 'Python BDD Automation Framework',
    desc: 'Scalable Python Behave + Selenium Page Object Model framework with multi-browser support and environment-driven execution configuration.',
    stats: ['Multi-browser', 'POM Design'],
    tech: ['Python', 'Behave', 'Selenium', 'POM'],
    github: 'https://github.com/samirbhusal/python-bdd-framework',
    demo: null,
  },
  {
    cat: 'Automation',
    icon: '🎭',
    title: 'Playwright BDD Automation Framework',
    desc: 'Scalable Playwright BDD framework with UI/API testing, multi-browser execution, BrowserStack cloud integration, and Allure reporting.',
    stats: ['BrowserStack Cloud', 'UI + API Testing'],
    tech: ['TypeScript', 'Playwright', 'Cucumber', 'BrowserStack', 'Allure'],
    github: 'https://github.com/samirbhusal/playwright-bdd-pom',
    demo: null,
  },
  {
    cat: 'AI / ML',
    icon: '🤖',
    title: 'Full Stack RAG Chatbot',
    desc: 'RAG chatbot for intelligent incident query resolution using internal documents. Powered by LangChain, ChromaDB vector store, and OpenAI GPT-4o.',
    stats: ['RAG Architecture', 'Incident Resolution'],
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI'],
    github: 'https://github.com/samirbhusal/fullstack-rag-app',
    demo: null,
  },
  {
    cat: 'AI / ML',
    icon: '🎨',
    title: 'Figma Design: RAG Chatbot',
    desc: 'Interactive Figma prototype showcasing an AI-powered helpdesk incident resolution system with smart animate transitions and user flow design.',
    stats: ['UX/UI Design', 'Smart Animate'],
    tech: ['Figma', 'UX Design', 'Prototyping', 'User Flows'],
    github: null,
    demo: 'https://www.figma.com/proto/DajbEdA4LrAnEgDMGMzgIb/RAG_Incident_Assistant_Wireframe_Main',
  },
  {
    cat: 'Frontend',
    icon: '🃏',
    title: 'Memory Card Game',
    desc: 'Responsive memory game built in React + TypeScript, managing async data fetching from PokéAPI via Axios interceptors and React Hooks.',
    stats: ['PokéAPI Integration', 'TypeScript'],
    tech: ['React', 'TypeScript', 'Vite', 'Axios'],
    github: 'https://github.com/samirbhusal/card-game',
    demo: 'https://samirbhusal.github.io/card-game/',
  },
  {
    cat: 'Frontend',
    icon: '📄',
    title: 'CV Builder App',
    desc: 'Dynamic single-page app for creating professional resumes through a modular, section-based interface built with React and TypeScript.',
    stats: ['Modular UI', 'SPA'],
    tech: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/samirbhusal/cv-app',
    demo: 'https://samirbhusal.github.io/cv-app/',
  },
  {
    cat: 'Mobile',
    icon: '📱',
    title: 'Meri Sangini – Mobile App',
    desc: 'Freelance React Native app for Nepal CRS Co. featuring user authentication, auto-slide carousels, and location-based shop search.',
    stats: ['React Native', 'Google Play'],
    tech: ['React Native', 'Location APIs', 'Authentication'],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.merisangini',
  },
  {
    cat: 'Mobile',
    icon: '🏢',
    title: 'GEFONT Mobile App',
    desc: 'Freelance project for GEFONT union featuring news updates, horizontal menus, and API integrations — published on the Apple App Store.',
    stats: ['App Store', 'React Native'],
    tech: ['React Native', 'REST APIs'],
    github: null,
    demo: 'https://apps.apple.com/np/app/gefont/id1622177639',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = projects.filter(p =>
    active === 'All' ? true : p.cat === active
  )

  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// my work</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="pc-top">
                  <div className="pc-icon">{p.icon}</div>
                  <div className="pc-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="pc-link" aria-label="GitHub">
                        <FiGithub size={17} />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="pc-link" aria-label="Live Demo">
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-stats">
                  {p.stats.map((s, si) => <span key={si}>✦ {s}</span>)}
                </div>
                <div className="pc-tech">
                  {p.tech.map((t, ti) => <span key={ti} className="tech-pill">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
