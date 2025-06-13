import { FaEnvelopeOpenText } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function EmailMarketing() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaEnvelopeOpenText className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Email Marketing</h2>
      <p className="text-2xl mb-6">
        Potenciamos tu comunicación directa con campañas segmentadas que aumentan 
        engagement, conversiones y fidelización.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Automatizaciones y flujos de nutrición (drip campaigns)
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Diseño responsive y plantillas personalizadas
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Análisis de métricas clave (open rate, CTR, conversión)
        </li>
      </ul>
    </div>
  );
}