import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import Shapes from './components/Shapes.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;

