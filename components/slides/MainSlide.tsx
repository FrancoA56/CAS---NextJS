"use client";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import LogoCasBlanco from "../../media/CAS-logotipo-2.png";
import Image from "next/image";
import Link from "next/link";

type SlideMainProps = { goTo: (index: number) => void };

export default function SlideMain({ goTo }: SlideMainProps) {
  const words = [
    "CREATIVOS",
    "AESTHETIC",
    "SOLUCIONES",
    "ESTRATEGIA",
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
    <div className="flex flex-col w-full h-[100dvh] px-6 md:px-14 py-6">
      <div className="flex justify-between items-start w-full">
        {/* Logo arriba a la derecha */}
        <div className="flex justify-end w-full mt-4">
          <Link href="/">
            <Image
              src={LogoCasBlanco}
              alt="LogoCas"
              width={100}
              className="w-[80px] md:w-[100px] 3xl:w-[130px]"
            />
          </Link>
        </div>
      </div>

      {/* Texto principal */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-[100dvh]">
        <div className="w-full md:w-2/3  flex flex-col items-end mb-8 md:mb-0 md:px-0 px-6 2xl:px-24 3xl:px-32">
          <h1 className="text-6xl md:text-8xl 3xl:text-9xl text-black uppercase font-[1000]">
            SOMOS
          </h1>
          <h1 className="text-5xl md:text-8xl 3xl:text-9xl text-gradient-cas uppercase ">
            {words[index]}
          </h1>
        </div>

        <div className="pt-16 animate-bounce md:hidden inline">
          <button onClick={() => goTo(1)} aria-label="Ir a la segunda slide">
            <FaChevronRight className="text-black text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
