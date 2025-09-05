import Link from "next/link";
import Image from "next/image";
import imagen1 from "../../media/asesorias.webp";
import { useIsIOS } from "../../hooks/useIsIOS";

export default function AsesoriaPersonalizada() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      {/* Desktop */}

      <div className="md:flex hidden flex-col md:flex-row w-full px-8 py-12 items-center justify-between">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-1/2 ml-32">
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
        <div className="md:w-1/2 w-full flex justify-center px-20">
          <Image
            src={imagen1}
            alt="asesoria personalizada"
            className="w-full rounded-sm"
          />
        </div>
      </div>

      {/* Movil */}
      {isIOS ? (
        <div className="flex md:hidden flex-col w-full items-center h-[100dvh] safe-area justify-center mb-16 px-6">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-left my-12 w-full">
            <h2 className="text-4xl font-bold mb-1 text-peach">ASESORIAS</h2>
            <h2 className="text-4xl font-bold mb-2 custom-stroke-peach">
              PARA TU MARCA
            </h2>
            <p className="mb-2 text-justify ">
              <span className="text-peach font-semibold">
                ¿No sabés por dónde empezar o cómo mejorar lo que ya tenés?{" "}
              </span>
              Te acompañamos con asesorías personalizadas para ordenar tu
              comunicación, definir tu estrategia y tomar decisiones con
              claridad.{" "}
            </p>
            <Link href="/contacto" replace className="flex flex-row">
              <button className="bg-peach rounded-sm border border-black py-3 px-4 hover:bg-peach/80 transition-colors ease-in-out">
                Pedí tu asesoria {">"}
                {">"}
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={imagen1}
              alt="asesoria personalizada"
              className="w-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex md:hidden flex-col w-full items-center h-[100dvh] safe-area justify-center mb-16 px-6">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-left mb-12 w-full mt-12">
            <h2 className="text-6xl font-bold mb-2 text-peach">ASESORIAS</h2>
            <h2 className="text-6xl font-bold mb-6 custom-stroke-peach">
              PARA TU MARCA
            </h2>
            <p className="mb-6 text-justify text-lg">
              <span className="text-peach font-semibold">
                ¿No sabés por dónde empezar o cómo mejorar lo que ya tenés?{" "}
              </span>
              Te acompañamos con asesorías personalizadas para ordenar tu
              comunicación, definir tu estrategia y tomar decisiones con
              claridad.{" "}
            </p>
            <Link href="/contacto" replace className="flex flex-row">
              <button className="bg-peach rounded-sm border border-black py-3 px-4 hover:bg-peach/80 transition-colors ease-in-out">
                Pedí tu asesoria {">"}
                {">"}
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={imagen1}
              alt="asesoria personalizada"
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
