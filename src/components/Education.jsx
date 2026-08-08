import { motion } from 'framer-motion'
import '../styles/Education.css'

const education = [
  {
    degree: 'Master of Science, Information Systems',
    school: 'Dakota State University',
    location: 'Madison, SD',
    period: 'Aug 2025 – Dec 2026',
    current: true,
    icon: '🎓',
    highlights: [
      'Graduate Research Assistant — AI helpdesk prototype & XAI healthcare research',
      'Expanding skills in Playwright, Azure DevOps CI/CD, AI-driven testing, and Claude Code MCP',
    ],
  },
  {
    degree: 'Bachelor of Science, Computer Applications',
    school: 'Purbanchal University',
    location: 'Kathmandu, Nepal',
    period: 'Oct 2017 – Oct 2022',
    current: false,
    icon: '🏫',
    highlights: [
      'Focused on software engineering, databases, and application development',
      'Winner of Hult Prize Purbanchal University 2020 🏆',
    ],
  },
]

const achievements = [
  { icon: '🏆', title: 'Hult Prize Winner 2020', desc: 'Purbanchal University regional winner — global social entrepreneurship competition backed by the Clinton Global Initiative.' },
  { icon: '📱', title: 'Published Mobile Apps', desc: 'Two freelance React Native apps live on the Google Play Store and Apple App Store.' },
  { icon: '🏥', title: 'Healthcare QA Impact', desc: 'Maintained 90%+ pass rate and 95% regression coverage across U.S. healthcare platforms (Higi & InStride Health).' },
  { icon: '⚡', title: '30% Faster Releases', desc: 'Reduced release cycle time by 30% through BDD automation framework improvements at Deerhold Ltd.' },
]

export default function Education() {
  return (
    <section id="certifications" className="section education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// background</span>
          <h2 className="section-title">Education &amp; Achievements</h2>
        </motion.div>

        {/* Education Cards */}
        <div className="edu-grid">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="edu-top">
                <span className="edu-icon">{edu.icon}</span>
                <div className="edu-period-wrap">
                  <span className="edu-period">{edu.period}</span>
                  {edu.current && <span className="edu-current">Current</span>}
                </div>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-school-row">
                <span className="edu-school">{edu.school}</span>
                <span className="edu-location">📍 {edu.location}</span>
              </div>
              <ul className="edu-highlights">
                {edu.highlights.map((h, hi) => (
                  <li key={hi}>{h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.h3
          className="achievements-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Key Achievements
        </motion.h3>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="achievement-card glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <span className="achievement-icon">{a.icon}</span>
              <div>
                <h4 className="achievement-title">{a.title}</h4>
                <p className="achievement-desc">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
