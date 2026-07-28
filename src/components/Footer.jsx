import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__divider" aria-hidden="true" />

      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">K U</span>
            <p className="footer__credit">
              Designed and Developed by{' '}
              <strong className="footer__name">Karthikeyan K U</strong>
            </p>
            <p className="footer__copyright">
              <FiHeart className="footer__heart" aria-hidden="true" />
              &nbsp;&copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="footer__links">
            <a
              className="footer__link"
              href="https://github.com/Karthikeyan-k-u"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FiGithub className="footer__link-icon" />
            </a>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/karthikeyan-k-u-689858386"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="footer__link-icon" />
            </a>
            <a
              className="footer__link"
              href="mailto:karthikeyan.k.u.777@gmail.com"
              aria-label="Send Email"
            >
              <FiMail className="footer__link-icon" />
            </a>
          </div>
        </div>

        <button
          className="footer__back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          type="button"
        >
          <FiArrowUp className="footer__back-to-top-icon" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
