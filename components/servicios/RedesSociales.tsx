import Link from "next/link";
import Image from "next/image";
import imagen1 from "../../media/MaterialWeb/celuSocialMedia1.png";
import imagen2 from "../../media/MaterialWeb/celuSocialMedia2.png";
import imagen3 from "../../media/MaterialWeb/celuSocialMedia3.png";

export default function RedesSociales() {
  return (
    <div className="flex flex-col md:flex-row w-full px-8 py-12 items-center justify-between">
      {/* Texto */}
      <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-1/2 w-full ml-32">
        <h2 className="text-6xl md:text-7xl font-bold mb-2 text-pink">
          SOCIAL
        </h2>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-pink">
          MEDIA
        </h2>
        <p className="text-lg md:text-xl mb-6 text-justify">
          Creamos estrategias de contenido en Instagram, Linkedin, Tiktok. Están
          pensadas especialmente para tu marca. Para nuestra agencia son{" "}
          <span className="text-pink font-semibold">
            mas que solo posteos y un feed estetico.{" "}
          </span>
        </p>
        <Link href="/contacto" replace className="flex flex-row">
          <button className="bg-pink rounded-sm border border-black py-3 px-4 hover:bg-pink/80 transition-colors ease-in-out">
            No dudes en consultarnos {">"}
            {">"}
          </button>
        </Link>
      </div>

      {/* Celulares */}
      <div className="md:w-1/2 w-full relative h-[500px] mx-20">
        {" "}
        {/* Imagen izquierda - abajo */}
        <Image
          src={imagen1}
          alt="celular"
          className="absolute bottom-0 left-0 w-[120px] md:w-[200px]"
        />
        {/* Imagen central - centro medio */}
        <Image
          src={imagen2}
          alt="celular"
          className="absolute left-1/3 top-1/2 w-[120px] md:w-[200px] transform  -translate-y-1/2"
        />
        {/* Imagen derecha - arriba */}
        <Image
          src={imagen3}
          alt="celular"
          className="absolute top-0 left-2/3 w-[120px] md:w-[200px]"
        />
      </div>
    </div>
  );
}
