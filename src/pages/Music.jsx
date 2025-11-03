import React from 'react';
import { motion } from 'framer-motion';

const Music = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Музыка
          </h1>
          <p className="text-xl text-gray-300">
            Мои музыкальные произведения и исполнения
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 text-center"
          >
            <p className="text-gray-300 text-lg mb-6">
              Скоро здесь появятся мои музыкальные записи...
            </p>
            <div className="text-blue-400 animate-pulse">
              🎵 В разработке 🎵
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ВАЖНО: эта строка должна быть в конце!
export default Music;