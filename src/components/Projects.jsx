import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Server, Database, Code } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t('web.projects.coffeeShop.title'),
      description: t('web.projects.coffeeShop.description'),
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/Valerii-prog-beep/coffee-shop",
      demoUrl: "#",
      features: [
        t('web.projects.features.adminPanel'),
        t('web.projects.features.menuManagement'),
        t('web.projects.features.orderSystem'),
        t('web.projects.features.authentication')
      ],
      backend: true,
      featured: true
    },
    {
      id: 2, 
      title: t('web.projects.ecommerce.title'),
      description: t('web.projects.ecommerce.description'),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux"],
      githubUrl: "https://github.com/Valerii-prog-beep/ecommerce-store",
      demoUrl: "#",
      features: [
        t('web.projects.features.onlinePayment'),
        t('web.projects.features.productCatalog'),
        t('web.projects.features.shoppingCart'),
        t('web.projects.features.personalAccount')
      ],
      backend: true,
      featured: true
    },
    {
      id: 3,
      title: t('web.projects.travelAgency.title'),
      description: t('web.projects.travelAgency.description'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/Valerii-prog-beep/travel-agency",
      demoUrl: "https://clever-cendol-167660.netlify.app",
      features: [
        t('web.projects.features.tourBooking'),
        t('web.projects.features.filtering'),
        t('web.projects.features.formValidation'),
        t('web.projects.features.responsiveDesign')
      ],
      backend: false,
      featured: true
    },
    {
      id: 4,
      title: t('web.projects.portfolio.title'),
      description: t('web.projects.portfolio.description'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
      githubUrl: "https://github.com/Valerii-prog-beep/my-portfolio",
      demoUrl: "https://celadon-medovik-aaec6f.netlify.app",
      features: [
        t('web.projects.features.responsiveDesign'),
        t('web.projects.features.smoothAnimations'),
        t('web.projects.features.multiPage'),
        t('web.projects.features.seoOptimization')
      ],
      backend: false,
      featured: true
    }
  ]

  const projectFeatures = [
    t('web.projects.allFeatures.responsive'),
    t('web.projects.allFeatures.modernUI'),
    t('web.projects.allFeatures.cleanCode'),
    t('web.projects.allFeatures.documentation')
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
          {t('web.projects.title')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg"
        >
          {t('web.projects.subtitle')}
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-gray-800/50 rounded-2xl shadow-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
            >
              {/* Бейдж Full-stack / Frontend */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`flex items-center gap-1 ${
                  project.backend 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-blue-500/20 text-blue-300'
                } px-3 py-1 rounded-full text-xs`}>
                  {project.backend ? (
                    <>
                      <Server className="w-3 h-3" />
                      <Database className="w-3 h-3" />
                      <span>{t('web.projects.fullstack')}</span>
                    </>
                  ) : (
                    <>
                      <Code className="w-3 h-3" />
                      <span>{t('web.projects.frontend')}</span>
                    </>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Особенности */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  {t('web.projects.featuresTitle')}:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Технологии */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  {t('web.projects.technologiesTitle')}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Кнопки */}
              <div className="flex space-x-3 pt-4 border-t border-gray-700">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  {t('web.projects.sourceCode')}
                </a>
                <a 
                  href={project.demoUrl} 
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('web.projects.viewProject')}
                </a>
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
              {t('web.projects.allProjectsInclude')}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              {projectFeatures.map((feature, index) => (
                <div key={index}>✅ {feature}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects