import Image from "next/image";
import Link from "next/link";
import imagen1 from "../../media/google.jpg";

export default function Opcion5() {
  return (
    <div className="h-screen w-full flex flex-row px-20 text-black text-center py-12 bg-peach">
      <div className="flex flex-row items-center">
        <Image
          src={imagen1}
          alt="WholesaleColores"
          className="rounded-xl w-[600px]"
        ></Image>
      </div>
      {/* Texto al fondo alineado a la derecha */}
      <div className="flex flex-col items-end text-end w-full justify-between pb-24  pr-12">
        <Link href="/servicios" replace className="flex flex-row mt-24">
          <button className="bg-peach rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors ease-in-out">
            Conoce nuestros servicios {">"}
            {">"}
          </button>
        </Link>
        <div className="flex flex-col justify-end items-end">
          <div className="font-bold text-5xl">POSICIONATE</div>
          <div className="stroke text-6xl">EN EL MERCADO</div>
          <div className="mt-2 text-right w-3/4">
            Construimos una presencia sólida y coherente que te permite competir
            con fuerza y crecer de manera sostenida en tu sector.
          </div>
        </div>
      </div>
    </div>
  );
}
