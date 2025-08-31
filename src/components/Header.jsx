import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Функция для плавной прокрутки
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false) // Закрываем мобильное меню после клика
  }

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Valerii</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors capitalize"
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'About' :
                 item === 'skills' ? 'Skills' :
                 item === 'projects' ? 'Projects' : 'Contact'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-gray-300 hover:text-blue-400 transition-colors w-full text-left capitalize"
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'About' :
                 item === 'skills' ? 'Skills' :
                 item === 'projects' ? 'Projects' : 'Contact'}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header