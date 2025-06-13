import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function RedesSociales() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaHashtag className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Gestión de Redes Sociales</h2>
      <p className="text-2xl mb-6">
        Transformamos tus redes en canales de crecimiento con estrategias 
        personalizadas para cada plataforma y audiencia.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Estrategia 360° para Instagram, TikTok, LinkedIn y Facebook
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Creación de contenido viral y community management
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Reportes mensuales con KPIs de crecimiento
        </li>
      </ul>
    </div>
  );
}