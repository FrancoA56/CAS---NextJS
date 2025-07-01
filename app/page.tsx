"use client";
import HorizontalScrollWrapperInicio, {
  HorizontalScrollWrapperRef,
} from "../components/HorizontalScrollWrapperInicio";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import PageWrapperInicio from "../components/PageWrapperInicio";
import Footer from "../components/footer";
import SlideMain from "../components/slides/MainSlide";
import { useRef } from "react";
import Opcion1 from "../components/slides/Opcion1";
import Opcion2 from "../components/slides//Opcion2";
import Opcion3 from "../components/slides//Opcion3";
import Opcion4 from "../components/slides//Opcion4";
import Opcion5 from "../components/slides//Opcion5";
import slide2 from "../media/slide2.jpg";
import Image from "next/image";

export default function Home() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HorizontalScrollWrapperRef>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollToIndex(index);
  };

  const pink = "#EE8EC3";
  const green = "#A5E6A8";
  const teal = "#B791DD";
  const peach = "#FFC4AC";
  const blue = "#78C8D2";

  const ideales = [
    {
      label: "Atrae nuevos clientes",
      background: green,
      Component: Opcion1,
    },
    {
      label: "Mostra tu marca",
      background: teal,
      Component: Opcion2,
    },
    {
      label: "Comunica lo que haces",
      background: blue,
      Component: Opcion3,
    },
    {
      label: "Ahorra tiempo y recursos",
      background: pink,
      Component: Opcion4,
    },
    {
      label: "Posicionate",
      background: peach,
      Component: Opcion5,
    },
  ];

  return (
    <HorizontalScrollWrapperInicio ref={scrollRef}>
      <PageWrapper>
        <SlideMain />
      </PageWrapper>
      <PageWrapper>
        <div className="flex flex-row ">
          <div className="flex flex-col items-center justify-center w-full h-full text-center px-6 md:px-32">
            <h2 className="text-black text-3xl md:text-6xl font-extrabold uppercase mb-6">
              soluciones creativas
            </h2>
            <h2 className="text-gradient-cas text-3xl md:text-6xl font-extrabold uppercase mb-6">
              resultados reales
            </h2>
            <p className="text-black text-lg md:text-2xl max-text-3xl mb-10">
              En <span className="font-extrabold text-gradient-cas-ns">CAS</span>, no
              solo hacemos marketing, diseñamos experiencias que conectan marcas
              con personas. Nuestro enfoque es integral y creativo, combinando
              estrategia, diseño y contenido en un mismo equipo para garantizar
              la mejor solución.
            </p>
            <div className="flex flex-wrap justify-center gap-2 z-0 mx-32">
              {ideales.map(({ label, background }, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index + 2)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor:
                      hoveredIndex === index ? `${background}99` : background, // "33" = 20% opacidad en hex
                  }}
                  className="border border-black/30 px-6 py-3 rounded-sm text-black backdrop-blur-md text-sm sm:w-auto w-full transition-colors duration-300"
                >
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          <Image src={slide2} alt="slide2" height={650} className="relative left-24" />
        </div>
      </PageWrapper>
      {ideales.map(({ Component }, i) => (
        <PageWrapperInicio key={i}>
          <div
            ref={(el) => {
              sectionRefs.current[i + 1] = el ?? undefined;
            }}
          >
            <Component />
          </div>
        </PageWrapperInicio>
      ))}
      <PageWrapper>
        <Footer />
      </PageWrapper>
    </HorizontalScrollWrapperInicio>
  );
}
