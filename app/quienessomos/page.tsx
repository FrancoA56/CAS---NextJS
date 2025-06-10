import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import { FaChevronRight } from "react-icons/fa";

export default function QuienesSomos() {
  return (
    <HorizontalScrollWrapper>
      {/* Sección 1 - Título principal */}
      <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 custom-stroke">
            ¿QUIÉNES <span className="text-teal-400">SOMOS?</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            Transformamos ideas en resultados digitales tangibles
          </p>
        </div>
        <div className="mt-16 animate-bounce">
          <FaChevronRight className="text-white text-4xl" />
        </div>
      </div>

      {/* Sección 2 - Filosofía */}
      <div className="h-screen w-screen flex-shrink-0 flex items-center px-16 text-left justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8">
            Nuestra <span className="text-teal-400">Filosofía</span>
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-white">
              Creemos en el marketing digital basado en datos, pero impulsado por creatividad.
            </p>
            <p className="text-xl text-white">
              Cada estrategia debe ser tan única como el negocio al que sirve.
            </p>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent my-8"></div>
            <p className="text-xl text-white">
              No somos una fábrica de contenido. Somos arquitectos de experiencias digitales que generan crecimiento real.
            </p>
          </div>
        </div>
      </div>

      {/* Sección 3 - Enfoque */}
      <div className="h-screen w-screen flex-shrink-0 flex items-center px-16 justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8 items-center flex gap-2 justify-center">
            Nuestro <span className="text-teal-400"> Enfoque</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Estrategia",
                desc: "Planes personalizados basados en tus objetivos específicos"
              },
              {
                title: "Tecnología",
                desc: "Herramientas y plataformas de última generación"
              },
              {
                title: "Resultados",
                desc: "Métricas claras y reportes transparentes"
              },
              {
                title: "Innovación",
                desc: "Siempre explorando nuevas fronteras digitales"
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HorizontalScrollWrapper>
  );
}