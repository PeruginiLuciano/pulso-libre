import { useState } from 'react'
import './App.css'
import logo from './assets/logo1.png'
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src={logo} alt="Pulso Libre Logo" className="h-10 w-auto" />
          {/* <h1 className="text-2xl font-bold text-orange-600">Pulso Libre</h1> */}
          <nav className="space-x-6">
            <a href="#inicio" className="hover:text-orange-600">Inicio</a>
            <a href="#servicios" className="hover:text-orange-600">Servicios</a>
            <a href="#contacto" className="hover:text-orange-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-24 text-center"
      >
        <h2 className="text-5xl font-extrabold mb-6">Impulsamos tu negocio</h2>
        <p className="text-lg mb-8">
          Tecnología accesible para cada rincón del barrio y más allá 🚀
        </p>
        <a
          href="#contacto"
          className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
        >
          Contáctanos
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-orange-600">
            Nuestros Servicios
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
                Gestión de Pedidos
              </h4>
              <p>
                Permite que tus clientes compren desde casa y retiren en tu
                local fácilmente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
                Optimización de Ventas
              </h4>
              <p>
                Analiza tus datos y aumenta la eficiencia de tu negocio con
                nuestras herramientas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
                Soluciones Personalizadas
              </h4>
              <p>
                Desde kioscos de barrio hasta grandes empresas, adaptamos la
                tecnología a vos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-orange-600">Contacto</h3>
          {/* <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
            >
              Enviar
            </button>
          </form> */}
                  <ContactForm />

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Pulso Libre. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  )
}

export default App
