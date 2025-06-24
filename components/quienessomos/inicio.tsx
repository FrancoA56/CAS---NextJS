import { FaChevronRight } from "react-icons/fa";

export default function InicioQS() {
  return (
    <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl text-gradient-cas mb-6 custom-stroke">
          ¿QUIÉNES <span className="">SOMOS?</span>
        </h1>
        <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto">
          Transformamos ideas en resultados digitales tangibles
        </p>
      </div>
      <div className="mt-16 animate-bounce">
        <FaChevronRight className="text-black text-4xl" />
      </div>
    </div>
  );
}
