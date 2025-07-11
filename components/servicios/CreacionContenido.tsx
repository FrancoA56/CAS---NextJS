import Link from "next/link";
import Image from "next/image";
import celular from "../../media/pantalla-celu.png";

export default function CreacionDeContenido() {
  return (
    <>
      <div className="md:flex hidden flex-row">
        <div className=" flex justify-center items-center ml-32">
          <div className="relative 3xl:w-[400px] w-[300px] h-[600px] bottom-20">
            <div className="rounded-md">
              <video
                width="240"
                height="320"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className="relative left-8 top-[155px] rounded-2xl 3xl:hidden"
              >
                <source src="/video/contenidoVideo.webm" type="video/webm" />
                <source src="/video/contenidoVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                width="320"
                height="520"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className="3xl:flex relative hidden left-8 top-[100px] rounded-2xl"
              >
                <source src="/video/contenidoVideo.webm" type="video/webm" />
                <source src="/video/contenidoVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                src={celular}
                alt="marco celular"
                className="pointer-events-none relative bottom-72 left-3 h-[460px] w-[280px] 3xl:hidden"
              />
              <Image
                src={celular}
                alt="marco celular"
                style={{ width: "390px", height: "610px" }}
                className="pointer-events-none relative bottom-[54vh]  3xl:flex hidden"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center text-end px-8 text-black ml-0 3xl:ml-36">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-blue">
            CREACIÓN DE{" "}
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-blue">
            CONTENIDO
          </h2>
          <ul
            className="list-disc list-inside mb-6 text-lg 3xl:text-xl"
            dir="rtl"
          >
            <li className="text-right">Producción de contenido multimedia</li>
            <li className="text-right">
              Guión y dirección creativa para piezas audiovisuales
            </li>
            <li className="text-right">
              Realización de contenidos temáticos por fechas clave o acciones de
              marca
            </li>
            <li className="text-right">
              Campañas con influencers y creadores UGC
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue rounded-sm border border-black py-3 px-4 text-lg 3xl:text-xl hover:bg-blue/80 transition-colors ease-in-out">
              Impulsá tu marca {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex flex-col ">
        <div className="flex flex-col items-end justify-start text-end px-8 mt-0 text-black mb-16">
          <h2 className="text-5xl font-bold mb-2 text-blue">CREACIÓN DE </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-blue">
            CONTENIDO
          </h2>
          <ul className="list-disc list-inside mb-6 text-lg" dir="rtl">
            <li className="text-right">Producción de contenido multimedia</li>
            <li className="text-right">
              Guión y dirección creativa para piezas audiovisuales
            </li>
            <li className="text-right">
              Realización de contenidos temáticos por fechas clave o acciones de
              marca
            </li>
            <li className="text-right">
              Campañas con influencers y creadores UGC
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue rounded-sm border border-black py-3 px-4 hover:bg-blue/80 transition-colors ease-in-out">
              Impulsá tu marca {">"}
              {">"}
            </button>
          </Link>
        </div>
        <div className="flex m-auto rounded-md mb-16">
          <video
            width="180"
            height="200"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className=" rounded-lg "
          >
            <source src="/video/contenidoVideo.webm" type="video/webm" />
            <source src="/video/contenidoVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Image
              src={celular}
              alt="marco celular"
              className="pointer-events-none relative bottom-72 left-3 h-[460px] w-[280px] "
              /> */}
        </div>
      </div>
    </>
  );
}
