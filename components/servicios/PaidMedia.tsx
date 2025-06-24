import { FaBullhorn } from "react-icons/fa";
import Image from "next/image";
import tilde from "../../media/tilde.png";

export default function PaidMedia() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-black max-w-3xl text-center mb-12">
      <FaBullhorn className="text-teal-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-4xl font-bold mb-2">Campañas Publicitarias</h2>
      <p className="text-2xl mb-6">
        Maximizamos tu inversión en ads con estrategias data-driven y creatividades 
        que convierten en todos los canales digitales.
      </p>

      <ul className="text-left text-xl space-y-3">
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} className="hover:rotate-12"/>
          Campañas en Meta (Facebook/Instagram), Google y TikTok
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} className="hover:-rotate-12"/>
          Optimización en tiempo real para reducir costos
        </li>
        <li className="flex items-center gap-3">
          <Image src={tilde} alt="check" width={50} height={50} className="hover:rotate-12"/>
          Creatividades high-conversion y A/B testing
        </li>
      </ul>
    </div>
  );
}