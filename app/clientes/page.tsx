import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import InicioC from "../../components/clientes/inicio";
import SecondC from "../../components/clientes/second";

export default function Clientes({ prop }) {
  return (
    <HorizontalScrollWrapper>
      <InicioC />
      <SecondC />
    </HorizontalScrollWrapper>
  );
}
