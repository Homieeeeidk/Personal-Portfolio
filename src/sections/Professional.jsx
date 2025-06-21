import './Professional.css';
import amdLogo from '../assets/amd.png';
import ecccLogo from '../assets/eccc.png';
import uoftLogo from '../assets/uoft.png';
export default function Professional() {
  return (
    <div className="professional-container">
      <h2 className="section-title">Professional Experience</h2>

      {/* AMD */}
      <div className="experience-entry">
      <img src={amdLogo} alt="AMD Logo" className="experience-logo" />
        <div className="experience-content">
          <h3>
            AMD | <span className="role">Data Analyst Intern</span> &nbsp;
            <span className="tech">Python, SQL, Power BI, React.js, Flask, JIRA, JAMA</span>
          </h3>
          <p className="location">Markham, ON, Canada • Full-Time</p>
          <p className="date">January 2025 - April 2025</p>
          <ul>
            <li>Led the complete development lifecycle of the <span className="highlight">Resource Estimation Tracker</span>, a platform designed for securely managing and sharing project sizing data used by AMD’s Program Managers and executives.</li>
            <li>Developed a <span className="highlight">Power BI dashboard</span> for the Radeon Software Stack team, reducing dependency on the QA team and cutting the requirements management cycle time by <span className="highlight">50%</span>.</li>
            <li>Refactored the backend <span className="highlight">ETL script</span> using optimized data structures, achieving a runtime improvement of <span className="highlight">90%</span>.</li>
          </ul>
        </div>
      </div>

      {/* ECCC */}
      <div className="experience-entry">
        <img src={ecccLogo} alt="ECCC Logo" className="experience-logo" />
        <div className="experience-content">
          <h3>
            Environment and Climate Change Canada | <span className="role">Software Developer Intern</span> &nbsp;
            <span className="tech">Python, Excel, Figma, Jira</span>
          </h3>
          <p className="location">Toronto, ON, Canada • Full-Time</p>
          <p className="date">May 2025 - Current</p>
          <ul>
            <li>Participated in daily stand-ups and sprint planning meetings to align priorities and maintain effective team communication.</li>
            <li>Conducted user interviews and gathered feedback to inform <span className="highlight">UI/UX design</span> decisions.</li>
            <li>Built Python scripts to parse, clean, and validate <span className="highlight">climate-related data</span>, ensuring high data quality for analytics.</li>
          </ul>
        </div>
      </div>

      {/* TA */}
      <div className="experience-entry">
        <img src={uoftLogo} alt="UofT Logo" className="experience-logo" />
        <div className="experience-content">
          <h3>
            University of Toronto | <span className="role">Teaching Assistant</span> &nbsp;
            <span className="tech">Communications, Teaching, Collaboration, Problem Solving</span>
          </h3>
          <p className="date">September 2024 - December 2024</p>
          <p className="location">Toronto, ON, Canada • Full-Time</p>
          <ul>
            <li>Guided students through complex topics, enhancing mentorship and teamwork abilities.</li>
            <li>Led workshops and discussions with strong <span className="highlight">communication</span> and <span className="highlight">inclusivity</span>.</li>
            <li>Collaborated with other TAs and faculty to create and maintain consistent course materials.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}