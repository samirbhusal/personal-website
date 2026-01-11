import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Hello, I'm <span>Samir Bhusal</span> 👋
      </h1>
      <h3 className="hero-subtitle">
        SDET & QA Automation Engineer || React & AI Enthusiast
      </h3>
      <p>
        QA Automation Engineer with hands-on experience improving the quality of
        U.S. healthcare platforms including{" "}
        <strong>Higi Smart Health Stations</strong> and
        <strong> InStride Health</strong>. I build scalable, high-coverage
        automation frameworks that support fast release cycles, reduce
        production bugs, and maintain healthcare-grade reliability.
      </p>

      <NavLink to="/projects" className="btn-primary">
        View My Work
      </NavLink>
    </section>
  );
}
