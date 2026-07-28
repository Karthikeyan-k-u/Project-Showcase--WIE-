import { useEffect, useState } from 'react';
import { FiGithub, FiArrowDown, FiCode, FiTerminal } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg-effects" aria-hidden="true">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid-pattern" />
      </div>

      <div className={`hero__content container ${isVisible ? 'hero__content--visible' : ''}`}>
        <div className="hero__badge">
          <FiCode className="hero__badge-icon" />
          <span>Full Stack Developer</span>
        </div>

        <h1 className="hero__heading">
          Building Digital Experiences{' '}
          <span className="hero__heading-accent">Through Code</span>
        </h1>

        <p className="hero__subtitle">
          A curated collection of practical web, academic, internship, and
          hackathon projects.
        </p>

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={scrollToProjects}
            type="button"
          >
            Explore Projects
            <FiArrowDown className="btn__icon" />
          </button>
          <a
            className="btn btn--secondary"
            href="https://github.com/Karthikeyan-k-u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="btn__icon-left" />
            View GitHub
          </a>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">
                <FiTerminal className="hero__code-terminal-icon" />
                developer.js
              </span>
            </div>
            <pre className="hero__code-body">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span> = {'{'}
                {'\n'}{'  '}<span className="code-key">name</span>:{' '}
                <span className="code-string">&quot;Karthikeyan K U&quot;</span>,
                {'\n'}{'  '}<span className="code-key">passion</span>:{' '}
                <span className="code-string">&quot;Building for the web&quot;</span>,
                {'\n'}{'  '}<span className="code-key">status</span>:{' '}
                <span className="code-string">&quot;Open to opportunities&quot;</span>,
                {'\n'}{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
