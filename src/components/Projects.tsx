import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      title: 'Calculadora',
      description: 'Una calculadora interactiva con funcionalidades básicas y diseño moderno.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/calculator.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'Color Picker',
      description: 'Herramienta para seleccionar y gestionar colores con vista previa en tiempo real.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/colorpicker.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'CRUD Básico',
      description: 'Sistema de gestión básico con operaciones CRUD completas.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/crud.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'Juego del Gato',
      description: 'Clásico juego de Tic Tac Toe con interfaz moderna.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/tictactoe.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'Sistema de Login',
      description: 'Sistema de autenticación con validación de usuarios.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/login.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'Juego de la Serpiente',
      description: 'Recreación del clásico juego Snake con controles intuitivos.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/snake.jpg',
      github: '#',
      live: '#',
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-terminal' : 'bg-editor'}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono block text-lg md:text-xl mb-2 opacity-80">$ ls projects/</span>
          Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`p-6 rounded-lg ${
                theme === 'dark'
                  ? 'bg-dark-secondary border border-dark-border'
                  : 'bg-white border border-light-border shadow-sm'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-dark-primary text-dark-text-secondary'
                        : 'bg-light-secondary text-light-text-secondary'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${
                      theme === 'dark' ? 'text-dark-accent' : 'text-light-accent'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${
                      theme === 'dark' ? 'text-dark-accent' : 'text-light-accent'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 