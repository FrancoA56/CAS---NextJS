"use client";
import AnimatedVideo from "../video";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function SlideMain() {
  const words = ["CREATIVOS", "AESTHETIC", "SOLUCIONES", "ICONIC", "CAS :)"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 flex flex-col items-end mb-8 md:mb-0 md:px-0 px-14">
        <h1 className="text-6xl md:text-8xl text-white uppercase font-[1000] ">
          SOMOS
        </h1>
        <h1 className="text-5xl md:text-8xl text-white uppercase custom-stroke">
          {words[index]}
        </h1>{" "}
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-start">
        <AnimatedVideo />
      </div>
      <div className="mt-16 animate-bounce md:hidden inline">
        <FaChevronRight className="text-white text-2xl" />
      </div>
    </div>
  );
}
