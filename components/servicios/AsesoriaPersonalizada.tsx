import Link from "next/link";
import Image from "next/image";
import imagen1 from "../../media/MaterialWeb/imageAsesoria.jpg";

export default function AsesoriaPersonalizada() {
  return (
    <>
      {/* Desktop */}

      <div className="md:flex hidden flex-col md:flex-row w-full px-8 py-12 items-center justify-between">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-2/3 w-full ml-32">
          <h2 className="text-7xl 3xl:text-8xl font-bold mb-2 text-peach">
            ASESORIAS
          </h2>
          <h2 className="text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-peach">
            PARA TU MARCA
          </h2>
          <p className="text-xl 3xl:text-2xl mb-6 text-justify pr-24">
            <span className="text-peach font-semibold">
              ¿No sabés por dónde empezar o cómo mejorar lo que ya tenés?{" "}
            </span>
            Te acompañamos con asesorías personalizadas para ordenar tu
            comunicación, definir tu estrategia y tomar decisiones con claridad.{" "}
          </p>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-peach rounded-sm border text-lg 3xl:text-xl border-black py-3 px-4 hover:bg-peach/80 transition-colors ease-in-out">
              Pedí tu asesoria {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="md:w-1/3 w-full flex justify-center">
          <Image
            src={imagen1}
            alt="asesoria personalizada"
            className="w-full"
          />
        </div>
      </div>

      {/* Movil */}

      <div className="flex md:hidden flex-col w-full items-center h-screen justify-center mb-16">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-left mb-12 w-full ml-12">
          <h2 className="text-5xl font-bold mb-2 text-peach">
            ASESORIAS
          </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-peach">
            PARA TU MARCA
          </h2>
          <p className="text-lg mb-6 text-justify pr-16">
            <span className="text-peach font-semibold">
              ¿No sabés por dónde empezar o cómo mejorar lo que ya tenés?{" "}
            </span>
            Te acompañamos con asesorías personalizadas para ordenar tu
            comunicación, definir tu estrategia y tomar decisiones con claridad.{" "}
          </p>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-peach rounded-sm border border-black py-3 px-4 hover:bg-peach/80 transition-colors ease-in-out">
              Pedí tu asesoria {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="w-full flex justify-center">
          <Image
            src={imagen1}
            alt="asesoria personalizada"
            className="w-full px-12"
          />
        </div>
      </div>
    </>
  );
}
