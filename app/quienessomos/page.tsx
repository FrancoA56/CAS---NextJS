import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import InicioQS from "../../components/quienessomos/inicio";
import SecondQS from "../../components/quienessomos/second";
import ThirdQS from "../../components/quienessomos/third";

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
