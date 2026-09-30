import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

/* =========================================================
   PERSONAL INFORMATION
   =========================================================
   Change only these values if you want to update your
   personal information later.
========================================================= */

const profile = {
  name: "Aicee Claire V. Villarete",
  role: "Developer",
  description:
    "I build clean, practical, and user-focused applications while continuously learning and improving my development skills.",
  github: "https://github.com/claireaicee",
};

/* =========================================================
   PROJECTS
   ========================================================= */

const projects = [
  {
    name: "My ATM Application",
    description:
      "A simple ATM simulation that accepts and processes a client's withdrawal, deposit, and balance inquiry.",
    tech: "JavaScript, HTML/CSS",
    link: "https://github.com/claireaicee/MyAtmApplication",
  },

  {
    name: "Product Inventory System",
    description:
      "A management system that manages products such as adding a product and tracking the inventory of each.",
    tech: "PHP, MySQL",
    link: "https://github.com/claireaicee/Product-Inventory-System",
  },

  {
    name: "Tenant Management System",
    description:
      "A system for estate tenants and administrators. This project is a collaboration with my groupmates.",
    tech: "JavaScript, Blade, CSS, PHP, MySQL",
    link: "https://github.com/JESSIEWANTSLEARN/Tenant-Crud-Operation",
  },

  {
    name: "Task Manager Using React and Laravel",
    description:
      "A management system that manages tasks.",
    tech: "JavaScript, Blade, CSS, PHP, MySQL",
    link: "https://github.com/claireaicee/Task-Manager-using-React-and-Laravel",
  },
];

/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <div className="site-shell">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">
        <a
          className="brand"
          href="#top"
          aria-label="Go to homepage"
        >
          &lt;dev /&gt;
        </a>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>
      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main id="top">

        {/* ===================================================
            HERO SECTION
        =================================================== */}

        <section className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              DEVELOPER PORTFOLIO
            </p>

            <h1>
              Hi, I’m{" "}
              <span>
                {profile.name}
              </span>
              .
              <br />
              I build things for the web.
            </h1>

            <p className="hero-description">
              {profile.description}
            </p>

            <div className="hero-actions">

              {/* View Projects Button */}
              <a
                className="button primary"
                href="#projects"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>


              {/* GitHub Button */}
              <a
                className="button secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

            </div>

          </div>


          {/* Decorative Developer Circle */}

          <div
            className="hero-orb"
            aria-hidden="true"
          >
            <div className="orb-inner">
              &lt;/&gt;
            </div>
          </div>

        </section>


        {/* ===================================================
            ABOUT SECTION
        =================================================== */}

        <section
          id="about"
          className="section about"
        >

          <div>

            <p className="section-label">
              01 — ABOUT
            </p>

            <h2>
              A little about me.
            </h2>

          </div>


          <div className="about-content">

            <p className="about-text">
              I’m a CS student at Pamantasan ng Cabuyao who enjoys turning ideas
              into functional software. I’m interested in
              developing applications that are practical,
              organized, and easy to use.
            </p>

            <p className="about-text secondary-text">
              This portfolio highlights selected projects
              from my GitHub, including web applications,
              management systems, and projects built with
              different technologies.
            </p>

          </div>

        </section>


        {/* ===================================================
            PROJECTS SECTION
        =================================================== */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading">

            <div>

              <p className="section-label">
                02 — PROJECTS
              </p>

              <h2>
                Selected work.
              </h2>

            </div>


            {/* GitHub Link */}

            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              PROJECT GRID

              Each project is passed into ProjectCard.jsx
          ================================================= */}

          <div className="project-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}

          </div>

        </section>


        {/* ===================================================
            CONTACT SECTION
        =================================================== */}

        <section
          id="contact"
          className="section contact"
        >

          <p className="section-label">
            03 — CONTACT
          </p>

          <h2>
            Let’s connect.
          </h2>

          <p className="contact-description">
            Want to see more of my work?
            Visit my GitHub to explore my
            repositories and projects.
          </p>


          <div className="socials">

            <a
              className="social-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
              GitHub
            </a>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <span>
          © 2026 {profile.name}
        </span>

        <span>
          Built with React &amp; Vite
        </span>

      </footer>

    </div>
  );
}

export default App;