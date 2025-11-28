import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;