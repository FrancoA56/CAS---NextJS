import Link from "next/link";
import Image from "next/image";
import celular from "../../media/pantalla-celu.png";

export default function CreacionDeContenido() {
  return (
    <>
      {/* Desktop */}
      <div className="md:flex hidden flex-row">
        {/* Contenedor del marco y video */}
        <div className="flex justify-center items-center ml-32">
          <div className="relative bottom-20 w-[300px] h-[600px] 3xl:w-[400px]">
            {/* Video para pantallas menores a 3XL */}
            <video
              width="240"
              height="320"
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
              className="absolute left-8 top-[155px] rounded-2xl 3xl:hidden"
            >
              <source src="/video/contenidoVideo.webm" type="video/webm" />
              <source src="/video/contenidoVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video para pantallas 3XL */}
            <video
              width="320"
              height="520"
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
              className="absolute hidden 3xl:flex left-8 top-[100px] rounded-2xl"
            >
              <source src="/video/contenidoVideo.webm" type="video/webm" />
              <source src="/video/contenidoVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Marco celular */}
            <div className="absolute top-[82px] left-1 w-[93%] h-full pointer-events-none">
              <Image
                src={celular}
                alt="marco celular"
                fill
                unoptimized
                className="object-fill"
              />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-start px-6 text-black ml-0 3xl:ml-36">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-blue">
            CREACIÓN DE
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-blue">
            CONTENIDO
          </h2>
          <ul className="list-disc mb-6 pl-6 text-lg 3xl:text-xl">
            <li>Producción de contenido multimedia.</li>
            <li>Guión y dirección creativa para piezas audiovisuales.</li>
            <li>
              Realización de contenidos temáticos por fechas clave o acciones de
              marca.
            </li>
            <li>Campañas con influencers y creadores UGC.</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue rounded-sm border border-black py-3 px-4 text-lg 3xl:text-xl hover:bg-blue/80 transition-colors ease-in-out">
              Impulsá tu marca {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>

      {/* Movil */}

      <div className="md:hidden flex flex-col ">
        <div className="flex m-auto rounded-md mb-12 relative">
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
          <div className="pointer-events-none absolute -top-[3.4%] -left-[4%] w-[200px] h-[340px]">
            <Image
              src={celular}
              alt="marco celular"
              fill
              unoptimized
              className="object-fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-start px-8 mt-0 text-black mb-16">
          <h2 className="text-5xl font-bold mb-2 text-blue">CREACIÓN DE </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-blue">
            CONTENIDO
          </h2>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Producción de contenido multimedia.</li>
            <li>Guión y dirección creativa para piezas audiovisuales.</li>
            <li>
              Realización de contenidos temáticos por fechas clave o acciones de
              marca.
            </li>
            <li>Campañas con influencers y creadores UGC.</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-blue rounded-sm border border-black py-3 px-4 hover:bg-blue/80 transition-colors ease-in-out">
              Impulsá tu marca {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
