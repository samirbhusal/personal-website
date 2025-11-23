import { projectsData } from "../data/projectData";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projectsData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              <strong>Tech Stack:</strong> {proj.tags.join(", ")}
            </p>

            <div className="project-links">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {proj.linkName ? proj.linkName : "View on GitHub"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
