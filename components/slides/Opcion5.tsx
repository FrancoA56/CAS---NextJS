import Image from "next/image";
import Link from "next/link";
import imagen1 from "../../media/seo-2.webp";
import { useIsIOS } from "../../hooks/useIsIOS";
export default function Opcion5() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      {/* Desktop */}

      <div className="h-[100dvh] safe-area w-full md:flex hidden flex-row px-20 text-black text-center py-24 bg-teal">
        <div className="flex flex-row items-left py-24">
          <Image
            src={imagen1}
            alt="WholesaleColores"
            className="rounded-xl w-[100%]"
          ></Image>
        </div>
        {/* Texto al fondo alineado a la derecha */}
        <div className="flex flex-col items-end text-end justify-between w-2/3">
          <Link href="/servicios" replace className="flex flex-row mt-24">
            <button className="bg-teal text-lg 3xl:text-xl rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors ease-in-out">
              Conocé nuestros servicios {">"}
              {">"}
            </button>
          </Link>
          <div className="flex flex-col justify-end items-end mb-24">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              POSICIONATE
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              EN EL MERCADO
            </div>
            <div className="w-full mt-2 text-end 3xl:text-2xl">
              Construimos una presencia sólida y coherente que te permite
              competir con fuerza y crecer de manera sostenida en tu sector.
            </div>
          </div>
        </div>
      </div>
      {/* Movil */}

      {isIOS ? (
        <div className="h-[100dvh] safe-area w-screen flex md:hidden flex-col px-8 text-black text-center py-24 bg-teal">
          <div className="flex items-center justify-center mt-20">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[60%]"
            ></Image>
          </div>
          {/* Texto al fondo alineado a la derecha */}
          <div className="flex flex-col items-end text-end h-2/3">
            <Link href="/servicios" replace className="flex flex-row mt-12">
              <button className="bg-teal text-lg 3xl:text-xl rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors ease-in-out">
                Conocé nuestros servicios {">"}
                {">"}
              </button>
            </Link>
            <div className="flex flex-col justify-end items-end mt-12">
              <div className="font-bold text-2xl ">POSICIONATE</div>
              <div className="stroke text-3xl ">EN EL MERCADO</div>
              <div className="w-full mt-2 text-end">
                Construimos una presencia sólida y coherente <br />
                que te permite competir con fuerza y crecer <br />
                de manera sostenida en tu sector.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100dvh] safe-area w-screen flex md:hidden flex-col px-8 text-black text-center bg-teal">
          <div className="flex items-center justify-center mt-24">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[70%]"
            ></Image>
          </div>
          {/* Texto al fondo alineado a la derecha */}
          <div className="flex flex-col items-end text-end h-2/3">
            <Link href="/servicios" replace className="flex flex-row mt-12">
              <button className="bg-teal text-lg 3xl:text-xl rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors ease-in-out">
                Conocé nuestros servicios {">"}
                {">"}
              </button>
            </Link>
            <div className="flex flex-col justify-end items-end mt-12">
              <div className="font-bold text-3xl ">POSICIONATE</div>
              <div className="stroke text-4xl ">EN EL MERCADO</div>
              <div className="w-full mt-2 text-end">
                Construimos una presencia sólida y coherente <br />
                que te permite competir con fuerza y crecer <br />
                de manera sostenida en tu sector.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
