import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Zap, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const WebDevelopment = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('web.services.frontend.title'),
      description: t('web.services.frontend.description'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: t('web.services.backend.title'),
      description: t('web.services.backend.description'),
      technologies: ["Java Spring Boot", "MySQL", "JWT", "REST API"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('web.services.design.title'),
      description: t('web.services.design.description'),
      technologies: ["Figma", "Tailwind CSS", "Responsive Design", "User Research"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "4+", label: t('web.stats.projects') },
    { number: "2", label: t('web.stats.fullstack') },
    { number: "10+", label: t('web.stats.technologies') },
    { number: "100%", label: t('web.stats.responsive') }
  ];

  const principles = [
    {
      icon: <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />,
      text: t('web.principles.cleanCode')
    },
    {
      icon: <Users className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />,
      text: t('web.principles.userExperience')
    },
    {
      icon: <Database className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />,
      text: t('web.principles.scalableArchitecture')
    }
  ];

  const technologies = [
    "React & TypeScript",
    "Java Spring Boot", 
    "MySQL",
    "Tailwind CSS",
    "Framer Motion",
    "Git & GitHub"
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {t('web.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t('web.subtitle')}
          </p>
          
          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Секция услуг */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {t('web.offers.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Секция проектов */}
        <Projects />

        {/* Секция навыков */}
        <Skills />

        {/* Секция процесса работы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              {t('web.approach.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  {t('web.approach.principles')}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {principles.map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {principle.icon}
                      <span>{principle.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4">
                  {t('web.approach.technologies')}
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  {technologies.map((tech, index) => (
                    <div key={index}>✅ {tech}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-400/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('web.cta.title')}
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('web.cta.description')}
            </p>
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors duration-300 inline-block"
            >
              {t('web.cta.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;