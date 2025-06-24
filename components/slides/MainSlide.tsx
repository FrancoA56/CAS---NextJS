"use client";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import LogoCasBlanco from "../../media/CAS-logotipo-2.png";
import Image from "next/image";
import Link from "next/link";

export default function SlideMain() {
  const words = [
    "CREATIVOS",
    "AESTHETIC",
    "SOLUCIONES",
    "ICONIC",
    "CAS :)",
    "CAS :)",
    "CAS :)",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full h-full px-6 md:px-14 py-6">
      <div className="flex justify-between items-start w-full">
        {/* Logo arriba a la derecha */}
        <div className="flex justify-end w-full">
          <Link href="/">
            <Image
              src={LogoCasBlanco}
              alt="LogoCas"
              width={100}
              className="w-[80px] md:w-[100px]"
            />
          </Link>
        </div>
      </div>

      {/* Texto principal */}
      <div className="flex flex-col md:flex-row items-center w-full h-full mt-10">
        <div className="w-full md:w-2/3 flex flex-col items-end mb-8 md:mb-0 md:px-0 px-6">
          <h1 className="text-6xl md:text-8xl text-black uppercase font-[1000]">
            SOMOS
          </h1>
          <h1 className="text-5xl md:text-8xl text-gradient-cas uppercase custom-stroke">
            {words[index]}
          </h1>
        </div>

        <div className="mt-16 animate-bounce md:hidden inline">
          <FaChevronRight className="text-black text-2xl" />
        </div>
      </div>
    </div>
  );
}
