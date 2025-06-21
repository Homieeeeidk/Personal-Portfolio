import './Footer.css';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/homayoun-elyasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/Homieeeeidk"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={githubLogo} alt="GitHub" className="footer-icon" />
          GitHub
        </a>
      </div>
      <p className="footer-credit">© {new Date().getFullYear()} Homayoun Elyasi</p>
    </footer>
  );
}