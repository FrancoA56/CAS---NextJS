import Link from "next/link";
import HorizontalCarousel from "./CarruselHorizontal";

export default function EmailMarketing() {
  return (
    <>
      <div className="md:flex md:flex-row hidden">
        <div className="w-1/2 flex justify-center items-center">
          <HorizontalCarousel />
        </div>
        <div className="flex flex-col items-end justify-center text-end px-8 text-black w-1/2 mb-12 mr-12 ml-0 3xl:ml-36">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-green">
            EMAIL{" "}
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-green">
            {" "}
            MARKETING
          </h2>
          <ul className="text-lg list-disc 3xl:text-xl list-inside mb-6" dir="rtl">
            <li className="text-right">
              Diseño de piezas para redes, campañas y web
            </li>
            <li className="text-right">
              Desarrollo y actualización de identidad visual
            </li>
            <li className="text-right">
              Creación de material gráfico para eventos y promociones
            </li>
            <li className="text-right">
              Adaptación de diseños para múltiples formatos y plataformas
            </li>
            <li className="text-right">
              Asesoría creativa para potenciar tu imagen de marca
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-green rounded-sm border text-lg 3xl:text-xl border-black py-3 px-4 hover:bg-green/80 transition-colors ease-in-out">
              Empecemos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="flex justify-center items-center">
          <HorizontalCarousel />
        </div>
        <div className="flex flex-col items-end justify-center text-end mr-8 ml-4 text-black">
          <h2 className="text-4xl font-bold mb-2 text-green">
            EMAIL{" "}
          </h2>
          <h2 className="text-5xl font-bold mb-4 custom-stroke-green">
            {" "}
            MARKETING
          </h2>
          <ul className="text-lg list-disc list-inside mb-6" dir="rtl">
            <li className="text-right">
              Diseño de piezas para redes, campañas y web
            </li>
            <li className="text-right">
              Desarrollo y actualización de identidad visual
            </li>
            <li className="text-right">
              Creación de material gráfico para eventos y promociones
            </li>
            <li className="text-right">
              Adaptación de diseños para múltiples formatos y plataformas
            </li>
            <li className="text-right">
              Asesoría creativa para potenciar tu imagen de marca
            </li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-green rounded-sm border border-black py-3 px-4 hover:bg-green/80 transition-colors ease-in-out">
              Empecemos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
