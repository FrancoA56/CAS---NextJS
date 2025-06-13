import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import InicioE from "../../components/equipo/inicio";
import SecondE from "../../components/equipo/second";
import ThirdE from "../../components/equipo/third";
export default function Equipo() {
  return (
    <HorizontalScrollWrapper>
      {/* Sección 1 - Título */}
      <InicioE />

      {/* Sección 2 - Miembros del equipo (horizontal scroll) */}
      <SecondE />

      {/* Sección 3 - Filosofía de equipo */}
      <ThirdE />
    </HorizontalScrollWrapper>
  );
}
