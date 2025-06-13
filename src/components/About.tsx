import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: FaCode,
      title: 'Desarrollo Frontend',
      description: 'Creación de interfaces modernas y responsivas utilizando React, TypeScript y Tailwind CSS.'
    },
    {
      icon: FaLaptopCode,
      title: 'Desarrollo Backend',
      description: 'Implementación de APIs robustas y escalables con Node.js, Python y Django.'
    },
    {
      icon: FaLightbulb,
      title: 'Soluciones Creativas',
      description: 'Diseño de soluciones innovadoras que combinan funcionalidad con una excelente experiencia de usuario.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-300 ${
            theme === 'dark' ? 'text-dark-text' : 'text-light-text'
          }`}>
            <span className="font-mono block text-lg md:text-xl mb-2 opacity-80">$ cat about.txt</span>
            Sobre Mí
          </h2>
          
          <motion.div 
            className={`rounded-lg p-6 md:p-8 transition-all duration-300 ease-in-out ${
              theme === 'dark' ? 'bg-dark-secondary' : 'bg-light-secondary'
            }`}
            animate={{
              boxShadow: theme === 'dark' 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`space-y-6 text-lg transition-all duration-300 ${
                theme === 'dark' ? 'text-dark-text' : 'text-light-text'
              }`}
            >
              <p className="leading-relaxed">
                Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. 
                Mi enfoque se centra en construir aplicaciones que no solo sean funcionales, sino también 
                intuitivas y atractivas para los usuarios.
              </p>
              
              <p className="leading-relaxed">
                Con experiencia en tecnologías modernas como React, Node.js y Python, me especializo en 
                desarrollar aplicaciones web completas que combinan un frontend elegante con un backend 
                robusto y escalable.
              </p>
              
              <p className="leading-relaxed">
                Me mantengo constantemente actualizado con las últimas tendencias y mejores prácticas en 
                desarrollo web, lo que me permite ofrecer soluciones de alta calidad y adaptadas a las 
                necesidades específicas de cada proyecto.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-lg transition-all duration-300 ease-in-out ${
                    theme === 'dark' 
                      ? 'bg-dark-primary hover:bg-dark-accent/10' 
                      : 'bg-white hover:bg-light-accent/10'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    animate={{
                      color: theme === 'dark' ? '#61DAFB' : '#2563EB'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon size={32} className="mb-4" />
                  </motion.div>
                  <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
                    theme === 'dark' ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`transition-all duration-300 ${
                    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 