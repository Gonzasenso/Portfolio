import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import gamextremeImg from "./assets/gamextreme.png";
import asensoBarberImg from "./assets/asensoBarber.png";
import flyLenaImg from "./assets/flyLena.png";
import perfil from "./assets/perfil.jpg";

export default function PortfolioPro() {

  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    {
      title: "HTML5",
      icon: "🌐",
      desc: "Estructura semántica y desarrollo web moderno",
    },
    {
      title: "CSS3",
      icon: "🎨",
      desc: "Diseño responsive y estilos modernos",
    },
    {
      title: "JavaScript",
      icon: "⚡",
      desc: "Interactividad y lógica del lado del cliente",
    },
    {
      title: "Bootstrap",
      icon: "📱",
      desc: "Framework responsive para interfaces modernas",
    },
    {
      title: "React",
      icon: "⚛️",
      desc: "Desarrollo de interfaces dinámicas y componentes",
    },
    {
      title: "SQL / MySQL",
      icon: "🗄️",
      desc: "Modelado y consultas de bases de datos",
    },
    {
      title: "Git & GitHub",
      icon: "💻",
      desc: "Control de versiones y trabajo colaborativo",
    },
    {
      title: "Responsive Design",
      icon: "📐",
      desc: "Adaptación visual para todos los dispositivos",
    },
    {
      title: "UI Design",
      icon: "🖌️",
      desc: "Diseño visual y experiencia de usuario",
    },
    {
      title: "Lógica de Programación",
      icon: "🧠",
      desc: "Resolución de problemas y algoritmos",
    },
    {
      title: "Soporte IT",
      icon: "🛠️",
      desc: "Resolución de problemas técnicos y soporte básico",
    },
    {
      title: "Informática General",
      icon: "🖥️",
      desc: "Hardware, software y herramientas informáticas",
    },
    {
      title: "Redes Básicas",
      icon: "🌍",
      desc: "Conocimientos básicos de conectividad y redes",
    },
    {
      title: "Inglés Técnico",
      icon: "📘",
      desc: "Comprensión técnica aplicada a tecnología y desarrollo",
    },
  ];

  const projects = [
    {
      title: 'Web Ecommerce',
      desc: 'Ecommerce gamer desarrollado con React y Firebase. Incluye catálogo dinámico, filtrado por categorías, carrito de compras y consumo de base de datos en tiempo real.',
      tech: ['React', 'Firebase', 'Firestore', 'Bootstrap', 'Responsive', 'UI Design'],
      image: gamextremeImg,
      link: 'https://gonzasenso.github.io/React-JS/',
      github: 'https://github.com/Gonzasenso/React-JS',
    },
    {
      title: 'Web Barbería Personal',
      desc: 'Sitio web moderno para barbería con diseño responsive, secciones informativas, galería visual y experiencia orientada a clientes.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UX/UI'],
      image: asensoBarberImg,
      link: 'https://gonzasenso.github.io/Web-Barberia/',
      github: 'https://github.com/Gonzasenso/Web-Barberia',
    },
    {
      title: 'Web Vuelos FlyLena',
      desc: 'Sitio web de viajes desarrollado como trabajo integrador universitario. Incluye diseño responsive, sistema de navegación, vistas de destinos, ofertas y experiencia orientada a reservas de vuelos y turismo.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Grid Layout'],
      image: flyLenaImg,
      link: 'https://gonzasenso.github.io/Trabajo-IntegradorPW1/',
      github: 'https://github.com/Gonzasenso/Trabajo-IntegradorPW1',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="bg-[#0b1120] text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-cyan-400">
            {"</>"} Gonzalo Asenso
          </h1>

          {/* Menú Desktop */}
          <nav className="hidden md:flex gap-10 text-sm text-white/80">
            <a href="#inicio" className="hover:text-cyan-400 transition">
              Inicio
            </a>

            <a href="#sobre" className="hover:text-cyan-400 transition">
              Sobre mí
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Habilidades
            </a>

            <a href="#proyectos" className="hover:text-cyan-400 transition">
              Proyectos
            </a>

            <a href="#contacto" className="hover:text-cyan-400 transition">
              Contacto
            </a>
          </nav>

          {/* Botón CV Desktop */}
          <a
            href="/CV-Asenso-Gonzalo.pdf"
            download
            className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Descargar CV
          </a>

          {/* Hamburguesa Mobile */}
          <button
            className="md:hidden text-3xl text-cyan-400 transition-all duration-300 hover:scale-110"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menú Mobile */}
          <div
            className={`absolute top-full left-0 w-full bg-[#0b1120]/95 backdrop-blur-md border-t border-white/10 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col items-center py-6 gap-6 text-white">

              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                Inicio
              </a>

              <a
                href="#sobre"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                Sobre mí
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                Habilidades
              </a>

              <a
                href="#proyectos"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                Proyectos
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                Contacto
              </a>

              <a
                href="/CV-Asenso-Gonzalo.pdf"
                download
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-full font-semibold"
              >
                Descargar CV
              </a>

            </div>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center pt-28 px-6 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,100,255,.2),transparent_30%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
              Portfolio Profesional
            </span>

            <h2 className="text-6xl lg:text-7xl font-black mt-5 leading-tight">
              Gonzalo <span className="text-cyan-400">Asenso</span>
            </h2>

            <h3 className="text-2xl mt-6 text-white/80 font-semibold">
              Desarrollador Web & Técnico IT en formación
            </h3>

            <p className="text-white/60 mt-8 text-lg leading-8 max-w-xl">
              Estudiante de la Tecnicatura Universitaria en Web/Mobile en la UNLaM,
              con formación en desarrollo web, programación, bases de datos,
              diseño de interfaces, informática general y soporte IT.
              Apasionado por la tecnología, la resolución de problemas y la creación
              de experiencias digitales modernas.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <a
                href="#proyectos"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl shadow-cyan-500/20"
              >
                Ver Proyectos
              </a>

              <a
                href="https://wa.me/5491136394035"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                Contactarme
              </a>
            </div>

            <div className="flex gap-5 mt-10 text-3xl text-white/70">
              <span className="hover:text-cyan-400 transition cursor-pointer">🐙</span>
              <span className="hover:text-cyan-400 transition cursor-pointer">💼</span>
              <span className="hover:text-cyan-400 transition cursor-pointer">✉️</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full" />

            <img
              src={perfil}
              alt="Gonzalo Asenso"
              className="relative z-10 rounded-[40px] object-cover h-[600px] w-full max-w-[430px] border border-white/10 shadow-2xl shadow-cyan-500/10 hover:scale-[1.02] transition duration-500" />
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
              Sobre mí
            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">Mi perfil profesional</h2>

            <p className="text-white/60 text-lg leading-8 mb-6">
              Actualmente estudio la Tecnicatura Universitaria en Web/Mobile en la
              Universidad Nacional de La Matanza.
            </p>

            <p className="text-white/60 text-lg leading-8">
              Me interesa el desarrollo frontend, diseño de interfaces modernas,
              soporte IT y resolución de problemas tecnológicos.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h4 className="text-cyan-400 text-3xl font-bold">+10</h4>
                <p className="text-white/60 mt-2">Proyectos realizados</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h4 className="text-cyan-400 text-3xl font-bold">Frontend</h4>
                <p className="text-white/60 mt-2">Especialización principal</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                Formación Académica
              </h3>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-2xl font-semibold mb-4">
                  Universidad Nacional de La Matanza
                </h4>

                <p className="text-white/60 leading-8">
                  Tecnicatura Universitaria en Web/Mobile en curso.
                  Formación orientada a programación, desarrollo web,
                  bases de datos, diseño de interfaces, redes,
                  soporte IT y tecnologías aplicadas.
                </p>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="setup"
            className="rounded-[40px] border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Habilidades
          </span>

          <h2 className="text-5xl font-bold mt-5 mb-20">Tecnologías</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:-translate-y-3 transition duration-300 hover:shadow-cyan-500/20 hover:shadow-2xl"
              >
                <div className="text-6xl mb-6">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-white/60">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* TITULO */}
          <div className="flex justify-between items-center mb-20 flex-wrap gap-6">
            <div>
              <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
                Portfolio
              </span>

              <h2 className="text-5xl font-bold mt-5">
                Mis proyectos
              </h2>
            </div>

            <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Ver todos
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:-translate-y-4 transition duration-300"
              >

                {/* IMAGEN */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-73 object-cover  hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="p-8 flex flex-col">

                  {/* TITULO */}
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  {/* DESCRIPCION */}
                  <p className="text-white/60 leading-8 mb-8">
                    {project.desc}
                  </p>

                  {/* TECNOLOGIAS */}
                  <div className="flex gap-3 flex-wrap mb-8">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BOTONES */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition"
                    >
                      Ver proyecto
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl transition"
                    >
                      GitHub
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
              Contacto
            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">Hablemos</h2>

            <p className="text-white/60 text-lg leading-8 mb-10">
              Estoy abierto a oportunidades laborales, proyectos freelance y
              experiencias dentro del mundo IT.
            </p>

            <div className="space-y-6 text-lg">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                📧 gonzasenso12@gmail.com
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                📍 Buenos Aires, Argentina
              </div>
            </div>
          </div>

          <form className="bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Mensaje"
              className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
            />

            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        <p>© 2026 Gonzalo Asenso — Portfolio Profesional</p>
      </footer>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500/80 backdrop-blur-xl hover:bg-cyan-400 text-white w-11 h-11 rounded-full shadow-lg shadow-cyan-500/20 flex items-center justify-center text-sm hover:scale-110 transition duration-300"      >
        <FaArrowUp />
      </button>
    </div>
  );
}
