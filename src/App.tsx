import { ThemeProvider, useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg ${
        theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
      } transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <RiSunLine className="w-5 h-5 sm:w-6 sm:h-6 text-dark-accent" />
      ) : (
        <RiMoonLine className="w-5 h-5 sm:w-6 sm:h-6 text-light-accent" />
      )}
    </motion.button>
  );
};

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${
      theme === 'dark' ? 'bg-dark-background' : 'bg-light-background'
    }`}>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ThemeToggle />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
