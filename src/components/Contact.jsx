import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import "../styles/Contact.css";

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "samir.masterprep@gmail.com",
    href: "mailto:samir.masterprep@gmail.com",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/samirbhusal",
    href: "https://github.com/samirbhusal",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "in/samirbhusal",
    href: "https://linkedin.com/in/samirbhusal",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "United States 🇺🇸",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 1200);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name])
      setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  return (
    <section id="contact" className="section contact-section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// let's talk</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, or just a conversation
            about test automation.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {contactLinks.map((c, i) => (
              <div key={i} className="contact-item glass-card">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <span className="contact-label">{c.label}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="contact-value"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="contact-value">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="field-error">{errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && (
                <span className="field-error">{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend />
                </>
              )}
            </button>
            {success && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent! I'll get back to you shortly.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
