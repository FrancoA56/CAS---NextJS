import Image from "next/image";
import imagen1 from "../../media/opcion3inicio1.jpg";
import imagen2 from "../../media/opcion3inicio2.jpg";
import imagen3 from "../../media/opcion3inicio3.jpg";

export default function Opcion3() {
  return (
    <>
      {/* Desktop */}

      <div className=" h-screen w-full md:flex hidden flex-col justify-between px-20 text-black text-center py-12 bg-blue ">
        {/* Título */}
        <div className="h-auto flex flex-row items-start justify-center gap-12">
          <Image
            src={imagen1}
            alt="WholesaleColores"
            className="rounded-xl w-[23%] mt-8"
          ></Image>
          <Image
            src={imagen2}
            alt="WholesaleColores"
            className="rounded-xl w-[23%] "
          ></Image>
          <Image
            src={imagen3}
            alt="WholesaleColores"
            className="rounded-xl w-[23%] mt-8"
          ></Image>
        </div>

        {/* Texto al fondo alineado a la derecha */}
        <div className="flex flex-col items-end text-end">
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
 
      <div className="h-screen w-full flex md:hidden flex-col justify-center px-8  text-black text-center mb-12 bg-blue gap-12">
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
            Una buena comunicación conecta, genera confianza y sobre todo hace
            que te elijan. Desde tu presentación institucional hasta cómo hablás
            en redes, tu web o tus eventos, te ayudamos a construir un discurso
            claro, alineado con tu marca y con impacto real.
          </div>
        </div>
      </div>
    </>
  );
}
