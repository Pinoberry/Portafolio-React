import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { IconType } from 'react-icons';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiBootstrap,
  SiAngular,
  SiGit,
  SiGithub,
  SiDjango,
  SiPython,
  SiNodedotjs,
  SiJquery
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const Skills = () => {
  const { theme } = useTheme();

  const skills: Skill[] = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap 5', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' }
  ];

  return (
    <section id="skills" className={`py-12 md:py-20 ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="font-mono block text-base md:text-lg lg:text-xl mb-2 opacity-80">$ ls skills/</span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>
            Mis Habilidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-4 sm:p-6 rounded-xl ${
                theme === 'dark' 
                  ? 'bg-dark-secondary hover:bg-dark-accent/10' 
                  : 'bg-light-secondary hover:bg-light-accent/10'
              } transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <skill.icon
                  size={36}
                  style={{ color: skill.color }}
                  className={`${theme === 'dark' ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]'}`}
                />
              </div>
              <h3 className={`text-center text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-dark-text' : 'text-light-text'}`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 