"use client";
import HorizontalScrollWrapperInicio, {
  HorizontalScrollWrapperRef,
} from "../components/HorizontalScrollWrapperInicio";
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
    <HorizontalScrollWrapperInicio ref={scrollRef}>
      <PageWrapper>
        <SlideMain />
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
          {i === 0 && <ImagesCol />}
        </React.Fragment>
      ))}

      <PageWrapper>
        <Footer />
      </PageWrapper>
    </HorizontalScrollWrapperInicio>
  );
}
