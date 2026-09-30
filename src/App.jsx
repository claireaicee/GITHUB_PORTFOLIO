import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    name: "My ATM Application",
    description:
      "A simple ATM simulation that accepts and processes a client's withdrawal, deposit, and balance inquiry.",
    tech: "JavaScript, HTML/CSS",
    link: "https://github.com/claireaicee/MyAtmApplication.git",
  },
  {
    name: "Product Inventory System",
    description:
      "A management system that manages products, including adding products and tracking inventory.",
    tech: "PHP and MySQL",
    link: "https://github.com/claireaicee/Product-Inventory-System.git",
  },
  {
    name: "Tenant Management System",
    description:
      "A system for estate tenants and administrators. This project is a collaboration with my groupmates.",
    tech: "JavaScript, Blade, CSS, PHP and MySQL",
    link: "https://github.com/JESSIEWANTSLEARN/Tenant-Crud-Operation.git",
  },
  {
    name: "Task Manager Using React and Laravel",
    description:
      "A management system that manages tasks.",
    tech: "JavaScript, Blade, CSS, PHP and MySQL",
    link: "https://github.com/claireaicee/Task-Manager-using-React-and-Laravel.git",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Home">
          &lt;dev /&gt;
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">DEVELOPER PORTFOLIO</p>
            <h1>
              Hi, I’m <span>Aicee Claire V. Villarete.</span>.
              <br />
              I build things for the web.
            </h1>
            <p className="hero-description">
              A developer focused on building clean, useful, and practical
              digital experiences. Explore some of my work below.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a
                className="button secondary"
                href="https://github.com/claireaicee"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-orb" aria-hidden="true">
            <div className="orb-inner">&lt;/&gt;</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="section-label">01 — ABOUT</p>
            <h2>A little about me.</h2>
          </div>
          <p className="about-text">
            I’m a junior computer science student at Pamantasan ng Cabuyao who enjoys turning ideas into functional software.
            This portfolio highlights selected projects from my GitHub and the
            technologies I use to build them.
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-label">02 — PROJECTS</p>
              <h2>Selected work.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/claireaicee"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">03 — CONTACT</p>
          <h2>Let’s connect.</h2>
          <p>
            Want to see more of my work or get in touch? Find me on GitHub.
          </p>

          <div className="socials">
            <a
              className="social-link"
              href="https://github.com/claireaicee"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} /> GitHub.
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Aicee Claire</span>
        <span>Built with React & Vite</span>
      </footer>
    </div>
  );
}

export default App;
