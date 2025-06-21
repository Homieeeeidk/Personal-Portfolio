import './Projects.css';
import elevateVid from '../assets/elevate.mp4';
import donkeytypeVid from '../assets/donkeytype.mp4';
import tetrisVid from '../assets/tetris.mp4';
import mortgageVid from '../assets/mortgage.mp4';

const projects = [
  {
    title: 'Elevate',
    tech: 'Angular, Node.js, Express.js, Python, MongoDB, NLTK/spaCy',
    date: 'April 2024 – May 2025',
    video: elevateVid,
    bullets: [
      'Built Elevate, a job matching platform using AI and machine learning.',
      'Used Python (NLTK/spaCy) for NLP to improve job matching by 60%.',
      'Created REST API with Node.js/Express.js, supporting 1000+ API requests.',
      'Built responsive UI with AngularJS and Bootstrap.',
      'Managed MongoDB and integrated OAuth for secure user auth.',
    ],
  },
  {
    title: 'DonkeyType',
    tech: 'Java, JavaFX',
    date: 'September 2023 – December 2023',
    video: donkeytypeVid,
    bullets: [
      'Developed a typing speed and accuracy app with accessibility in mind.',
      'Used MVC pattern to cut 50+ hours from dev cycle.',
      'Implemented Decorator, Iterator, Observer patterns.',
      'Modeled UML diagrams to reduce cycle by 30+ hours.',
    ],
  },
  {
    title: 'Tetris Game',
    tech: 'Java, JavaFX',
    date: 'October 2022 – November 2022',
    video: tetrisVid,
    bullets: [
      'Built a JavaFX-based Tetris game using OOP principles.',
      'Designed model-view connection using abstract interfaces.',
      'Refactored code following SOLID principles.',
      'Added save/load and visual UI features.',
    ],
  },
  {
    title: 'Mortgage Loan Analyzer',
    tech: 'Python',
    date: '',
    video: mortgageVid,
    bullets: [
      'Interactive mortgage payment calculator using NumPy financial tools.',
      'Graph output using matplotlib to visualize payment plans.',
      'Includes dynamic input and payoff planning features.',
      'Helps users compare payoff timelines and interest growth.',
    ],
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <div className="video-container">
            <video src={proj.video} controls muted className="project-video" />
          </div>
          <div className="project-details">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-tech">{proj.tech}</p>
            <p className="project-date">{proj.date}</p>
            <ul>
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}