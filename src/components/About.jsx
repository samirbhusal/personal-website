import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiTarget,
  FiZap,
  FiRefreshCw,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import "../styles/About.css";

const highlights = [
  {
    icon: <FiTarget size={22} />,
    title: "BDD Framework Architect",
    desc: "95% regression coverage on Higi platforms; built multi-environment Playwright-BDD framework at Bio-Techne",
  },
  {
    icon: <FiZap size={22} />,
    title: "CI/CD & Automation",
    desc: "Azure DevOps pipelines for smoke/PR and nightly regression — 30% faster release cycles",
  },
  {
    icon: <FiRefreshCw size={22} />,
    title: "Always Learning",
    desc: "MS in IS at DSU (graduating Dec 2026), expanding into AI-driven testing & Claude Code MCP skills",
  },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
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
                I'm a <strong>Software QA Engineer / SDET</strong> with ~3 years
                of experience architecting scalable BDD test automation
                frameworks for regulated healthcare and biotech platforms using{" "}
                <strong>
                  Playwright, Selenium, Appium, Java, and TypeScript
                </strong>
                .
              </p>
              <p>
                Most recently, I interned at <strong>Bio-Techne</strong> where I
                architected a multi-environment Playwright-BDD framework and
                built Azure DevOps CI/CD pipelines. I'm pursuing an{" "}
                <strong>
                  MS in Information Systems at Dakota State University
                </strong>{" "}
                (graduating Dec 2026) — actively exploring AI-driven testing and
                Claude Code MCP skills.
              </p>

              <div className="about-highlights">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="highlight-card glass-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="fp-top">
                  <div className="fp-label">
                    <span className="fp-dot" />
                    Currently Building
                  </div>
                  <div className="fp-links">
                    <a
                      href="https://github.com/samirbhusal"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a href="#projects" aria-label="See project">
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <h4 className="fp-title">
                  🎭 Playwright BDD Automation Framework
                </h4>
                <p className="fp-desc">
                  A scalable TypeScript + Playwright BDD framework with UI/API
                  testing, BrowserStack integration, and Allure reporting.
                </p>
                <div className="fp-tech">
                  {[
                    "TypeScript",
                    "Playwright",
                    "Cucumber",
                    "BrowserStack",
                    "Allure",
                  ].map((t) => (
                    <span key={t} className="tech-pill sm">
                      {t}
                    </span>
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
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="code-filename">samir.config.ts</span>
              </div>
              <pre className="code-body">
                <code>{`const engineer = {
  name: "Samir Bhusal",
  role: "Software QA Engineer | SDET | Test Automation Engineer",
  location: "United States 🇺🇸",
  education: {
    ms: "Dakota State University",
    bs: "Purbanchal University"
  },
  expertise: [
    "BDD Framework Architecture",
    "Playwright + TypeScript",
    "Selenium + Appium",
    "Azure DevOps CI/CD",
    "API & Mobile Testing"
  ],
  recentWork: [
    "Bio-Techne Software QA Automation Intern",
    "Claude Code MCP Skills",
    "RAG Chatbot"
    "Playwright-Java Test Automation Framework"
  ],
  award: "Hult Prize Winner 2020 🏆"
};`}</code>
              </pre>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
