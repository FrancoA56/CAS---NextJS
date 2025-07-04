import Image from "next/image";
import imagen1 from "../../media/opcion3inicio1.jpg";
import imagen2 from "../../media/opcion3inicio2.jpg";
import imagen3 from "../../media/opcion3inicio3.jpg";

export default function Opcion3() {
  return (
    <div className="h-screen w-full flex flex-col justify-between px-20 text-black text-center py-12 bg-blue">
      {/* Título */}
      <div className="h-auto flex flex-row items-start justify-center gap-12">
        <Image
          src={imagen1}
          alt="WholesaleColores"
          className="rounded-xl w-[23%] mt-8"
        ></Image>
        <Image
          src={imagen2}
          alt="WholesaleColores"
          className="rounded-xl w-[23%] "
        ></Image>
        <Image
          src={imagen3}
          alt="WholesaleColores"
          className="rounded-xl w-[23%] mt-8"
        ></Image>
      </div>

      {/* Texto al fondo alineado a la derecha */}
      <div className="flex flex-col items-end text-end w-full 2xl:pb-20 lg:pb-0 pt-6">
        <div className="font-bold text-5xl pr-28">COMUNICA</div>
        <div className="stroke text-6xl pr-28">LO QUE HACES</div>
        <div className="mt-2 text-right px-28 ">
          Una buena comunicación conecta, genera confianza y sobre todo hace que
          te elijan. Desde tu presentación institucional hasta cómo hablás en
          redes, tu web o tus eventos, te ayudamos a construir un discurso
          claro, alineado con tu marca y con impacto real.
        </div>
      </div>
    </div>
  );
}
