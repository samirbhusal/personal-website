import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Skills.css'

const categories = [
  {
    id: 'automation',
    label: 'Test Automation',
    icon: '🧪',
    skills: [
      { name: 'Selenium WebDriver', icon: '🌐', level: 'Expert',        desc: '2+ yrs — used across Higi & InStride Health projects' },
      { name: 'Appium',             icon: '📱', level: 'Expert',        desc: 'Android & iOS automation with 80%+ coverage' },
      { name: 'Playwright',         icon: '🎭', level: 'Advanced',      desc: 'TypeScript-based UI/API BDD framework' },
      { name: 'Cucumber',           icon: '🥒', level: 'Expert',        desc: 'BDD test authoring with Gherkin syntax' },
      { name: 'Behave (Python)',     icon: '🐍', level: 'Advanced',      desc: 'Python BDD framework with POM design' },
      { name: 'BDD / POM',          icon: '📐', level: 'Expert',        desc: 'Core design pattern for all automation frameworks' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Java',       icon: '☕', level: 'Advanced',      desc: 'Primary automation language at Deerhold Ltd.' },
      { name: 'Python',     icon: '🐍', level: 'Advanced',      desc: 'BDD frameworks, data analysis & AI projects' },
      { name: 'TypeScript', icon: '🔷', level: 'Intermediate',  desc: 'Playwright BDD framework & React projects' },
      { name: 'Gherkin',    icon: '📝', level: 'Expert',        desc: 'Feature file authoring for BDD test suites' },
      { name: 'SQL',        icon: '🗄️', level: 'Intermediate',  desc: 'Test data queries and DB validation' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🔧',
    skills: [
      { name: 'Postman',        icon: '📮', level: 'Advanced',      desc: 'API testing and test data preparation' },
      { name: 'BrowserStack',   icon: '☁️', level: 'Advanced',      desc: 'Cloud cross-browser/device testing integration' },
      { name: 'JIRA',           icon: '📋', level: 'Advanced',      desc: 'Defect tracking, sprint planning & release docs' },
      { name: 'Git / GitHub',   icon: '🐙', level: 'Advanced',      desc: 'Version control for all automation codebases' },
      { name: 'Allure Reports', icon: '📊', level: 'Intermediate',  desc: 'Test execution reporting for Playwright suite' },
      { name: 'LangChain',      icon: '🔗', level: 'Intermediate',  desc: 'RAG chatbot orchestration & LLM pipelines' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing Types',
    icon: '🎯',
    skills: [
      { name: 'Regression Testing', icon: '🔁', level: 'Expert',        desc: '95% automated coverage on production platforms' },
      { name: 'API Testing',        icon: '🔌', level: 'Advanced',      desc: 'REST API validation with Postman & Playwright' },
      { name: 'Smoke Testing',      icon: '💨', level: 'Expert',        desc: 'Critical path validation before each release' },
      { name: 'UAT',                icon: '✅', level: 'Advanced',      desc: 'User acceptance testing coordination' },
      { name: 'Mobile Testing',     icon: '📲', level: 'Expert',        desc: 'Android & iOS app testing via Appium + BrowserStack' },
      { name: 'Agile / Scrum',      icon: '🏃', level: 'Advanced',      desc: 'Active participant in sprint ceremonies & retrospectives' },
    ],
  },
]

const levelConfig = {
  Expert:       { color: '#06d6a0', bg: 'rgba(6,214,160,0.1)',   border: 'rgba(6,214,160,0.3)'  },
  Advanced:     { color: '#00d4ff', bg: 'rgba(0,212,255,0.1)',   border: 'rgba(0,212,255,0.3)'  },
  Intermediate: { color: '#4361ee', bg: 'rgba(67,97,238,0.12)',  border: 'rgba(67,97,238,0.35)' },
}

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false)
  const cfg = levelConfig[skill.level]

  return (
    <motion.div
      className="skill-card"
      layout
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1,    y: 0 }}
      exit={{ opacity: 0, scale: 0.85,    y: -8 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      style={{
        '--card-color':  cfg.color,
        '--card-bg':     cfg.bg,
        '--card-border': cfg.border,
      }}
    >
      <div className="sc-header">
        <span className="sc-icon">{skill.icon}</span>
        <motion.span
          className="sc-level"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: hovered ? 1 : 0.55, scale: hovered ? 1 : 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {skill.level}
        </motion.span>
      </div>
      <p className="sc-name">{skill.name}</p>
      <AnimatePresence>
        {hovered && (
          <motion.p
            className="sc-desc"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0,   height: 0, marginTop: 0 }}
            transition={{ duration: 0.2 }}
          >
            {skill.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('automation')

  const current = categories.find(c => c.id === active)

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle skills-hint">
            Hover over a skill card to see context &amp; experience
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="skill-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab ${active === cat.id ? 'skill-tab--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span>{cat.icon}</span> {cat.label}
              {active === cat.id && (
                <motion.div className="skill-tab-indicator" layoutId="skills-indicator" />
              )}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {current.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Level Legend */}
        <motion.div
          className="skill-legend"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {Object.entries(levelConfig).map(([label, cfg]) => (
            <div key={label} className="legend-item">
              <span className="legend-dot" style={{ background: cfg.color }} />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
