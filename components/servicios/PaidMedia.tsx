import Link from "next/link";
import Image from "next/image";
import image1 from "../../media/MaterialWeb/graficosPaidMedia.png";

export default function PaidMedia() {
  return (
    <>
      <div className="md:flex md:flex-row hidden w-full px-8 py-12 items-center justify-between">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-2/5 w-full ml-32">
          <h2 className="text-7xl 3xl:text-8xl font-bold mb-2 text-teal">
            PAID
          </h2>
          <h2 className="text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-teal">
            MEDIA
          </h2>
          <ul className="text-lg 3xl:text-xl list-disc list-inside mb-6">
            <li>
              Configuración y gestión de campañas en Google, Meta, LinkedIn y
              más
            </li>
            <li>Testeo A/B de creatividades, copys y audiencias</li>
            <li>Optimización constante basada en KPIs</li>
            <li>Segmentación estratégica</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-teal text-lg 3xl:text-xl rounded-sm border border-black py-3 px-4 hover:bg-teal/80 transition-colors ease-in-out">
              Potenciá tus ventas {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="md:w-3/5 w-full flex justify-center">
          <Image src={image1} alt="graficos" className="mx-12"></Image>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-full px-8 pb-16 items-center justify-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-start text-black text-left mb-12 w-full">
          <h2 className="text-6xl font-bold mb-2 text-teal">PAID</h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-teal">MEDIA</h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>
              Configuración y gestión de campañas en Google, Meta, LinkedIn y
              más
            </li>
            <li>Testeo A/B de creatividades, copys y audiencias</li>
            <li>Optimización constante basada en KPIs</li>
            <li>Segmentación estratégica</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-teal rounded-sm border border-black py-3 px-4 hover:bg-teal/80 transition-colors ease-in-out">
              Potenciá tus ventas {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="md:w-3/5 w-full flex justify-center">
          <Image src={image1} alt="graficos" className="mx-12"></Image>
        </div>
      </div>
    </>
  );
}
