import { FaChartLine } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";
import corazon from "../../media/corazon.png";

export default function AnalisisDeAudiencia() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaChartLine className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Análisis de Audiencia</h2>
      <p className="text-2xl mb-6">
        Descubrimos quién es tu audiencia ideal y cómo se comporta en los
        distintos canales para optimizar tus campañas.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Investigación de mercado y segmentación
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Análisis de comportamiento en redes
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Reportes de métricas clave
        </li>
      </ul>
    </div>
  );
}
