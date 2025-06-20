"use client";
import { useRef, useEffect, useState } from "react";
import HorizontalScrollWrapper, {
  HorizontalScrollWrapperRef,
} from "../../components/HorizontalScrollWrapper";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import carpeta from "../../media/carpetaRellena.png";
import ServiceNav from "../../components/ServiceNav";
import AnalisisDeAudiencia from "../../components/servicios/AnalisisDeAudiencia";
import RedesSociales from "../../components/servicios/RedesSociales";
import EmailMarketing from "../../components/servicios/EmailMarketing";
import AsesoriaPersonalizada from "../../components/servicios/AsesoriaPersonalizada";
import CreacionDeContenido from "../../components/servicios/CreacionContenido";
import SitiosWeb from "../../components/servicios/SitiosWebYProgramación";
import DisenoGrafico from "../../components/servicios/DisenoGrafico";
import CampanasPublicitarias from "../../components/servicios/CampanasPublicitarias";

export default function Servicios() {
  const scrollRef = useRef<HorizontalScrollWrapperRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showNav, setShowNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">(
    "right"
  );
  const lastScrollLeft = useRef(0);

  const scrollTo = (index: number) => {
    setActiveIndex(index); // actualiza manualmente al hacer click
    scrollRef.current?.scrollToIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current?.getScrollableElement();
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollLeft;

      if (currentScroll > lastScrollLeft.current) {
        setScrollDirection("right");
      } else if (currentScroll < lastScrollLeft.current) {
        setScrollDirection("left");
      }

      lastScrollLeft.current = currentScroll;
      setShowNav(currentScroll > 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver para scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === visible.target
          );
          if (index !== -1) setActiveIndex(index);
        }
      },
      {
        threshold: 0.5, // 50% visible
        root: scrollRef.current?.getScrollableElement() ?? null,
        rootMargin: "0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const services = [
    { label: "Diseño Gráfico", Component: DisenoGrafico },
    { label: "Sitios Web", Component: SitiosWeb },
    { label: "Creación de contenido", Component: CreacionDeContenido },
    { label: "Analisis de audiencia", Component: AnalisisDeAudiencia },
    { label: "Email Marketing", Component: EmailMarketing },
    { label: "Redes Sociales", Component: RedesSociales },
    { label: "Campañas Publicitarias", Component: CampanasPublicitarias },
    { label: "Asesoria Personalizada", Component: AsesoriaPersonalizada },
  ];

  return (
    <>
      <HorizontalScrollWrapper ref={scrollRef}>
        <PageWrapper>
          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
          >
            <div className="sm:mb-0 mb-12">
              <div className="flex flex-col justify-center items-center md:text-6xl text-4xl md:mb-6 mb-2 text-white">
                <p className="custom-stroke">NUESTROS</p>
                <p className="font-bold">SERVICIOS</p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-x-2 md:mb-12 mb-0">
                {services.map(({ label }, index) => (
                  <div
                    key={index}
                    onClick={() => scrollTo(index + 1)}
                    className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] flex justify-center items-center text-center"
                  >
                    <Image
                      src={carpeta}
                      alt="Carpeta vacía"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    <span className="absolute text-white md:text-2xl text-lg font-semibold leading-tight">
                      {label.split(" ").slice(0, 2).join(" ")}
                      <br />
                      {label.split(" ").slice(2).join(" ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageWrapper>

        {services.map(({ Component }, i) => (
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
      </HorizontalScrollWrapper>

      <ServiceNav
        onSelect={scrollTo}
        activeIndex={activeIndex}
        selectedIndex={0}
        scrollDirection={scrollDirection}
      />
    </>
  );
}
