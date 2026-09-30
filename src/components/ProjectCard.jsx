import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  if (!project) {
    return null;
  }

  return (
    <article className="project-card">

      {/* Top */}
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


      {/* Project Information */}
      <div className="project-content">

        <h3 className="repo-name">
          {project.name}
        </h3>

        <p className="repo-description">
          {project.description}
        </p>

      </div>


      {/* Technologies */}
      <div className="tech-row">

        <span className="language-dot"></span>

        <span>
          {project.tech}
        </span>

      </div>


      {/* GitHub Link */}
      <a
        className="github-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        View repository
        <ArrowUpRight size={15} />
      </a>

    </article>
  );
}

export default ProjectCard;