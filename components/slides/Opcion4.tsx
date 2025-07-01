import Image from "next/image";
import imagen1 from "../../media/opcion4Inicio1.png";
import imagen2 from "../../media/opcion4Inicio2.png";

export default function Opcion4() {
  return (
    <div className="h-screen w-full flex flex-col justify-between px-40 text-black text-center py-12 bg-pink">
      {/* Título */}
      {/* Texto al fondo alineado a la derecha */}
      <div className="flex flex-col items-end text-end w-full ">
        <div className="font-bold text-5xl pr-32">AHORRA</div>
        <div className="stroke text-6xl pr-32 ">TIEMPO Y RECURSOS</div>
        <div className="mt-2 text-right pr-32 w-2/3">
          Nuestro equipo es ideal para que el marketing en tu negocio ya no sea
          un problema. Pensamos en todo lo que tu marca necesita y lo podes
          encontrar en {" "}<span className="font-bold">CAS</span>.
        </div>
      </div>

      <div className="flex flex-row items-start gap-6">
        <Image
          src={imagen1}
          alt="WholesaleColores"
          className="rounded-xl w-[250px] z-0"
        ></Image>
        <Image
          src={imagen2}
          alt="WholesaleColores"
          className="rounded-xl relative right-14 w-[335px] z-10"
        ></Image>
      </div>
    </div>
  );
}
