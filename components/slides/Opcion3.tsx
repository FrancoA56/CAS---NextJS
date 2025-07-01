import Image from "next/image";
import imagen1 from "../../media/opcion3inicio1.jpg";
import imagen2 from "../../media/opcion3inicio2.jpg";
import imagen3 from "../../media/opcion3inicio3.jpg";

export default function Opcion3() {
  return (
    <div className="h-screen w-full flex flex-col justify-between px-40 text-black text-center py-12 bg-blue">
      {/* Título */}
      <div className="h-auto flex flex-row items-start justify-center gap-12">
        <Image
          src={imagen1}
          alt="WholesaleColores"
          className="rounded-xl w-[250px] mt-8"
        ></Image>
        <Image
          src={imagen2}
          alt="WholesaleColores"
          className="rounded-xl w-[250px] "
        ></Image>
        <Image
          src={imagen3}
          alt="WholesaleColores"
          className="rounded-xl w-[250px] mt-8"
        ></Image>
      </div>

      {/* Texto al fondo alineado a la derecha */}
      <div className="flex flex-col items-end text-end w-full ">
        <div className="font-bold text-5xl pr-32">COMUNICA</div>
        <div className="stroke text-6xl pr-32">LO QUE HACES</div>
        <div className="mt-2 text-right pr-32">
          Una buena comunicación conecta, genera confianza y sobre todo hace que{" "}
          <span className="font-bold">TE ELIJAN</span>, si sentís que al
          explicar lo que haces necesitas mas quealgunas frases estamos para
          ayudarte.
        </div>
      </div>
    </div>
  );
}
