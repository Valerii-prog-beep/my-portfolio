import React from 'react'

const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
        <p className="text-lg text-gray-300 mb-12">Готов к новым проектам и сотрудничеству</p>
        
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:ваш.email@example.com" className="text-blue-400 hover:text-blue-300">
              ваш.email@example.com
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a 
              href="https://github.com/Valerii-prog-beep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              github.com/Valerii-prog-beep
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Телеграм</h3>
            <a href="https://t.me/ваш_телеграм" className="text-blue-400 hover:text-blue-300">
              @ваш_телеграм
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts