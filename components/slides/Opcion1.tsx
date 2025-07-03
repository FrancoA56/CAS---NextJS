"use client";
import Image from "next/image";
import celular from "../../media/pantalla-celu.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaGlobe,
} from "react-icons/fa";

export default function Opcion1() {
  return (
    <div className="h-screen w-full bg-green py-12 px-24 relative overflow-visible">
      {/* Contenido textual */}
      <div className="flex flex-col px-6 md:px-20 2xl:px-44 xl-24 text-black justify-between gap-20 text-center">
        <div className="flex flex-col items-start text-start mt-12">
          <div className="font-bold text-5xl md:text-5xl">ATRAE</div>
          <div className="stroke text-6xl md:text-6xl">NUEVOS CLIENTES</div>
          <div className="w-full md:w-3/4 mt-2 text-start text-lg">
            Generamos oportunidades combinando estrategia, creatividad y
            performance para que tu marca gane visibilidad, conecte con la
            audiencia correcta y consiga resultados reales.
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-3xl text-black">
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-blue-800 cursor-pointer transition-colors" />
            <FaTiktok className="hover:text-black cursor-pointer transition-colors" />
            <FaGlobe className="hover:text-green-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Contenedor del celular y video */}
      <div
        className="absolute z-10 
        left-1/2 transform -translate-x-1/2 
       2xl:left-[95%] lg:left-[93%] md:-translate-x-1/4 
        bottom-[-100px] xl:-bottom-[20%] 2xl:bottom-[5%]"
      >
        <div className="relative w-[270px] h-[650px]">
          <video
            width="217"
            height="330"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="absolute left-8 top-[16px] rounded-lg"
          >
            <source src="/video/wholesale.webm" type="video/webm" />
            <source src="/video/wholesale.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={celular}
            alt="marco celular"
            className="pointer-events-none absolute left-1 top-[0px] h-[419px]"
          />
        </div>
      </div>
    </div>
  );
}
