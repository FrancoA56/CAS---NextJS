import { FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function CreacionDeContenido() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaCameraRetro className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Creación de Contenido</h2>
      <p className="text-2xl mb-6">
        Producimos contenido estratégico y de alta calidad que conecta con tu audiencia 
        y fortalece tu presencia digital.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Fotografía y video profesional para redes sociales
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Copywriting persuasivo y SEO optimizado
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Planificación de calendario de contenidos
        </li>
      </ul>
    </div>
  );
}