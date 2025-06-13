import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { theme } = useTheme();

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg ${
        theme === 'dark'
          ? 'bg-dark-secondary border border-dark-border'
          : 'bg-white border border-light-border shadow-sm'
      }`}
    >
      <div className="space-y-6">
        <div>
          <label 
            htmlFor="name" 
            className={`block mb-2 font-medium ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-dark-primary border-dark-border text-dark-text focus:border-dark-accent'
                : 'bg-light-secondary border-light-border text-light-text focus:border-light-accent'
            }`}
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className={`block mb-2 font-medium ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-dark-primary border-dark-border text-dark-text focus:border-dark-accent'
                : 'bg-light-secondary border-light-border text-light-text focus:border-light-accent'
            }`}
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className={`block mb-2 font-medium ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-dark-primary border-dark-border text-dark-text focus:border-dark-accent'
                : 'bg-light-secondary border-light-border text-light-text focus:border-light-accent'
            }`}
          ></textarea>
        </div>

        <motion.button
          type="button"
          className={`w-full px-6 py-3 rounded-md font-medium transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-dark-accent text-dark-primary hover:bg-opacity-90'
              : 'bg-light-accent text-white hover:bg-opacity-90'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enviar Mensaje
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm; 