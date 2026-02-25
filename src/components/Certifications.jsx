import { motion } from 'framer-motion'
import '../styles/Certifications.css'

const certs = [
  { icon: '🏆', title: 'ISTQB Advanced Level', sub: 'Test Automation Engineer', issuer: 'ISTQB', year: '2023' },
  { icon: '🎓', title: 'Selenium Java Testing', sub: 'Professional Certification', issuer: 'Udemy', year: '2022' },
  { icon: '☁️', title: 'AWS Certified Developer', sub: 'Associate Level', issuer: 'Amazon Web Services', year: '2022' },
  { icon: '🔬', title: 'Certified Agile Tester', sub: 'Agile Testing & Quality', issuer: 'iSQI', year: '2021' },
  { icon: '⚡', title: 'Cypress Testing Masterclass', sub: 'Advanced Component Testing', issuer: 'Test Automation U', year: '2021' },
  { icon: '🐳', title: 'Docker for QA Engineers', sub: 'Containerized Test Envs', issuer: 'LinkedIn Learning', year: '2020' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certs-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// credentials</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-body">
                <h4 className="cert-title">{c.title}</h4>
                <p className="cert-sub">{c.sub}</p>
                <span className="cert-issuer">{c.issuer}</span>
              </div>
              <span className="cert-year">{c.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
