import SmoothScroll from './components/SmoothScroll';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <main className="bg-[var(--color-bg-primary)] min-h-screen transition-colors duration-300">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
