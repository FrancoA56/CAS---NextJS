"use client";
import HorizontalScrollWrapperInicio, {
  HorizontalScrollWrapperRefInicio,
} from "../components/HorizontalScrollWrapperInicio";
import HorizontalScrollWrapper, {
  HorizontalScrollWrapperRef,
} from "../components/HorizontalScrollWrapper";
import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import PageWrapperInicio from "../components/PageWrapperInicio";
import Footer from "../components/footer";
import SlideMain from "../components/slides/MainSlide";
import { useRef } from "react";
import Opcion1 from "../components/slides/Opcion1";
import Opcion3 from "../components/slides//Opcion3";
import Opcion4 from "../components/slides//Opcion4";
import Opcion5 from "../components/slides//Opcion5";
import SecondSlide from "../components/slides/SecondSlide";
import ImagesCol from "../components/slides/ImagesCol";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAS - Marketing & Design",
  description: "Agencia de marketing y diseño. Potenciamos tu marca.",
};

export default function Home() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRefInicio = useRef<HorizontalScrollWrapperRefInicio>(null);
  const scrollRef = useRef<HorizontalScrollWrapperRef>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToInicio = (index: number) => {
    scrollRefInicio.current?.scrollToIndex(index);
  };
  const scrollTo = (index: number) => {
    scrollRef.current?.scrollToIndex(index);
  };

  const goTo = () => {
    sectionRefs.current[1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const pink = "#EE8EC3";
  const green = "#A5E6A8";
  const teal = "#B791DD";
  const blue = "#78C8D2";

  const ideales = [
    {
      label: "Atrae nuevos clientes",
      background: green,
      Component: Opcion1,
    },
    {
      label: "Comunica lo que haces",
      background: blue,
      Component: Opcion3,
    },
    {
      label: "Ahorrá tiempo y recursos",
      background: pink,
      Component: Opcion4,
    },
    {
      label: "Posicionate",
      background: teal,
      Component: Opcion5,
    },
  ];

  return (
    <>
      <div className="hidden md:flex">
        <HorizontalScrollWrapperInicio ref={scrollRefInicio}>
          <PageWrapper>
            <SlideMain goTo={goTo} />
          </PageWrapper>
          <PageWrapper>
            <SecondSlide
              ideales={ideales}
              scrollTo={scrollToInicio}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </PageWrapper>
          {ideales.map(({ Component }, i) => (
            <React.Fragment key={i}>
              <PageWrapperInicio>
                <div
                  ref={(el) => {
                    sectionRefs.current[i + 1] = el ?? undefined;
                  }}
                >
                  <Component />
                </div>
              </PageWrapperInicio>
              {i === 0 && <ImagesCol />}
            </React.Fragment>
          ))}

          <PageWrapper>
            <Footer />
          </PageWrapper>
        </HorizontalScrollWrapperInicio>
      </div>
      <div className="flex md:hidden">
        <HorizontalScrollWrapper ref={scrollRef}>
          <PageWrapper>
            <SlideMain goTo={goTo} />
          </PageWrapper>
          <PageWrapper>
            <SecondSlide
              ideales={ideales}
              scrollTo={scrollTo}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </PageWrapper>
          {ideales.map(({ Component }, i) => (
            <React.Fragment key={i}>
              <PageWrapperInicio>
                <div
                  ref={(el) => {
                    sectionRefs.current[i + 1] = el ?? undefined;
                  }}
                >
                  <Component />
                </div>
              </PageWrapperInicio>
            </React.Fragment>
          ))}

          <PageWrapper>
            <Footer />
          </PageWrapper>
        </HorizontalScrollWrapper>
      </div>
    </>
  );
}
