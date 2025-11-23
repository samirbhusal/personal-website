export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <p className="contact-intro">
        I'm currently open to roles in <strong>Software Engineering: </strong>
        <strong>QA Engineer</strong> and <strong>Front End Developer</strong>.
        Whether you have an opportunity, a collaboration idea, or just want to
        say hi — I’d love to talk!
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <a href="mailto:samir.masterprep@gmail.com">Email Me</a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <a
            href="https://linkedin.com/in/samirbhusal"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">🐙</span>
          <a
            href="https://github.comhttps://github.com/samirbhusal"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Portfolio
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">📄</span>
          <a
            href="/Samir-Bhusal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
