import Image from "next/image";
import imagen1 from "../../media/colorWholesale.png";

export default function Opcion2() {
  return (
    <div className="h-screen w-full flex flex-col justify-start px-40 text-black text-center py-12 bg-teal">
      {/* Título */}
      <div className="flex flex-col items-center justify-center mt-12 px-44">
        <Image
          src={imagen1}
          alt="WholesaleColores"
          className="rounded-xl"
        ></Image>
      </div>

      {/* Texto al fondo alineado a la derecha */}
      <div className="flex flex-col items-end w-full mt-12">
        <div className="font-bold text-5xl">MOSTRA</div>
        <div className="stroke text-6xl">TU MARCA</div>
        <div className="mt-2 w-3/4 text-right">
          Creamos identidades visuales que halan por vos. Trabajamos para quetu
          marca se vea unificada y profesional pero sobre todo para
          serrecordable.
        </div>
      </div>
    </div>
  );
}
