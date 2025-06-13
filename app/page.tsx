"use client";
import HorizontalScrollWrapper, {
  HorizontalScrollWrapperRef,
} from "../components/HorizontalScrollWrapper";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/footer";
import SlideMain from "../components/slides/MainSlide";
import { useRef } from "react";
import Opcion1 from "../components/slides/Opcion1";
import Opcion2 from "../components/slides//Opcion2";
import Opcion3 from "../components/slides//Opcion3";
import Opcion4 from "../components/slides//Opcion4";

export default function Home() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HorizontalScrollWrapperRef>(null);

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollToIndex(index);
  };

  const ideales = [
    { label: "Generación de Leads Calificados", Component: Opcion1 },
    { label: "Posicionamiento y Visibilidad de Marca", Component: Opcion2 },
    { label: "Estrategia Comercial y Comunicación", Component: Opcion3 },
    { label: "Ahorro de Tiempo y Recursos", Component: Opcion4 },
  ];

  return (
    <HorizontalScrollWrapper ref={scrollRef}>
      <PageWrapper>
        <SlideMain />
      </PageWrapper>
      <PageWrapper>
        <div className="flex flex-col items-center justify-center w-full h-full text-center px-6 md:px-32">
          <h2 className="text-white text-3xl md:text-6xl font-extrabold uppercase mb-6">
            Impulsamos marcas con estrategia, diseño y creatividad.
          </h2>
          <p className="text-white text-lg md:text-2xl max-w-3xl mb-10">
            En <span className="font-bold">CAS</span>, creamos experiencias
            visuales y campañas que conectan con tu audiencia. Combinamos
            análisis, creatividad y tecnología para generar impacto real.
          </p>
          <div className="flex flex-wrap sm:grid sm:grid-cols-2 justify-center gap-4">
            {ideales.map(({ label }, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index + 2)}
                className="bg-white/10 border border-white/20 px-6 py-4 rounded-xl text-white text-sm backdrop-blur-md sm:w-auto w-full"
              >
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </PageWrapper>
      {ideales.map(({ Component }, i) => (
        <PageWrapper key={i}>
          <div
            ref={(el) => {
              sectionRefs.current[i + 1] = el ?? undefined;
            }}
          >
            <Component />
          </div>
        </PageWrapper>
      ))}
      <PageWrapper>
        <Footer />
      </PageWrapper>
    </HorizontalScrollWrapper>
  );
}
