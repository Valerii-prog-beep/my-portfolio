import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from "../assets/my-photo.jpg";
import About from '../components/About';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Герой секция */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Фото слева */}
            <motion.div 
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                  <img 
                    src={myPhoto}
                    alt={t('hero.title')} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Информация справа */}
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {t('hero.title')}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl md:text-3xl font-bold mb-6 text-white"
              >
                {t('hero.subtitle')}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-gray-300 space-y-4 text-lg"
              >
                <p>{t('hero.bio1')}</p>
                <p>{t('hero.bio2')}</p>
                <p>{t('hero.bio3')}</p>
                
                {/* Кнопка Узнать больше */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="pt-4"
                >
                  <button 
                    onClick={scrollToAbout}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300"
                  >
                    {t('hero.learnMore')}
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Секция About */}
      <About />
    </>
  );
};

export default Home;