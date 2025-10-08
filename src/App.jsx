import { useState } from 'react'
import './App.css'
import logo from './assets/logo1.png'
import turnoteca from './assets/turnoteca.png'
import ContactForm from "./components/ContactForm";
import { FaHome, FaBriefcase, FaUser, FaEnvelope, FaBars,FaCalendar,FaChartLine } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img src={logo} alt="Pulso Libre Logo" className="h-10 w-auto" />
          
          {/* Links escritorio */}
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-orange-600">Inicio</a>
            <a href="#servicios" className="hover:text-orange-600">Servicios</a>
            <a href="#planes" className="hover:text-orange-600">Planes</a>
            <a href="#turnotecas" className="hover:text-orange-600">Turnotecas</a>
            <a href="#acerca" className="hover:text-orange-600">Acerca de Nosotros</a>
            <a href="#contacto" className="hover:text-orange-600">Contacto</a>
          </nav>

          {/* Botón móvil */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="h-6 w-6 text-orange-600" />
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-2 px-6 space-y-2">
            <a href="#inicio" className="flex items-center gap-2 hover:text-orange-600"><FaHome /> Inicio</a>
            <a href="#servicios" className="flex items-center gap-2 hover:text-orange-600"><FaBriefcase /> Servicios</a>
            <a href="#planes" className="flex items-center gap-2 hover:text-orange-600"><FaChartLine /> Planes</a>

            <a href="#turnotecas" className="flex items-center gap-2 hover:text-orange-600"><FaCalendar /> Turnotecas</a>
            <a href="#acerca" className="flex items-center gap-2 hover:text-orange-600"><FaUser /> Acerca de Nosotros</a>
            <a href="#contacto" className="flex items-center gap-2 hover:text-orange-600"><FaEnvelope /> Contacto</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-24 text-center"
      >
        <h2 className="text-5xl font-extrabold mb-6">Impulsamos tu negocio</h2>
        <p className="text-lg mb-8">
  Tecnología accesible para todos los negocios locales y más allá 🚀
</p>

        <a
          href="#contacto"
          className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
        >
          Contáctanos
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50" style={{ backgroundColor: "#fbead0" }}>
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-12 text-orange-600">
            Nuestros Servicios
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Optimización de Ventas */}
            <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
              Control de Stock
              </h4>
              <p>
              Gestioná tus productos de manera simple y eficiente. Visualizá tus niveles de stock, 
              recibí alertas automáticas y evitá quiebres de inventario en tu negocio.
            </p>
            </div>

            {/* Soluciones Personalizadas */}
            <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
              Optimización de Ventas
              </h4>
              <p>
              Analizá tus datos de ventas y descubrí oportunidades para aumentar ingresos y fidelizar clientes.

            </p>
            </div>

            {/* Gestión de Procesos */}
            <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4 text-red-600">
              Soluciones Personalizadas
              </h4>
              <p>
              Adaptamos la tecnología a tu comercio, ya sea un pequeño local o un emprendimiento en crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>
              {/* Planes */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-12 text-orange-600">
            Planes pensados para tu negocio
          </h3>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tu emprendimiento. 
            Todos incluyen soporte, actualizaciones y acceso a nuestras herramientas digitales.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-orange-500">
              <h4 className="text-2xl font-semibold mb-4 text-red-600">Plan Básico</h4>
              <p className="text-gray-700 mb-4">Ideal para pequeños comercios o emprendedores.</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ Control de stock</li>
                <li>✔ Gestión de ventas</li>
                <li>✔ Acceso desde celular o PC</li>
              </ul>
              <p className="text-3xl font-bold text-red-600 mb-6">$4.990 / mes</p>
              <a
                href="#contacto"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
              >
                Lo quiero
              </a>
            </div>

            {/* Plan Pro */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-orange-500">
              <h4 className="text-2xl font-semibold mb-4 text-orange-600">Plan Pro</h4>
              <p className="text-gray-700 mb-4">Para negocios que quieren dar el siguiente paso.</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ Todo del Plan Básico</li>
                <li>✔ Reportes automáticos</li>
                <li>✔ Soporte prioritario</li>
              </ul>
              <p className="text-3xl font-bold text-orange-600 mb-6">$8.990 / mes</p>
              <a
                href="#contacto"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
              >
                Elegir Plan
              </a>
            </div>

            {/* Plan Premium */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-orange-500">
              <h4 className="text-2xl font-semibold mb-4 text-red-600">Plan Premium</h4>
              <p className="text-gray-700 mb-4">Perfecto para cadenas o negocios con varios puntos de venta.</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>✔ Todo del Plan Pro</li>
                <li>✔ Múltiples usuarios</li>
                <li>✔ Personalización avanzada</li>
              </ul>
              <p className="text-3xl font-bold text-red-600 mb-6">$14.990 / mes</p>
              <a
                href="#contacto"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
              >
                Quiero este
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Turnotecas destacada */}
      <section id="turnotecas" className="py-20 bg-white" style={{ backgroundColor: "#fbead0" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-6 md:px-12">
          <div className="md:w-1/2  text-center md:text-left mb-10 md:mb-0" >
            <h3 className="text-3xl font-bold mb-6 text-orange-600">Turnotecas</h3>
            <p className="text-gray-700  mb-6">
              Turnotecas es nuestro nuevo servicio pensado para peluquerías, barberías,
              salones de belleza y pequeños negocios que trabajan con turnos.
            </p>
            <p className="text-gray-700  mb-6">
              Gestioná tus horarios online, recibí reservas automáticas y ofrecé promociones
              en los horarios menos concurridos. Simple, rápido y todo desde Pulso Libre.
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
            >
              Quiero Turnotecas
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={turnoteca}
              alt="Gestión de turnos"
              className="w-80 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros */}
      <section id="acerca"  className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8 text-orange-600">Acerca de Nosotros</h3>
          <p className=" mx-auto text-gray-700  mb-6">
  Pulso Libre nació con la idea de llevar soluciones tecnológicas a todos los negocios,
  desde pequeños comercios hasta grandes empresas. Nuestra misión es simplificar la gestión y 
  potenciar las ventas con herramientas fáciles de usar.
</p>
<p className=" mx-auto text-gray-700 ">
  Creemos en la innovación local, el apoyo a los negocios de la comunidad y en transformar la 
  tecnología en algo accesible para todos.
</p>

        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20" style={{ backgroundColor: "#fbead0" }}>
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-12 text-orange-600">Contacto</h3>
          <ContactForm />
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <a
  href="https://wa.me/5493413070122"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition"
>
  <FaWhatsapp className="w-7 h-7" />
</a>

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
