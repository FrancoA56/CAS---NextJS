import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import InicioQS from "../../components/quienessomos/inicio";
import SecondQS from "../../components/quienessomos/second";
import ThirdQS from "../../components/quienessomos/third";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quienes Somos | CAS Marketing",
  description: "Nuestros Valores, Mision y Vision"
}

export default function QuienesSomos() {
  return (
    <HorizontalScrollWrapper>
      {/* Sección 1 - Título principal */}
      <InicioQS />

      {/* Sección 2 - Filosofía */}
      <SecondQS />

      {/* Sección 3 - Enfoque */}
      <ThirdQS />
    </HorizontalScrollWrapper>
  );
}
