import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navbar.css'

const navLinks = [
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'experience',     label: 'Experience' },
  { id: 'certifications', label: 'Education' },
  { id: 'contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="nav-logo">
          <span className="logo-bracket">&lt;</span>SB<span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth
                duration={600}
                offset={-70}
                spy
                onSetActive={() => setActive(link.id)}
                className={`nav-link ${active === link.id ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/samir-bhusal-resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary nav-resume-btn">
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={600}
                offset={-70}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="/samir-bhusal-resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
