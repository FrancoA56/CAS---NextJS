import Image from "next/image";
import Link from "next/link";
import imagen1 from "../../media/seo-2.webp";
import { useIsIOS } from "../../hooks/useIsIOS";
export default function Opcion5() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
  <>
    {/* ===== DESKTOP ===== */}
    <div className="hidden md:flex w-screen h-[100dvh] bg-teal flex-shrink-0">
      <div className="w-full max-w-[1400px] mx-auto px-12 flex items-center justify-between text-black">
        
        {/* Imagen */}
        <div className="w-1/3 flex items-center justify-start">
          <Image
            src={imagen1}
            alt="WholesaleColores"
            className="rounded-xl w-full h-auto"
          />
        </div>

        {/* Texto */}
        <div className="w-auto flex flex-col items-end text-end justify-between py-24">
          <Link href="/servicios" replace className="mt-12">
            <button className="bg-teal text-lg rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors mb-4">
              Conocé nuestros servicios {">>"}
            </button>
          </Link>

          <div className="flex flex-col items-end">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              POSICIONATE
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              EN EL MERCADO
            </div>
            <div className="mt-2 max-w-[480px] text-end 2xl:text-xl">
              Construimos una presencia sólida y coherente que te permite
              competir con fuerza y crecer de manera sostenida en tu sector.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ===== MOBILE iOS ===== */}
    {isIOS ? (
      <div className="md:hidden w-screen h-[100dvh] bg-teal flex-shrink-0">
        <div className="w-full max-w-[640px] mx-auto px-8 flex flex-col justify-center text-black">
          
          <div className="flex justify-center mb-12">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[60%]"
            />
          </div>

          <div className="flex flex-col items-end text-end">
            <Link href="/servicios" replace className="mb-8">
              <button className="bg-teal text-lg rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors">
                Conocé nuestros servicios {">>"}
              </button>
            </Link>

            <div>
              <div className="font-bold text-2xl">POSICIONATE</div>
              <div className="stroke text-3xl">EN EL MERCADO</div>
              <div className="mt-2 text-end">
                Construimos una presencia sólida y coherente que te permite
                competir con fuerza y crecer de manera sostenida en tu sector.
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      /* ===== MOBILE NO iOS ===== */
      <div className="md:hidden w-screen h-[100dvh] bg-teal flex-shrink-0">
        <div className="w-full max-w-[640px] mx-auto px-8 flex flex-col justify-center text-black">
          
          <div className="flex justify-center mb-12">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[70%]"
            />
          </div>

          <div className="flex flex-col items-end text-end">
            <Link href="/servicios" replace className="mb-8">
              <button className="bg-teal text-lg rounded-sm border border-black py-2 px-4 hover:bg-white/20 transition-colors">
                Conocé nuestros servicios {">>"}
              </button>
            </Link>

            <div>
              <div className="font-bold text-3xl">POSICIONATE</div>
              <div className="stroke text-4xl">EN EL MERCADO</div>
              <div className="mt-2 text-end">
                Construimos una presencia sólida y coherente que te permite
                competir con fuerza y crecer de manera sostenida en tu sector.
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

}
