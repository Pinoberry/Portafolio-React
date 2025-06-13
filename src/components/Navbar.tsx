import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 py-3 px-4 sm:px-6 ${theme === 'dark' ? 'bg-dark-primary/80' : 'bg-light-primary/80'} backdrop-blur-sm`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            @MoscarDev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-sm sm:text-base ${theme === 'dark' ? 'text-dark-text hover:text-dark-accent' : 'text-light-text hover:text-light-accent'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <HiX size={24} className={theme === 'dark' ? 'text-dark-text' : 'text-light-text'} />
            ) : (
              <HiMenu size={24} className={theme === 'dark' ? 'text-dark-text' : 'text-light-text'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className={`flex flex-col space-y-4 py-4 ${theme === 'dark' ? 'bg-dark-secondary' : 'bg-light-secondary'} rounded-lg`}>
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm ${theme === 'dark' ? 'text-dark-text hover:text-dark-accent' : 'text-light-text hover:text-light-accent'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 