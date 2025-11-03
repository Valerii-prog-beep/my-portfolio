import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { writings } from '../data/writings';

const Writing = () => {
  const [selectedWriting, setSelectedWriting] = useState(writings[0]);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Стихи и рассказы
          </h1>
          <p className="text-xl text-gray-300">
            Мои литературные произведения и творческие эксперименты
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Список произведений */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Мои произведения</h2>
              <div className="space-y-4">
                {writings.map((writing, index) => (
                  <motion.div
                    key={writing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedWriting(writing)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedWriting?.id === writing.id
                        ? 'bg-blue-500/20 border border-blue-500/50'
                        : 'bg-gray-700/30 hover:bg-gray-700/50 border border-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white text-lg">{writing.title}</h3>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                        {writing.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{writing.description}</p>
                    <p className="text-gray-500 text-xs">{writing.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Просмотр произведения */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 h-full min-h-[600px]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedWriting.title}</h2>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                    {selectedWriting.category}
                  </span>
                  <span className="text-sm text-gray-400">{selectedWriting.date}</span>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed text-lg">
                  <ReactMarkdown>{selectedWriting.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Writing;