import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import trabajo from "../../media/trabajo.jpg"
import trabajo2 from "../../media/trabajo2.jpg"

const teamMembers = [
  {
    name: "Victoria",
    role: "Directora Creativa",
    image: trabajo2,
    fact: "Especialista en branding con 10+ años de experiencia"
  },
  {
    name: "Melissa",
    role: "Lead Developer",
    image: trabajo2,
    fact: "Experto en React y arquitecturas escalables"
  },
  {
    name: "Nadiuska",
    role: "Strategist Digital",
    image: trabajo2,
    fact: "Apasionada por métricas y crecimiento orgánico"
  },
  {
    name: "Franco",
    role: "Programador Full Stack",
    image: trabajo,
    fact: "Creador de experiencias digitales innovadoras"
  }
];

export default function Equipo() {
  return (
    <HorizontalScrollWrapper>
      {/* Sección 1 - Título */}
      <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
        <div className="text-center mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            NUESTRO <span className="text-teal-400">EQUIPO</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Conoce a los especialistas detrás de cada proyecto
          </p>
        </div>
        
        <div className="mt-16 animate-bounce">
                  <FaChevronRight className="text-white text-4xl" />
                </div>
      </div>

      {/* Sección 2 - Miembros del equipo (horizontal scroll) */}
      <div className="h-screen w-screen flex-shrink-0 flex items-center px-4">
        <div className="flex space-x-8 px-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-64 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-teal-400 mb-2">{member.role}</p>
                <p className="text-white text-sm">{member.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección 3 - Filosofía de equipo */}
      <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="text-teal-400">CÓMO</span> TRABAJAMOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Colaboración multidisciplinaria",
              "Enfoque en soluciones, no solo en diseño",
              "Comunicación transparente",
              "Mejora continua basada en datos"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 w-4 h-4 bg-teal-400 rounded-full"></div>
                <p className="text-xl text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HorizontalScrollWrapper>
  );
}