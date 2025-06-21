import { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'professional', label: 'Professional Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections) {
        const el = document.getElementById(section.id);
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`nav-link ${active === section.id ? 'active' : ''}`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}