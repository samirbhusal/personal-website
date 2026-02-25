import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import '../styles/Footer.css'

const socials = [
  { icon: <FiGithub size={20} />,   href: 'https://github.com/samirbhusal',                 label: 'GitHub' },
  { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/samirbhusal',             label: 'LinkedIn' },
  { icon: <FiMail size={20} />,     href: 'mailto:samir.masterprep@gmail.com',               label: 'Email' },
]

const navLinks = ['about','skills','projects','experience','certifications','contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <Link to="hero" smooth duration={700} className="nav-logo footer-logo">
            <span className="logo-bracket">&lt;</span>SB<span className="logo-bracket">/&gt;</span>
          </Link>
          <nav className="footer-links">
            {navLinks.map(l => (
              <Link key={l} to={l} smooth duration={600} offset={-70} className="footer-link">
                {l === 'certifications' ? 'Education' : l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2026 Samir Bhusal · <a href="https://www.bhusalsamir.com.np" target="_blank" rel="noreferrer" className="footer-site-link">bhusalsamir.com.np</a></p>
          <p className="footer-quote">"Quality is not an act, it is a habit."</p>
        </div>
      </div>
    </footer>
  )
}
