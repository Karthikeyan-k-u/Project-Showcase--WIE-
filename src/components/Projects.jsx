import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Project Showcase',
    description:
      'This very portfolio website — a curated project showcase built with React 19 and Vite 8, featuring a dark theme, gradient orbs, project filtering, live thumbnails, and a code-block hero visual.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    category: 'Web Application',
    github: 'https://github.com/Karthikeyan-k-u/Project-Showcase--WIE-',
    demo: 'https://karthikeyan-k-u.github.io/Project-Showcase--WIE-/',
    thumbnail: '/thumbnails/portfolio.png',
  },
  {
    id: 2,
    title: 'Waste Worker Route Register',
    description:
      'Offline-ready sanitation worker attendance, route coverage, and complaint tracking system built with Cloudflare Workers and IndexedDB for seamless offline functionality.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Workers'],
    category: 'Web Application',
    github: 'https://github.com/Karthikeyan-k-u/Waste-Collection-Worker-Attendance-Route-Register',
    demo: 'https://waste-worker-attendance-route-register.karthikeyan-k-u-777.workers.dev',
    thumbnail: '/thumbnails/waste-worker.png',
  },
  {
    id: 3,
    title: 'Mass Blood Bank Website',
    description:
      'A frontend web project that streamlines blood donation and requests, including pages for blood requirements, donor details, events, and contact forms.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Application',
    github: 'https://github.com/Karthikeyan-k-u/First-FrontEnd-Project-Mass-Blood-Bank-',
    demo: 'https://mass-blood-bank.pages.dev/',
    thumbnail: '/thumbnails/blood-bank.png',
  },
  {
    id: 4,
    title: 'Task Manager',
    description:
      'A responsive task manager with deadline tracking, live countdowns, overdue notifications, and localStorage persistence. Add, complete, undo, or delete tasks effortlessly.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Productivity',
    github: 'https://github.com/Karthikeyan-k-u/Task-Management-WebTechnology-Unit-1-',
    demo: 'https://karthikeyan-k-u.github.io/Task-Management-WebTechnology-Unit-1-/',
    thumbnail: '/thumbnails/task-manager.png',
  },
  {
    id: 5,
    title: 'Stopwatch Application',
    description:
      'A modern stopwatch with start/stop, reset, and lap-time features. Includes millisecond accuracy, scrollable lap history, glassmorphism styling, and a mobile-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Utility',
    github: 'https://github.com/Karthikeyan-k-u/Stop-Watch-WebTechnology-Unit-1-',
    demo: 'https://karthikeyan-k-u.github.io/Stop-Watch-WebTechnology-Unit-1-/',
    thumbnail: '/thumbnails/stopwatch.png',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const colorPalette = [
    ['#6c63ff', '#a78bfa'],
    ['#f59e0b', '#fbbf24'],
    ['#10b981', '#34d399'],
    ['#ef4444', '#f87171'],
    ['#3b82f6', '#60a5fa'],
  ];
  const colors = colorPalette[project.id % colorPalette.length];

  return (
    <article className="project-card">
      <div className="project-card__thumbnail">
        {!imageError && project.thumbnail ? (
          <img
            src={base + project.thumbnail}
            alt={`${project.title} preview`}
            className={`project-card__image ${imageLoaded ? 'project-card__image--loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="project-card__placeholder"
            style={{
              background: `linear-gradient(135deg, ${colors[0]}22, ${colors[1]}22)`,
            }}
          >
            <FiFolder
              className="project-card__placeholder-icon"
              style={{ color: colors[0] }}
            />
            <span
              className="project-card__placeholder-text"
              style={{ color: colors[0] }}
            >
              {project.category}
            </span>
          </div>
        )}
        <div className="project-card__category-badge">{project.category}</div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            className="project-card__btn project-card__btn--github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a
            className="project-card__btn project-card__btn--demo"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            <FiExternalLink />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects" aria-label="Projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">Portfolio</span>
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A selection of projects that showcase my skills in full-stack
            development, problem solving, and user-centric design.
          </p>
        </div>

        <div className="projects__filters" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter ${activeFilter === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="projects__grid-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
