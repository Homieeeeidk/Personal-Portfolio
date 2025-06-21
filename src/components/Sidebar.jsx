import { useEffect, useState } from 'react';
import './Sidebar.css';

const sections = ['intro', 'professional', 'projects', 'contact'];

const sectionLabels = {
  intro: 'Intro',
  professional: 'Professional Experience',
  projects: 'Projects',
  contact: 'Contact Me',
};

export default function Sidebar() {
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      for (let id of sections) {
        const el = document.getElementById(id);
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sidebar">
      {sections.map((id) => (
        <div key={id} className="dot-wrapper">
          <a
            href={`#${id}`}
            className={`dot ${active === id ? 'active' : ''}`}
            aria-label={id}
          />
          <span className="dot-label">{sectionLabels[id]}</span>
        </div>
      ))}
    </div>
  );
}