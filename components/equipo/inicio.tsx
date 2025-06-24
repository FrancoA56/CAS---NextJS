import { FaChevronRight } from "react-icons/fa";

export default function InicioE() {
  return (
    <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
      <div className="text-center mb-6">
        <h1 className="text-6xl md:text-8xl text-gradient-cas custom-stroke mb-4">
          NUESTRO <span className="text-teal-400">EQUIPO</span>
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Conoce a los especialistas detrás de cada proyecto
        </p>
      </div>

      <div className="mt-16 animate-bounce">
        <FaChevronRight className="text-black text-4xl" />
      </div>
    </div>
  );
}
