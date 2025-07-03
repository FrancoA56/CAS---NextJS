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
import SecondSlide from "../components/slides/SecondSlide";
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
        <PageWrapper>
          <SecondSlide
            ideales={ideales}
            scrollTo={scrollTo}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </PageWrapper>
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
