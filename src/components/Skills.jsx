import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  const skills = [
    { name: t('skills.technologies.html'), level: 90 },
    { name: t('skills.technologies.css'), level: 85 },
    { name: t('skills.technologies.javascript'), level: 80 },
    { name: t('skills.technologies.typescript'), level: 75 },
    { name: t('skills.technologies.react'), level: 75 },
    { name: t('skills.technologies.tailwind'), level: 70 },
    { name: t('skills.technologies.nodejs'), level: 65 },
    { name: t('skills.technologies.java'), level: 80 },
    { name: t('skills.technologies.git'), level: 55 },
    { name: t('skills.technologies.figma'), level: 70 },
    { name: t('skills.technologies.python'), level: 70 },
    { name: t('skills.technologies.chatgpt'), level: 80 },
    { name: t('skills.technologies.sql'), level: 70 },
    { name: t('skills.technologies.docker'), level: 50 },
  ]

  // Группируем навыки по категориям для лучшего отображения
  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: skills.filter(skill => 
        [
          t('skills.technologies.html'),
          t('skills.technologies.css'), 
          t('skills.technologies.javascript'),
          t('skills.technologies.typescript'),
          t('skills.technologies.react'),
          t('skills.technologies.tailwind')
        ].includes(skill.name)
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('skills.backend'),
      skills: skills.filter(skill => 
        [
          t('skills.technologies.java'),
          t('skills.technologies.python'),
          t('skills.technologies.sql'),
          t('skills.technologies.nodejs')
        ].includes(skill.name)
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('skills.tools'),
      skills: skills.filter(skill => 
        [
          t('skills.technologies.git'),
          t('skills.technologies.figma'),
          t('skills.technologies.chatgpt'),
          t('skills.technologies.docker')
        ].includes(skill.name)
      ),
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-4 text-white"
        >
          {t('skills.title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          {t('skills.subtitle')}
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.15) + (index * 0.1),
                          ease: "easeOut"
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20">
            <h4 className="text-lg font-semibold text-white mb-2">
              {t('skills.learning.title')}
            </h4>
            <p className="text-gray-300 text-sm">
              {t('skills.learning.technologies')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills