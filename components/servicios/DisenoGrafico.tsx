import { FaPalette } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";
import corazon from "../../media/corazon.png";

export default function DisenoGrafico() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-white max-w-3xl text-center mb-12">
      <FaPalette className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Diseño Gráfico</h2>
      <p className="text-2xl mb-6">
        Creamos identidades visuales impactantes que comunican la esencia de tu 
        marca y captan la atención de tu audiencia.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Diseño de logotipos e identidad visual
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Materiales gráficos para redes sociales
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} />
          Diseño de banners y anuncios publicitarios
        </li>
      </ul>
    </div>
  );
}