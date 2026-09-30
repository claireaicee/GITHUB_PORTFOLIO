import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <div className="repo-icon">
          <Github size={20} />
        </div>
        <a
          className="card-arrow"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <div>
        <p className="repo-name">{project.name}</p>
        <p className="repo-description">{project.description}</p>
      </div>

      <div className="tech-row">
        <span className="language-dot" />
        <span>{project.tech}</span>
      </div>

      <a
        className="github-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        View repository <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

export default ProjectCard;
