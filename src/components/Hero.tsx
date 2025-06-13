import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiGithubLine, RiLinkedinLine, RiTwitterLine, RiMailLine, RiFileTextLine } from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import { SiAstro, SiReact } from 'react-icons/si';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const socialLinks: SocialLink[] = [
    {
      icon: RiGithubLine,
      href: 'https://github.com/Pinoberry',
      label: 'GitHub'
    },
    {
      icon: RiLinkedinLine,
      href: 'https://www.linkedin.com/in/moscardev/',
      label: 'LinkedIn'
    },
    {
      icon: RiMailLine,
      href: 'mailto:oscarjavier289@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-terminal' : 'bg-editor'}`}>
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-dark-accent' : 'bg-light-accent'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Contenido Principal */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono block text-lg md:text-xl mb-2 opacity-80">$ whoami</span>
              Óscar González
            </motion.h1>

            <motion.h2 
              className={`text-xl md:text-2xl mb-8 ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desarrollador Full-Stack
            </motion.h2>

            <motion.p 
              className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Transformando ideas en experiencias digitales únicas
            </motion.p>

            <motion.div 
              className="flex justify-center md:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-dark-text-secondary hover:text-dark-accent' : 'text-light-text-secondary hover:text-light-accent'} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={32} />
                </motion.a>
              ))}
              <motion.a
                href="/CV-Web.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-dark-text-secondary hover:text-dark-accent' : 'text-light-text-secondary hover:text-light-accent'} transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Ver Portafolio"
              >
                <RiFileTextLine size={32} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Icono Principal */}
          <motion.div 
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className={`relative ${theme === 'dark' ? 'text-dark-accent' : 'text-light-accent'}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360]
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <SiReact size={300} className="drop-shadow-lg" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#61DAFB] via-[#764ABC] to-[#61DAFB] rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 