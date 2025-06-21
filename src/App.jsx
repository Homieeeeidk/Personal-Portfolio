import Intro from './sections/Intro';
import Professional from './sections/Professional';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar';
import Footer from './sections/Footer';
import './styles/layout.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
     <Navbar />
      <Sidebar />
      <section id="intro"><Intro /></section>
      <section id="professional"><Professional /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer></Footer>
    </>
  );
}