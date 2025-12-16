import Link from "next/link";
import Image from "next/image";
import instagram from "../../media/Instagram_icon.webp";
import tiktok from "../../media/tiktok.png";
import linkedin from "../../media/LinkedIn_icon.png";
import instagram2 from "../../media/Instagram.webp";
import tiktok2 from "../../media/Tiktok.webp";
import linkedin2 from "../../media/Linkedin.webp";
import imagen1 from "../../media/MaterialWeb/celuSocialMedia1.png";
import imagen2 from "../../media/MaterialWeb/celuSocialMedia2.png";
import imagen3 from "../../media/MaterialWeb/celuSocialMedia3.png";
import { useIsIOS } from "../../hooks/useIsIOS";

export default function RedesSociales() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      <div className="hidden md:flex md:flex-row  px-44 py-12 w-screen items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start md:w-1/2 w-full ml-12 mr-12">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-pink">
            SOCIAL
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-pink">
            MEDIA
          </h2>
          <ul className="text-lg 3xl:text-xl list-disc list-inside mb-6">
            <li>Estrategia de contenidos para cada red social.</li>
            <li>Planificación y calendarización.</li>
            <li>Redacción de copys con tono y voz de marca.</li>
            <li>Gestión y publicación en redes sociales.</li>
            <li>Análisis de métricas y reportes.</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-pink rounded-sm border text-lg 3xl:text-xl border-black py-3 px-4 hover:bg-pink/80 transition-colors ease-in-out">
              Contactanos {">"}
              {">"}
            </button>
          </Link>
        </div>
        <div className="relative w-[500px] h-[500px] 3xl:w-[600px] 3xl:h-[600px]">
          {/* 1. Arriba a la izquierda */}
          <div className="absolute top-0 3xl:-top-10 left-0 3xl:-left-10">
            <div className="flip-container w-48 3xl:w-72 h-48 3xl:h-72 pointer-events-auto">
              <div className="flipper rotate-on-hover transition-transform duration-700">
                <div className="front">
                  <Image
                    src={instagram}
                    alt="Front"
                    className="w-48 3xl:w-56 h-48 3xl:h-56"
                  />
                </div>
                <div className="back">
                  <Image
                    src={instagram2}
                    alt="Back"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Derecha, más abajo */}
          <div className="absolute top-20 3xl:-right-8 right-10 ">
            <div className="flip-container w-48 3xl:w-72 h-48 3xl:h-72 pointer-events-auto">
              <div className="flipper rotate-on-hover transition-transform duration-700">
                <div className="front">
                  <Image
                    src={linkedin}
                    alt="Front"
                    className="w-40 3xl:w-52 h-40 3xl:h-52 justify-center items-center"
                  />
                </div>
                <div className="back">
                  <Image
                    src={linkedin2}
                    alt="Back"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Abajo izquierda, más a la derecha que el primero */}
          <div className="absolute 3xl:bottom-0 bottom-16 left-16">
            <div className="flip-container w-48 3xl:w-72 h-48 3xl:h-72 pointer-events-auto">
              <div className="flipper rotate-on-hover transition-transform duration-700">
                <div className="front">
                  <Image
                    src={tiktok}
                    alt="Front"
                    className="w-36 3xl:w-44 h-36 3xl:h-44"
                  />
                </div>
                <div className="back">
                  <Image
                    src={tiktok2}
                    alt="Back"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isIOS ? (
        <div className="flex flex-col md:hidden px-6 pb-12 w-screen items-center mt-6">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-start w-full">
            <h2 className="text-4xl font-bold mb-1 text-pink">SOCIAL</h2>
            <h2 className="text-4xl font-bold mb-2 custom-stroke-pink">
              MEDIA
            </h2>
            <ul className="list-disc list-inside mb-2">
              <li>Estrategia de contenidos para cada red social.</li>
              <li>Planificación y calendarización.</li>
              <li>Redacción de copys con tono y voz de marca.</li>
              <li>Gestión y publicación en redes sociales.</li>
              <li>Análisis de métricas y reportes.</li>
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
      ) : (
        <div className="flex flex-col md:hidden px-6 pb-12 w-screen items-center">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-start w-full mt-12">
            <h2 className="text-6xl font-bold mb-2 text-pink">SOCIAL</h2>
            <h2 className="text-6xl font-bold mb-6 custom-stroke-pink">
              MEDIA
            </h2>
            <ul className="text-lg list-disc list-inside mb-6">
              <li>Estrategia de contenidos para cada red social.</li>
              <li>Planificación y calendarización.</li>
              <li>Redacción de copys con tono y voz de marca.</li>
              <li>Gestión y publicación en redes sociales.</li>
              <li>Análisis de métricas y reportes.</li>
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
      )}
    </>
  );
}
