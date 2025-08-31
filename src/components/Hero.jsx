import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import myPhoto from '../assets/my-photo.jpg'

const Hero = () => {
  // Функция для плавной прокрутки
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Валерий
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Frontend Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center flex-wrap gap-4"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Обо мне
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Навыки
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Мои работы
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Контакты
          </button>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden border-4 border-white/20">
                {/* Замените на ваше фото */}
                <img 
                  src={myPhoto} 
                  alt="Валерий" 
                  className="w-full h-full object-cover"
             />
              </div>
              {/* Декоративный элемент */}
              <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
          style={{ cursor: 'pointer' }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-blue-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero