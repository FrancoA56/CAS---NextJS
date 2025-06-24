import Link from "next/link";
import VerticalCarousel from "./CarruselVertical"; // Ajustá ruta si es necesario

export default function DisenoGrafico() {
  return (
    <div className="flex flex-col md:flex-row w-full px-8 py-12 items-center justify-between">
      {/* Texto */}
      <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-1/2 w-full ml-32">
        <h2 className="text-6xl md:text-8xl font-bold mb-2 text-yellow">DISEÑO</h2>
        <h2 className="text-6xl md:text-8xl font-bold mb-6 custom-stroke-yellow">GRÁFICO</h2>
        <p className="text-lg md:text-xl mb-6 text-justify">
          Diseñamos piezas que no solo se ven bien, sino que comunican. Desde
          posteos y banners hasta packaging, creamos identidad visual,
          materiales para puntos de venta y{" "}
          <span className="text-yellow font-semibold">
            todo lo que tu marca necesita para destacarse.
          </span>
        </p>
        <button className="bg-yellow rounded-3xl border border-black py-2 px-4">
          <Link href="/contacto" replace className="flex flex-row">
            No dudes en consultarnos {">"}{">"}
          </Link>
        </button>
      </div>

      {/* Carrusel */}
      <div className="md:w-1/2 w-full flex justify-center">
        <VerticalCarousel />
      </div>
    </div>
  );
}
