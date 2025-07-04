import Image from "next/image";
import imagen1 from "../../media/colorWholesale.png";
import imagen2 from "../../media/colorWholesale.png";

export default function Opcion2() {
  return (
    <div className="h-screen w-auto flex flex-col justify-start px-40 text-black text-center py-12 bg-teal">
      {/* imagenes */}
      <div className="flex flex-col items-end justify-center mt-12 px-44">
        <div className="flip-container relative w-[300px] h-[300px]">
          <div className="flipper relative w-full h-full">
            <div className="front">
              <Image
                src={imagen1}
                alt="Imagen Frente"
                className="rotating-image"
                fill
              />
            </div>
            <div className="back">
              <Image
                src={imagen2}
                alt="Imagen Reverso"
                className="rotating-image"
                fill
              />
            </div>
          </div>
        </div>
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
