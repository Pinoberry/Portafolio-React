import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiPhoneLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
import ContactForm from './ContactForm';

interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

const Contact = () => {
  const { theme } = useTheme();

  const contactInfo: ContactInfo[] = [
    {
      icon: RiGithubLine,
      label: 'GitHub',
      value: '@Pinoberry',
      href: 'https://github.com/Pinoberry'
    },
    {
      icon: RiLinkedinLine,
      label: 'LinkedIn',
      value: '@moscardev',
      href: 'https://www.linkedin.com/in/moscardev/'
    },
    {
      icon: RiMailLine,
      label: 'Email',
      value: 'oscarjavier289@gmail.com',
      href: 'mailto:oscarjavier289@gmail.com'
    },
    {
      icon: RiPhoneLine,
      label: 'Teléfono',
      value: '+569 5418 9333',
      href: 'tel:+56954189333'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-terminal' : 'bg-editor'}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono block text-lg md:text-xl mb-2 opacity-80">$ cat contact.txt</span>
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-dark-secondary hover:bg-dark-primary border border-dark-border hover:border-dark-accent'
                      : 'bg-white hover:bg-light-secondary border border-light-border hover:border-light-accent shadow-sm'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <info.icon 
                    size={24} 
                    className={`mr-4 ${theme === 'dark' ? 'text-dark-accent' : 'text-light-accent'}`}
                  />
                  <div>
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>
                      {info.label}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact; 