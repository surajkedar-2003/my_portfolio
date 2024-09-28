import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shapes from './components/Shapes.jsx';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Shapes />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;

