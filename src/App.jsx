import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTE DE CARRUSEL AUTOMÁTICO (VERSIÓN PREMIUM) ---
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-950 group-hover:scale-105 transition-transform duration-700">

      {/* CAPA 1: Fondo desenfocado (Rellena los espacios vacíos) */}
      {images.map((img, index) => (
        <img
          key={`blur-${index}`}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-xl transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-40' : 'opacity-0'
            }`}
        />
      ))}

      {/* CAPA 2: Imagen principal nítida y completa (object-contain) */}
      {images.map((img, index) => (
        <img
          key={`main-${index}`}
          src={img}
          alt={`Captura ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain py-4 transition-opacity duration-1000 ease-in-out drop-shadow-2xl ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}

      {/* Indicadores (Puntitos de navegación) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-white/40'
              }`}
          />
        ))}
      </div>

      {/* Sombra inferior para que los puntitos resalten */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950/90 to-transparent pointer-events-none"></div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">

{/* --- NAVBAR --- */}
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
          <div className="text-xl font-bold tracking-tighter">
            CodeBy<span className="text-blue-500">Fran</span>.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a
            href="/CV_Jesus_Carranza.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Francisco_Carranza.pdf"
            className="px-4 py-2 text-sm font-medium border border-gray-800 rounded-full hover:bg-gray-800 transition-colors"
          >
            Resumen CV
          </a>
        </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible para nuevos retos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Ingeniería de Software <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              con visión de negocio.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Hola, soy Francisco Carranza. Desarrollador Full Stack & Project Manager.
            Transformo ideas en productos digitales escalables, eficientes y con un diseño impecable.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
              Ver proyectos &rarr;
            </a>
            <div className="flex items-center gap-4 px-4 font-bold text-gray-400">
              <a href="https://github.com/jecarranza?tab=repositories" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/jesus-francisco-carranza-quintero-18938b31b/" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20"></div>
          <div className="relative aspect-square rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden flex items-center justify-center">
            <img
              src="/foto-fran-profesional.jpeg"
              alt="Francisco Carranza"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </main>

      {/* --- SECCIÓN DE PROYECTOS --- */}
      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800/50 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-left"
        >
          Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Destacados</span>
        </motion.h2>

        <div className="flex flex-col gap-24">

          {/* PROYECTO 1: TIENDA LUNA SOL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center group"
          >
            {/* CONTENEDOR DE IMAGEN AMPLIADO (w-7/12 en lugar de w-1/2) */}
            <div className="w-full lg:w-7/12 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 relative aspect-video lg:aspect-[16/10] shadow-2xl">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <ImageCarousel images={[
                '/capturasTienda/login.png',
                '/capturasTienda/dashboard.png',
                '/capturasTienda/inventario.png',
                '/capturasTienda/alta producto.png',
                '/capturasTienda/usuarios.png',
                '/capturasTienda/agregar usuarios.png',
                '/capturasTienda/historial de ventas.png',
                '/capturasTienda/perfil.png',
                '/capturasTienda/punto de venta.png',
                '/capturasTienda/confirmacion venta con ticket.png'
              ]} />
            </div>

            {/* CONTENEDOR DE TEXTO AJUSTADO (w-5/12 en lugar de w-1/2) */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold">TiendaLunaSol 🌙☀️</h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/20 whitespace-nowrap">
                  🟢 En Producción
                </span>
              </div>
              <p className="text-blue-400 text-sm font-medium mb-6 tracking-wide uppercase">Sistema Integral POS y Gestión de Inventario</p>

              <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
                <p>
                  <strong className="text-gray-200">El Desafío:</strong> Negocio local con pérdidas de capital y mermas por gestión manual. Sin visibilidad para resurtir, sin control de caducidades y fugas de efectivo.
                </p>
                <p>
                  <strong className="text-gray-200">La Solución:</strong> Plataforma web que digitaliza toda la operación.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="text-gray-300 font-medium">Control de Mermas:</span> Dashboard con alertas de stock bajo y caducidades a 15 días.</li>
                  <li><span className="text-gray-300 font-medium">Seguridad y Trazabilidad:</span> Autenticación por roles (Admin/Cajero) para auditorías precisas.</li>
                  <li><span className="text-gray-300 font-medium">Operación Ágil:</span> Punto de Venta en tiempo real, pagos múltiples y generación de tickets.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Java Spring Boot', 'Spring Security (JWT)', 'MySQL', 'Docker', 'Oracle Cloud'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <a href="http://codebyfran.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                Visitar aplicación <span className="text-xl">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* PROYECTO 2: EVIAL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center group"
          >
            {/* CONTENEDOR DE IMAGEN AMPLIADO */}
            <div className="w-full lg:w-7/12 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 relative aspect-video lg:aspect-[16/10] shadow-2xl">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <ImageCarousel images={['/capturasEvial/login.png',
                '/capturasEvial/dashboard.png',
                '/capturasEvial/proyectos.png',
                '/capturasEvial/intersecciones.png',
                '/capturasEvial/movimientos.png',
                '/capturasEvial/usuarios.png',
                '/capturasEvial/reportes.png',
                '/capturasEvial/sesiones.png',
                '/capturasEvial/perfil.png',
                '/capturasEvial/sesion foraneo.png'
              ]} />
            </div>

            {/* CONTENEDOR DE TEXTO AJUSTADO */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold">Centro de Control EVIAL 🛣️</h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 whitespace-nowrap">
                  🟡 En Fase Beta
                </span>
              </div>
              <p className="text-indigo-400 text-sm font-medium mb-6 tracking-wide uppercase">Plataforma Inteligente de Aforo Vehicular</p>

              <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
                <p>
                  <strong className="text-gray-200">El Desafío:</strong> Recolección manual (papel) de datos de tráfico en campo, provocando errores y nula capacidad para monitorear personal foráneo.
                </p>
                <p>
                  <strong className="text-gray-200">La Solución:</strong> Sistema digital que automatiza la captura y procesamiento.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="text-gray-300 font-medium">Sincronización WebSockets:</span> Datos enviados en vivo al dashboard central.</li>
                  <li><span className="text-gray-300 font-medium">Optimización Extrema:</span> Flujo diseñado para consumir menos de 1 MB mensual en campo.</li>
                  <li><span className="text-gray-300 font-medium">Motor ETL:</span> Procesamiento de grandes volúmenes de datos históricos.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Vite', 'Java Spring Boot', 'WebSockets', 'MySQL', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN DE EXPERIENCIA --- */}
      <section id="experiencia" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800/50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-left"
        >
          Trayectoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Profesional</span>
        </motion.h2>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-2 border-[#0a0a0a]"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">Independent Software Engineer</h3>
              <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-max mt-2 md:mt-0">Presente</span>
            </div>
            <p className="text-lg text-gray-300 mb-4 font-medium">CodeByFran Agency</p>
            <p className="text-gray-400 leading-relaxed">
              Desarrollo de soluciones tecnológicas personalizadas para negocios, abarcando desde la concepción hasta el despliegue en la nube (Docker, Oracle Cloud, Vercel). Creación de sistemas de punto de venta y control de inventarios como TiendaLunaSol.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-2 border-[#0a0a0a]"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">Full-Stack Developer / Backend</h3>
              <span className="text-sm font-medium text-gray-400 mt-2 md:mt-0">2025 - 2026</span>
            </div>
            <p className="text-lg text-gray-300 mb-4 font-medium">Evial Ingeniería</p>
            <p className="text-gray-400 leading-relaxed">
              Diseño y arquitectura de la plataforma EVIAL, transformando procesos manuales de campo en sistemas digitales en tiempo real. Implementación de APIs RESTful con Spring Boot, motores ETL para procesamiento masivo de datos vehiculares y dashboards analíticos en React.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN DE CONTACTO --- */}
      <section id="contacto" className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-center border border-gray-800 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight">
            ¿Listo para escalar tu próximo proyecto?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Actualmente estoy abierto a nuevas oportunidades, consultorías y colaboraciones. Si tienes un reto técnico complejo o necesitas digitalizar tus operaciones, ¡hablemos!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=franciscocarranza0099@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto"
            >
              Enviar Correo
            </a>
            <a
              href="https://wa.me/525548656468?text=Hola%20Francisco,%20vi%20tu%20portafolio%20y%20tengo%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-francisco-carranza-quintero-18938b31b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-900 mt-10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} CodeBy<span className="text-blue-500">Fran</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/jesus-francisco-carranza-quintero-18938b31b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;