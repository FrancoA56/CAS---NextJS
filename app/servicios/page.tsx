"use client";
import { useRef, useEffect, useState } from "react";
import HorizontalScrollWrapper, {
  HorizontalScrollWrapperRef,
} from "../../components/HorizontalScrollWrapper";
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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Servicios | CAS Marketing",
  description: "Los servicios en los que nos especializamos."
}

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
  const [isIOS, setIsIOS] = useState<boolean | null>(null);

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

    // Leer de localStorage primero
    const storedIsIOS = localStorage.getItem("isIOS");
    if (storedIsIOS !== null) {
      setIsIOS(storedIsIOS === "true");
    } else {
      // Si no existe en localStorage, detectar y guardar
      const detected = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsIOS(detected);
      localStorage.setItem("isIOS", detected.toString());
    }

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          // Fallback: no hay ninguna sección visible → asumimos la inicial
          setActiveIndex(0);
          return;
        }

        const visible = visibleEntries[0];
        const index = sectionRefs.current.findIndex(
          (ref) => ref === visible.target
        );

        if (index !== -1) setActiveIndex(index);
      },
      {
        threshold: 0.9, // podés mantener esto más tolerante también
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
      label: "Asesorías",
      Component: AsesoriaPersonalizada,
      image: CarpetaSalmon,
    },
  ];

  return (
    <>
      <HorizontalScrollWrapper ref={scrollRef}>
        <PageWrapper>
          {/* Desktop */}

          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
            className="hidden sm:flex"
          >
            <div className="sm:mb-0 mb-12">
              <div className="flex flex-col justify-center items-center  mb-6 ">
                <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
                <p className="text-gradient-cas text-6xl 3xl:text-8xl">
                  SERVICIOS
                </p>
              </div>
              {/* Dividir en dos filas */}
              <div className="flex flex-col gap-4 mb-12">
                {/* Primera fila - 4 carpetas */}
                <div className="flex justify-between gap-4">
                  {services.slice(0, 4).map(({ label, image }, index) => (
                    <div
                      key={index}
                      onClick={() => scrollTo(index + 1)}
                      className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] 3xl:w-[220px] 3xl:h-[220px] flex justify-center items-center text-center"
                    >
                      <Image
                        src={image}
                        alt="Carpeta"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                      <span className="absolute text-black md:text-2xl 3xl:text-3xl text-lg leading-tight mt-3">
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
                      className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] 3xl:w-[220px] 3xl:h-[220px] flex justify-center items-center text-center"
                    >
                      <Image
                        src={image}
                        alt="Carpeta"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                      <span className="absolute text-black md:text-2xl 3xl:text-3xl text-lg leading-tight mt-3">
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

          {/* Movil */}
          {isIOS ? (
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="sm:hidden flex"
            >
              <div className="flex flex-col justify-center pb-24">
                <div className="flex flex-col justify-center items-center text-4xl mb-2 mt-20">
                  <p className="font-bold">NUESTROS</p>
                  <p className="text-gradient-cas custom-stroke ">SERVICIOS</p>
                </div>
                {/* Dividir en dos filas */}
                <div className="flex flex-col gap-1 md:mb-12 mb-0">
                  {/* Primera fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(0, 2).map(({ label, image }, index) => (
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
                  {/* Segunda fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(2, 4).map(({ label, image }, index) => (
                      <div
                        key={index}
                        onClick={() => scrollTo(index + 3)}
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
                  {/* Tercera fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(4, 6).map(({ label, image }, index) => (
                      <div
                        key={index}
                        onClick={() => scrollTo(index + 5)}
                        className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] flex justify-center items-center text-center"
                      >
                        <Image
                          src={image}
                          alt="Carpeta"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                        <span className="absolute text-black text-lg leading-tight mt-3">
                          {label.split(" ").slice(0, 1).join(" ")}
                          <br />
                          {label.split(" ").slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cuarta fila - 1 carpetas centradas */}
                  <div className="flex justify-center">
                    {services.slice(6).map(({ label, image }, index) => (
                      <div
                        key={index + 4}
                        onClick={() => scrollTo(index + 7)} // índice ajustado por el slice
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
          ) : (
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="sm:hidden flex"
            >
              <div className="flex flex-col justify-center pb-24">
                <div className="flex flex-col justify-center items-center text-4xl mb-2 ">
                  <p className="font-bold">NUESTROS</p>
                  <p className="text-gradient-cas custom-stroke ">SERVICIOS</p>
                </div>
                {/* Dividir en dos filas */}
                <div className="flex flex-col gap-1 mb-0">
                  {/* Primera fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(0, 2).map(({ label, image }, index) => (
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
                  {/* Segunda fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(2, 4).map(({ label, image }, index) => (
                      <div
                        key={index}
                        onClick={() => scrollTo(index + 3)}
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
                  {/* Tercera fila - 2 carpetas */}
                  <div className="flex justify-center gap-4">
                    {services.slice(4, 6).map(({ label, image }, index) => (
                      <div
                        key={index}
                        onClick={() => scrollTo(index + 5)}
                        className="cursor-pointer hover:rotate-12 transition-transform relative md:w-[190px] w-[130px] md:h-[190px] h-[130px] flex justify-center items-center text-center"
                      >
                        <Image
                          src={image}
                          alt="Carpeta"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                        <span className="absolute text-black text-lg leading-tight mt-3">
                          {label.split(" ").slice(0, 1).join(" ")}
                          <br />
                          {label.split(" ").slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cuarta fila - 1 carpetas centradas */}
                  <div className="flex justify-center">
                    {services.slice(6).map(({ label, image }, index) => (
                      <div
                        key={index + 4}
                        onClick={() => scrollTo(index + 7)} // índice ajustado por el slice
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
          )}
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
