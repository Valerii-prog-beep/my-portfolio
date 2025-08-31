import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Обо мне
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-300"
        >
          <p className="mb-4">
            Я frontend-разработчик с passion к созданию современных и интерактивных веб-приложений.
          </p>
          <p>
            Специализируюсь на React, JavaScript и современных фреймворках. 
            Люблю чистый код, красивый дизайн и сложные задачи.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About