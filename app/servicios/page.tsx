"use client";
import { useRef, useEffect, useState } from "react";
import HorizontalScrollWrapperServices, {
  HorizontalScrollWrapperRef,
} from "../../components/HorizontalScrollWrapperServices";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import ServiceNav from "../../components/ServiceNav";
import RedesSociales from "../../components/servicios/RedesSociales";
import EmailMarketing from "../../components/servicios/EmailMarketing";
import AsesoriaPersonalizada from "../../components/servicios/AsesoriaPersonalizada";
import CreacionDeContenido from "../../components/servicios/CreacionContenido";
import SitiosWeb from "../../components/servicios/SitiosWebYProgramación";
import DisenoGrafico from "../../components/servicios/DisenoGrafico";
import PaidMedia from "../../components/servicios/PaidMedia";
import CarpetaRosa from "../../media/carpetas/rosa1.png";
import CarpetaAmarillo from "../../media/carpetas/amarillo1.png";
import CarpetaAzul from "../../media/carpetas/azul1.png";
import CarpetaVerde from "../../media/carpetas/verde1.png";
import CarpetaVioleta from "../../media/carpetas/violeta1.png";
import CarpetaSalmon from "../../media/carpetas/salmon1.png";

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
    {
      label: "Diseño Gráfico",
      Component: DisenoGrafico,
      image: CarpetaAmarillo,
    },
    {
      label: "Email Marketing",
      Component: EmailMarketing,
      image: CarpetaVerde,
    },
    { label: "Social Media", Component: RedesSociales, image: CarpetaRosa },
    { label: "Diseño Web", Component: SitiosWeb, image: CarpetaAzul },
    { label: "Paid Media", Component: PaidMedia, image: CarpetaVioleta },
    { label: "Contenido", Component: CreacionDeContenido, image: CarpetaAzul },
    {
      label: "Asesorias",
      Component: AsesoriaPersonalizada,
      image: CarpetaSalmon,
    },
  ];

  return (
    <>
      <HorizontalScrollWrapperServices ref={scrollRef}>
        <PageWrapper>
          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
          >
            <div className="sm:mb-0 mb-12">
              <div className="flex flex-col justify-center items-center md:text-6xl text-4xl md:mb-6 mb-2 ">
                <p className="font-bold">NUESTROS</p>
                <p className="text-gradient-cas custom-stroke ">SERVICIOS</p>
              </div>
              {/* Dividir en dos filas */}
              <div className="flex flex-col gap-4 md:mb-12 mb-0">
                {/* Primera fila - 4 carpetas */}
                <div className="flex justify-center md:justify-between gap-4">
                  {services.slice(0, 4).map(({ label, image }, index) => (
                    <div
                      key={index}
                      onClick={() => scrollTo(index + 1)}
                      className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] flex justify-center items-center text-center"
                    >
                      <Image
                        src={image}
                        alt="Carpeta"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                      <span className="absolute text-black md:text-2xl text-lg leading-tight mt-3">
                        {label.split(" ").slice(0, 1).join(" ")}
                        <br />
                        {label.split(" ").slice(1)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Segunda fila - 3 carpetas centradas */}
                <div className="flex justify-center gap-4">
                  {services.slice(4).map(({ label, image }, index) => (
                    <div
                      key={index + 4}
                      onClick={() => scrollTo(index + 5)} // índice ajustado por el slice
                      className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] flex justify-center items-center text-center"
                    >
                      <Image
                        src={image}
                        alt="Carpeta"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                      <span className="absolute text-black md:text-2xl text-lg leading-tight mt-3">
                        {label.split(" ").slice(0, 1).join(" ")}
                        <br />
                        {label.split(" ").slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
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
      </HorizontalScrollWrapperServices>

      <ServiceNav
        onSelect={scrollTo}
        activeIndex={activeIndex}
        selectedIndex={0}
        scrollDirection={scrollDirection}
      />
    </>
  );
}
