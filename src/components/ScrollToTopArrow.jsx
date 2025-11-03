import React, { useState, useEffect } from 'react';
// Импортируем необходимые хуки из React
// useState - для управления состоянием видимости стрелки
// useEffect - для side-эффектов (добавление/удаление обработчика scroll)

import { motion, AnimatePresence } from 'framer-motion';
// Импортируем компоненты из Framer Motion для анимаций
// motion - для анимированных элементов
// AnimatePresence - для анимации появления/исчезновения компонентов

import { ChevronUp } from 'lucide-react';
// Импортируем иконку стрелки вверх из библиотеки Lucide

const ScrollToTopArrow = () => {
  // Создаем функциональный компонент ScrollToTopArrow

  const [isVisible, setIsVisible] = useState(false);
  // Создаем состояние isVisible, которое определяет, видна ли стрелка
  // Начальное значение - false (стрелка скрыта)

  // Показываем стрелку при прокрутке
  useEffect(() => {
    // useEffect выполняется после рендера компонента
    // Пустой массив зависимостей [] означает, что эффект выполнится только один раз при монтировании

    const toggleVisibility = () => {
      // Функция, которая проверяет позицию прокрутки
      if (window.pageYOffset > 300) {
        // Если прокрутили больше 300 пикселей от верха
        setIsVisible(true); // Показываем стрелку
      } else {
        setIsVisible(false); // Скрываем стрелку
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Добавляем обработчик события scroll на window
    // При каждом скролле будет вызываться toggleVisibility

    return () => window.removeEventListener('scroll', toggleVisibility);
    // Функция очистки - удаляет обработчик события при размонтировании компонента
    // Это предотвращает утечки памяти
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

  // Прокрутка к верху страницы
  const scrollToTop = () => {
    // Функция, которая вызывается при клике на стрелку
    window.scrollTo({
      top: 0, // Прокручиваем к самой верхней точке страницы (0px)
      behavior: 'smooth' // Плавная анимация прокрутки
    });
  };

  return (
    <AnimatePresence>
      {/* AnimatePresence позволяет анимировать компоненты при их удалении из DOM */}
      {isVisible && (
        /* Условный рендеринг: показываем стрелку только если isVisible = true */
        
        <motion.button
          // Анимированная кнопка
          initial={{ opacity: 0, scale: 0.5 }}
          // Начальное состояние анимации: полностью прозрачная и уменьшенная вполовину
          
          animate={{ opacity: 1, scale: 1 }}
          // Конечное состояние анимации: полностью непрозрачная и нормального размера
          
          exit={{ opacity: 0, scale: 0.5 }}
          // Анимация при исчезновении: снова становится прозрачной и уменьшается
          
          whileHover={{ scale: 1.1 }}
          // Анимация при наведении курсора: немного увеличивается
          
          whileTap={{ scale: 0.9 }}
          // Анимация при нажатии: немного уменьшается (эффект нажатия)
          
          transition={{ duration: 0.3 }}
          // Длительность анимации: 0.3 секунды
          
          onClick={scrollToTop}
          // Обработчик клика: вызывает функцию scrollToTop
          
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          // Стили Tailwind:
          // fixed - фиксированное позиционирование
          // bottom-8 right-8 - 2rem от нижнего и правого края
          // z-50 - высокий z-index чтобы быть поверх других элементов
          // w-12 h-12 - размер 3rem × 3rem (48px × 48px)
          // bg-blue-500 - синий фон
          // hover:bg-blue-600 - темнее синий при наведении
          // text-white - белый текст
          // rounded-full - круглая форма
          // flex items-center justify-center - центрирование содержимого
          // shadow-lg - тень
          // transition-colors - плавный переход цветов
        >
          <motion.div
            // Внутренний анимированный div для иконки
            animate={{
              y: [0, -3, 0],
              // Анимация движения по оси Y: 
              // 0 → -3px (вверх) → 0 (обратно)
            }}
            transition={{
              duration: 1.5, // Длительность цикла анимации: 1.5 секунды
              repeat: Infinity, // Бесконечное повторение
              ease: "easeInOut" // Плавное ускорение и замедление
            }}
          >
            <ChevronUp size={24} />
            {/* Сама иконка стрелки вверх размером 24px */}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopArrow;
// Экспортируем компонент для использования в других файлах