import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Link } from 'react-scroll'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import '../styles/Hero.css'

const roles = [
  'QA Automation Engineer',
  'BDD Framework Developer',
  'Selenium & Appium Expert',
  'Playwright / TypeScript Engineer',
  'API & Mobile Test Specialist',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [init, setInit] = useState(false)

  // tsparticles init
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
    setInit(true)
  }, [])

  // Typewriter
  useEffect(() => {
    const target = roles[roleIdx]
    const speed  = deleting ? 40 : charIdx === target.length ? 1800 : 80

    const timer = setTimeout(() => {
      if (!deleting && charIdx < target.length) {
        setText(target.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === target.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setText(target.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setRoleIdx(i => (i + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, charIdx, deleting, roleIdx])

  const particleOptions = {
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 55, density: { enable: true, area: 900 } },
      color: { value: ['#00d4ff', '#4361ee', '#7b2ff7'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1, sync: false } },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, color: '#4361ee', opacity: 0.15, distance: 140, width: 1 },
      move: { enable: true, speed: 0.6, random: true, outModes: 'out' },
    },
    interactivity: {
      events: {
        onHover: { enable: false }, // disabled: on mobile touch simulates hover → intercepts scroll
        resize: false,              // disabled: address bar hide/show fires resize → canvas reinit
      },
      modes: { grab: { distance: 160, links: { opacity: 0.4 } } },
    },
    detectRetina: true,
  }

  return (
    <section id="hero" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="particles-canvas"
      />
      <div className="hero-bg-gradient" />

      <div className="hero-inner container">
        {/* Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="badge-dot" />
            Open to new opportunities
          </motion.div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Samir Bhusal</span>
          </h1>

          <h2 className="hero-role">
            I'm a{' '}
            <span className="typing-wrapper">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </span>
          </h2>

          <p className="hero-desc">
            QA Automation Engineer with 2+ years building BDD frameworks for web &amp; mobile apps using
            Selenium, Appium &amp; Java. Currently pursuing an <em>MS in Information Systems</em> at Dakota State
            University — expanding into Playwright, TypeScript &amp; AI-driven testing.
          </p>

          <div className="hero-stats">
            {[
              { n: '2+',  l: 'Years Exp.' },
              { n: '95%', l: 'BDD Coverage' },
              { n: '3',   l: 'Key Projects' },
              { n: '80%+',l: 'Mobile Coverage' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-num">{s.n}</span>
                <span className="stat-label">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link to="projects" smooth duration={700} offset={-70}>
              <button className="btn btn-primary">
                View My Work <FiArrowRight />
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-70}>
              <button className="btn btn-outline">Get In Touch</button>
            </Link>
            <a href="/samir-bhusal-resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FiExternalLink /> Resume
            </a>
          </div>
        </motion.div>

        {/* Visual / Avatar */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          <div className="avatar-wrap">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="avatar-core">
              <span className="avatar-initials">SB</span>
            </div>
            {[
              { cls: 'badge-tr', text: '🧪 Selenium' },
              { cls: 'badge-bl', text: '📱 Appium' },
              { cls: 'badge-tl', text: '🎭 Playwright' },
              { cls: 'badge-br', text: '🥒 BDD/Cucumber' },
            ].map((b, i) => (
              <motion.div
                key={i}
                className={`float-badge ${b.cls}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, delay: i * 0.3 }}
              >
                {b.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </motion.div>
    </section>
  )
}
