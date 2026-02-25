import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTarget, FiZap, FiRefreshCw, FiGithub, FiExternalLink } from 'react-icons/fi'
import '../styles/About.css'

const highlights = [
  {
    icon: <FiTarget size={22} />,
    title: 'BDD-First Thinker',
    desc: '95% regression coverage on Higi platforms using Behave/Cucumber frameworks',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Web & Mobile Automation',
    desc: 'Selenium + Appium expertise across Android & iOS with 80%+ coverage',
  },
  {
    icon: <FiRefreshCw size={22} />,
    title: 'Always Learning',
    desc: 'Currently pursuing MS in IS at DSU while expanding into Playwright & AI testing',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">// about me</span>
            <h2 className="section-title">The QA Mindset</h2>
          </div>
        </FadeIn>

        <div className="about-grid">
          {/* Text */}
          <FadeIn delay={0.1}>
            <div className="about-text">
              <p>
                I'm a <strong>QA Automation Engineer</strong> with 2+ years of experience designing and building
                BDD automation frameworks for web and mobile applications using <strong>Selenium, Appium, and Java</strong>.
              </p>
              <p>
                I'm currently pursuing an <strong>MS in Information Systems at Dakota State University</strong>{' '}
                while working as a Graduate Research Assistant, designing AI helpdesk prototypes and supporting
                XAI healthcare research — actively expanding into Playwright, TypeScript &amp; AI-driven testing.
              </p>

              <div className="about-highlights">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="highlight-card glass-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="highlight-icon">{h.icon}</div>
                    <div>
                      <strong>{h.title}</strong>
                      <p>{h.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Featured Project Callout */}
              <motion.div
                className="featured-project glass-card"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="fp-top">
                  <div className="fp-label">
                    <span className="fp-dot" />
                    Currently Building
                  </div>
                  <div className="fp-links">
                    <a href="https://github.com/samirbhusal" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={16} /></a>
                    <a href="#projects" aria-label="See project"><FiExternalLink size={16} /></a>
                  </div>
                </div>
                <h4 className="fp-title">🎭 Playwright BDD Automation Framework</h4>
                <p className="fp-desc">
                  A scalable TypeScript + Playwright BDD framework with UI/API testing,
                  BrowserStack integration, and Allure reporting.
                </p>
                <div className="fp-tech">
                  {['TypeScript', 'Playwright', 'Cucumber', 'BrowserStack', 'Allure'].map(t => (
                    <span key={t} className="tech-pill sm">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Code Card */}
          <FadeIn delay={0.25}>
            <div className="code-card glass-card">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                </div>
                <span className="code-filename">samir.config.ts</span>
              </div>
              <pre className="code-body"><code>{`const engineer = {
  name: "Samir Bhusal",
  role: "QA Automation Engineer",
  location: "Madison, SD 🇺🇸",
  education: {
    ms: "Dakota State University",
    bs: "Purbanchal University"
  },
  expertise: [
    "BDD Frameworks",
    "Selenium + Appium",
    "Playwright + TypeScript",
    "API & Mobile Testing"
  ],
  currentlyLearning: [
    "AI-driven testing",
    "RAG systems",
    "TypeScript / Playwright"
  ],
  award: "Hult Prize Winner 2020 🏆"
};`}</code></pre>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
