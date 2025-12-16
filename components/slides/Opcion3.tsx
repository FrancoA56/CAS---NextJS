import Image from "next/image";
import imagen1 from "../../media/opcion3inicio1.webp";
import imagen2 from "../../media/opcion3inicio2.webp";
import imagen3 from "../../media/opcion3inicio3.webp";
import { useIsIOS } from "../../hooks/useIsIOS";
export default function Opcion3() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      {/* Desktop */}

      <div className=" h-[100dvh] safe-area w-screen md:flex hidden flex-col justify-between px-20 text-black text-center bg-blue ">
        {/* Título */}
        <div className="h-auto w-full flex flex-row items-start justify-center gap-12 mt-12">
          <Image
            src={imagen1}
            alt="WholesaleColores"
            className="rounded-xl w-[18%] mt-8"
          ></Image>
          <Image
            src={imagen2}
            alt="WholesaleColores"
            className="rounded-xl w-[18%] "
          ></Image>
          <Image
            src={imagen3}
            alt="WholesaleColores"
            className="rounded-xl w-[18%] mt-8"
          ></Image>
        </div>

        {/* Texto al fondo alineado a la derecha */}
        <div className="flex flex-col items-end text-end mb-12 w-11/12">
          <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
            COMUNICA
          </div>
          <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
            LO QUE HACES
          </div>
          <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl">
            Una buena comunicación conecta, genera confianza y sobre todo hace
            que te elijan. Desde tu presentación institucional hasta cómo hablás
            en redes, tu web o tus eventos, te ayudamos a construir un discurso
            claro, alineado con tu marca y con impacto real.
          </div>
        </div>
      </div>
      {/* Movil */}
      {isIOS ? (
        <div className="h-[100dvh] safe-area w-full flex md:hidden flex-col justify-center px-8  text-black text-center bg-blue gap-12">
          {/* Título */}
          <div className="h-auto flex flex-wrap items-start justify-center gap-2 mt-10">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[35%]"
            ></Image>
            <Image
              src={imagen2}
              alt="WholesaleColores"
              className="rounded-xl w-[35%] "
            ></Image>
            <Image
              src={imagen3}
              alt="WholesaleColores"
              className="rounded-xl w-[35%]"
            ></Image>
          </div>

          {/* Texto al fondo alineado a la derecha */}
          <div className="flex flex-col ">
            <div className="font-bold text-2xl text-end">COMUNICA</div>
            <div className="stroke text-3xl text-end">LO QUE HACES</div>
            <div className="w-full mt-2 text-end ">
              Una buena comunicación conecta, genera
              <br /> confianza y sobre todo hace que te elijan. <br />
              Desde tu presentación institucional hasta cómo hablás en redes, tu
              web o tus eventos, <br />
              te ayudamos a construir un discurso claro,
              <br /> alineado con tu marca y con impacto real.
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100dvh] safe-area w-full flex md:hidden flex-col justify-center px-8  text-black text-center bg-blue gap-12">
          {/* Título */}
          <div className="h-auto flex flex-wrap items-start justify-center gap-2">
            <Image
              src={imagen1}
              alt="WholesaleColores"
              className="rounded-xl w-[40%]"
            ></Image>
            <Image
              src={imagen2}
              alt="WholesaleColores"
              className="rounded-xl w-[40%] "
            ></Image>
            <Image
              src={imagen3}
              alt="WholesaleColores"
              className="rounded-xl w-[40%]"
            ></Image>
          </div>

          {/* Texto al fondo alineado a la derecha */}
          <div className="flex flex-col ">
            <div className="font-bold text-3xl text-end">COMUNICA</div>
            <div className="stroke text-4xl text-end">LO QUE HACES</div>
            <div className="w-full mt-2 text-end ">
              Una buena comunicación conecta, genera
              <br /> confianza y sobre todo hace que te elijan. <br />
              Desde tu presentación institucional hasta cómo hablás en redes, tu
              web o tus eventos, <br />
              te ayudamos a construir un discurso claro,
              <br /> alineado con tu marca y con impacto real.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
