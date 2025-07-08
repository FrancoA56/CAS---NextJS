import Link from "next/link";
import Image from "next/image";
import image1 from "../../media/compuDisenoWeb.png";

export default function DisenioWeb() {
  return (
    <>
      <div className="hidden md:flex md:flex-row">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={image1} alt="compu" className="ml-44 w-[80%] "></Image>
        </div>
        <div className="flex flex-col items-end justify-center text-end px-12 text-black w-1/2 mr-12">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-blue">
            DISEÑO{" "}
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-blue">
            {" "}
            WEB
          </h2>
          <ul className="text-lg 3xl:text-xl list-disc list-inside mb-6" dir="rtl">
            <li className="text-right">Diseño UX/UI personalizado</li>
            <li className="text-right">
              Estructura clara y navegación optimizada
            </li>
            <li className="text-right">
              Desarrollo responsive (adaptado a todos los dispositivos)
            </li>
            <li className="text-right">
              Integración con herramientas externas (formularios, CRM,
              ecommerce, etc.)
            </li>
            <li className="text-right">
              Optimización de velocidad, SEO y performance
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue text-lg 3xl:text-xl rounded-sm border border-black py-3 px-4 hover:bg-blue/80 transition-colors ease-in-out">
              No dudes en consultarnos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex flex-col mb-16">
        <div className="flex justify-center items-center ">
          <Image src={image1} alt="compu" className="w-2/3 pb-12"></Image>
        </div>
        <div className="flex flex-col items-end justify-center text-end px-12 text-black">
          <h2 className="text-6xl font-bold mb-2 text-blue">
            DISEÑO{" "}
          </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-blue">
            {" "}
            WEB
          </h2>
          <ul className="text-lg list-disc list-inside mb-6" dir="rtl">
            <li className="text-right">Diseño UX/UI personalizado</li>
            <li className="text-right">
              Estructura clara y navegación optimizada
            </li>
            <li className="text-right">
              Desarrollo responsive (adaptado a todos los dispositivos)
            </li>
            <li className="text-right">
              Integración con herramientas externas (formularios, CRM,
              ecommerce, etc.)
            </li>
            <li className="text-right">
              Optimización de velocidad, SEO y performance
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue rounded-sm border border-black py-3 px-4 hover:bg-blue/80 transition-colors ease-in-out">
              No dudes en consultarnos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
