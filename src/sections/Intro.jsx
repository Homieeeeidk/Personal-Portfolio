import './Intro.css';
import profilePic from '../assets/me.jpg'; // adjust filename as needed

export default function Intro() {
  return (
    <div className="intro-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <h1>Hi, I'm Homayoun</h1>
      <h2>Computer Science & Economics Major</h2>
      <p>University of Toronto</p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  );
}