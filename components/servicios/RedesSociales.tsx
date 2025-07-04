import Link from "next/link";
import Image from "next/image";
import imagen1 from "../../media/MaterialWeb/celuSocialMedia1.png";
import imagen2 from "../../media/MaterialWeb/celuSocialMedia2.png";
import imagen3 from "../../media/MaterialWeb/celuSocialMedia3.png";

export default function RedesSociales() {
  return (
    <>
      <div className="hidden md:flex md:flex-row  px-44 py-12 w-screen items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start md:w-1/2 w-full md:ml-0 ml-8 mr-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-2 text-pink">
            SOCIAL
          </h2>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-pink">
            MEDIA
          </h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>Estrategia de contenidos para cada red social</li>
            <li>Planificación y calendarización</li>
            <li>Redacción de copys con tono y voz de marca</li>
            <li>Gestión y publicación en redes sociales</li>
            <li>Análisis de métricas y reportes</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-pink rounded-sm border border-black py-3 px-4 hover:bg-pink/80 transition-colors ease-in-out">
              Contactanos {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Celulares */}
        <div className="md:w-1/2 w-full relative h-[500px] mx-20">
          {" "}
          {/* Imagen izquierda - abajo */}
          <Image
            src={imagen1}
            alt="celular"
            className="absolute bottom-0 left-0 w-[120px] md:w-[200px]"
          />
          {/* Imagen central - centro medio */}
          <Image
            src={imagen2}
            alt="celular"
            className="absolute left-1/3 top-1/2 w-[120px] md:w-[200px] transform  -translate-y-1/2"
          />
          {/* Imagen derecha - arriba */}
          <Image
            src={imagen3}
            alt="celular"
            className="absolute top-0 left-2/3 w-[120px] md:w-[200px]"
          />
        </div>
      </div>


      <div className="flex flex-col md:hidden px-8 pb-12 w-screen items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start w-full">
          <h2 className="text-6xl font-bold mb-2 text-pink">
            SOCIAL
          </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-pink">
            MEDIA
          </h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>Estrategia de contenidos para cada red social</li>
            <li>Planificación y calendarización</li>
            <li>Redacción de copys con tono y voz de marca</li>
            <li>Gestión y publicación en redes sociales</li>
            <li>Análisis de métricas y reportes</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-pink rounded-sm border border-black py-3 px-4 hover:bg-pink/80 transition-colors ease-in-out">
              Contactanos {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Celulares */}
        <div className="md:w-1/2 w-full relative h-80">
          {" "}
          {/* Imagen izquierda - abajo */}
          <Image
            src={imagen1}
            alt="celular"
            className="absolute bottom-0 left-0 w-[120px] md:w-[200px]"
          />
          {/* Imagen central - centro medio */}
          <Image
            src={imagen2}
            alt="celular"
            className="absolute left-1/3 top-1/2 w-[120px] md:w-[200px] transform  -translate-y-1/2"
          />
          {/* Imagen derecha - arriba */}
          <Image
            src={imagen3}
            alt="celular"
            className="absolute top-0 left-2/3 w-[120px] md:w-[200px]"
          />
        </div>
      </div>
    </>
  );
}
