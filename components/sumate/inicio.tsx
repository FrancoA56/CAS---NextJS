"use client";
import { FaChevronRight } from "react-icons/fa";

export default function InicioSumate() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col px-4">
      <div className="flex flex-row justify-center items-center  mb-6 ">
        <div className="font-bold text-6xl 3xl:text-8xl mr-4">SUMATE </div>
        <p className="text-gradient-cas text-6xl 3xl:text-8xl">AL TEAM</p>
      </div>
      <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto">
        Te invitamos a trabajar con nosotros
      </p>
      <div className="mt-16 animate-bounce">
        <FaChevronRight className="text-black text-4xl" />
      </div>
    </div>
  );
}
