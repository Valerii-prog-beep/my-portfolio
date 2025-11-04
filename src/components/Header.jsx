import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Github, Globe, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const tabs = [
    { id: '/', label: t('navigation.home') },
    { id: '/web', label: t('navigation.web') },
    { id: '/writing', label: t('navigation.writing') },
    { id: '/photos', label: t('navigation.photos') },
    { id: '/music', label: t('navigation.music') }
  ];

  const contacts = [
  { 
    icon: <Mail className="w-4 h-4" />, 
    value: 'valerii_bogovich87@mail.ru',
    href: 'mailto:valerii_bogovich87@mail.ru', // Верните эту строку
    type: 'copy'
  },
  {
    icon: <Github className="w-4 h-4" />,
    value: t('contact.github'),
    href: 'https://github.com/Valerii-prog-beep?tab=repositories',
    external: true,
    type: 'link'
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    value: t('contact.telegram'),
    href: 'https://t.me/valera_writer',
    external: true,
    type: 'link'
  }
];


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="container mx-auto px-6 py-3">
        {/* Верхняя строка - контакты по центру, язык слева */}
        <div className="flex justify-between items-center mb-3">
          {/* Переключатель языка - слева */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Globe className="w-4 h-4 text-gray-400" />
            <button
              onClick={() => changeLanguage('ru')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                i18n.language === 'ru' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                i18n.language === 'en' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                i18n.language === 'fr' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              FR
            </button>
          </motion.div>

          {/* Контакты - по центру */}
          <div className="flex items-center justify-center gap-8 flex-1 px-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
                  {contact.icon}
                </div>
                {contact.href ? (
                  <a 
                    href={contact.href}
                    target={contact.external ? "_blank" : "_self"}
                    rel={contact.external ? "noopener noreferrer" : ""}
                    className="text-sm hover:text-blue-400 transition-colors whitespace-nowrap"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-sm whitespace-nowrap">
                    {contact.value}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Пустой блок справа для балансировки */}
          <div className="w-20 flex-shrink-0"></div>
        </div>

        {/* Навигация */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-4xl space-x-1 bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.id}
                className={`flex-1 text-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;