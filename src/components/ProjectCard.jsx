import React from "react";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <p className="project-number">PROJECT</p>

        <h3>{project.name}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-bottom">
          <span className="project-tech">
            {project.tech}
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View ${project.name} on GitHub`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;