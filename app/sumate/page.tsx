"use client";
import InicioSumate from "../../components/sumate/inicio";
import SecondSumate from "../../components/sumate/second";
import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";

export default function Sumate() {
  return (
    <HorizontalScrollWrapper>
      <InicioSumate />
      <SecondSumate />
    </HorizontalScrollWrapper>
  );
}
