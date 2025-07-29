"use client";
import { FaChevronRight } from "react-icons/fa";

export default function InicioSumate() {
   return (
    <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
      <div className="text-center">
        <div className="flex flex-col justify-center items-center  mb-6 ">
          <p className="font-bold text-6xl 3xl:text-7xl">SUMATE</p>
          <p className="text-gradient-cas text-6xl 3xl:text-8xl">AL TEAM</p>
        </div>
        <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto">
          Te invitamos a trabajar con nosotros
        </p>
      </div>
      <div className="mt-16 animate-bounce">
        <FaChevronRight className="text-black text-4xl" />
      </div>
    </div>
  );
}
