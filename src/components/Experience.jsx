import { motion } from 'framer-motion'
import '../styles/Experience.css'

const jobs = [
  {
    role: 'Graduate Research Assistant',
    company: 'Dakota State University',
    location: 'Madison, SD',
    period: 'Aug 2025 – Present',
    current: true,
    highlights: [
      'Designed an AI helpdesk assistant prototype for incident-resolution workflows',
      'Supported XAI healthcare research by maintaining literature matrix',
      'Evaluated Python analytics projects for research validation',
      'Assisted in rubric design and grading for analytics coursework',
    ],
    tech: ['Python', 'AI/ML', 'Research', 'Analytics'],
  },
  {
    role: 'Software Engineer – Quality Assurance',
    company: 'Deerhold Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Nov 2022 – Aug 2025',
    current: false,
    highlights: [
      'Maintained BDD automation framework for Higi platforms (web + mobile) with Selenium, Appium & Java — achieving 95% regression automation coverage, 90%+ pass rate, 30% reduction in release cycle time',
      'Designed BDD test automation framework for InStride Health (Android & iOS) with 80% automation coverage',
      'Executed API tests to prepare test data and preconditions for web and mobile automation execution',
      'Led QA process for legacy system rebuilds — achieving production readiness in 3 months for Wellness Portal',
      'Managed test planning, test case design, execution, defect tracking, and release documentation across platforms',
      'Collaborated in Agile ceremonies ensuring alignment with cross-functional teams for continuous improvement',
    ],
    tech: ['Selenium', 'Appium', 'Java', 'BDD/Cucumber', 'Postman', 'JIRA'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// career</span>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`timeline-dot ${job.current ? 'timeline-dot--active' : ''}`}>
                <div className="dot-inner" />
              </div>
              <div className="timeline-content glass-card">
                <div className="tl-header">
                  <div>
                    <h3 className="tl-role">{job.role}</h3>
                    <div className="tl-company-row">
                      <span className="tl-company">{job.company}</span>
                      <span className="tl-location">📍 {job.location}</span>
                    </div>
                  </div>
                  <div className="tl-period-wrap">
                    <span className="tl-period">{job.period}</span>
                    {job.current && <span className="tl-current-badge">Current</span>}
                  </div>
                </div>
                <ul className="tl-list">
                  {job.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
                <div className="tl-tech">
                  {job.tech.map((t, ti) => <span key={ti} className="tech-pill sm">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
