import React from 'react'

const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
        <p className="text-lg text-gray-300 mb-12">Готов к новым проектам и сотрудничеству</p>

        <div className="flex justify-center">
          <div className="max-w-md space-y-6 text-left">
            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-400 transition-colors">
                valerii_bogovich87@mail.ru
              </p>
            </div>

            {/* Github */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Github</h3>
              <a
                href="https://github.com/Valerii-prog-beep"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Valerii-prog-beep
              </a>
            </div>

            {/* Telegram */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/valera_writer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @valera_writer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts