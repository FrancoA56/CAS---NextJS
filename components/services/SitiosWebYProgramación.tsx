import { FaCode } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function SitioWebYProgramacion() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaCode className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Desarrollo Web & Programación</h2>
      <p className="text-2xl mb-6">
        Construimos sitios web rápidos, seguros y escalables con tecnología de punta, 
        optimizados para conversiones y SEO.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Desarrollo a medida con React/Next.js, Node.js y bases de datos
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Landing pages de alta conversión (hasta 3x más leads)
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Integración con APIs, pasarelas de pago y CRM
        </li>
      </ul>
    </div>
  );
}