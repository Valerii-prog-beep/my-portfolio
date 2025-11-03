import React from 'react';
import { motion } from 'framer-motion';
import { Book, Briefcase, Heart, Award, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const education = [
    {
      period: t('about.education.0.period'),
      institution: t('about.education.0.institution'),
      specialty: t('about.education.0.specialty'),
      degree: t('about.education.0.degree')
    },
    {
      period: t('about.education.1.period'),
      institution: t('about.education.1.institution'),
      specialty: t('about.education.1.specialty'),
      degree: t('about.education.1.degree')
    }
  ];

  const experience = [
    {
      period: t('about.experience.0.period'),
      position: t('about.experience.0.position'),
      company: t('about.experience.0.company'),
      description: t('about.experience.0.description')
    },
    {
      period: t('about.experience.1.period'),
      position: t('about.experience.1.position'),
      company: t('about.experience.1.company'),
      description: t('about.experience.1.description')
    },
    {
      period: t('about.experience.2.period'),
      position: t('about.experience.2.position'),
      company: t('about.experience.2.company'),
      description: t('about.experience.2.description')
    },
    { 
      period: t('about.experience.3.period'),
      position: t('about.experience.3.position'),
      company: t('about.experience.3.company'),
      description: t('about.experience.3.description')
    },
    { 
      period: t('about.experience.4.period'),
      position: t('about.experience.4.position'),
      company: t('about.experience.4.company'),
      description: t('about.experience.4.description')
    },
    { 
      period: t('about.experience.5.period'),
      position: t('about.experience.5.position'),
      company: t('about.experience.5.company'),
      description: t('about.experience.5.description')
    }
  ];

  const hobbies = [
    {
      icon: "📝",
      title: t('about.hobbies.0.title'),
      description: t('about.hobbies.0.description')
    },
    {
      icon: "🎸", 
      title: t('about.hobbies.1.title'),
      description: t('about.hobbies.1.description')
    },
    {
      icon: "📷",
      title: t('about.hobbies.2.title'), 
      description: t('about.hobbies.2.description')
    },
    {
      icon: "💻",
      title: t('about.hobbies.3.title'),
      description: t('about.hobbies.3.description')
    }
  ];

  const personalInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: t('about.personalInfo.location'), value: t('about.personalInfo.locationValue') },
    { icon: <Calendar className="w-5 h-5" />, label: t('about.personalInfo.age'), value: t('about.personalInfo.ageValue') },
    { icon: <Award className="w-5 h-5" />, label: t('about.personalInfo.experience'), value: t('about.personalInfo.experienceValue') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Личная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {personalInfo.map((info, index) => (
            <div key={index} className="bg-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-600">
              <div className="text-blue-400 flex justify-center mb-3">
                {info.icon}
              </div>
              <div className="text-gray-400 text-sm mb-1">{info.label}</div>
              <div className="text-white font-semibold">{info.value}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Образование */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Book className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('about.educationTitle')}</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-blue-400 pl-4"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.institution}</h4>
                  <p className="text-gray-300 font-medium mb-1">{edu.specialty}</p>
                  <p className="text-gray-400 text-sm">{edu.degree}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Опыт работы */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('about.experienceTitle')}</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-green-400 pl-4"
                >
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.position}</h4>
                  <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Хобби и увлечения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="bg-gray-700/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-600">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('about.hobbiesTitle')}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-600/30 rounded-xl p-6 hover:bg-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{hobby.icon}</span>
                    <h4 className="text-lg font-semibold text-white">{hobby.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;