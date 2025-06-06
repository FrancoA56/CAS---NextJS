import { FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function AsesoriaPersonalizada() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaHandsHelping className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Asesoría Personalizada</h2>
      <p className="text-2xl mb-6">
        Te guiamos paso a paso en tu estrategia digital con soluciones adaptadas a tus necesidades específicas.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Sesiones 1:1 con expertos en marketing
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Planes de acción personalizados
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Seguimiento y ajustes continuos
        </li>
      </ul>
    </div>
  );
}