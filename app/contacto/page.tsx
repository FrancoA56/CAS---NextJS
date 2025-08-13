"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import imagen from "../../media/MaterialWeb/quienessomosbannervertical.jpg";
import Image from "next/image";

export default function Contacto() {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<
    string[]
  >([]);

  const items = [
    "DISEÑO GRAFICO",
    "EMAIL MARKETING",
    "SOCIAL MEDIA",
    "DISEÑO WEB",
    "PAID MEDIA",
    "CONTENIDO",
    "ASESORÍAS",
  ];

  const toggleServicio = (item: string) => {
    setServiciosSeleccionados((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a una API o por email
    console.log("Servicios seleccionados:", serviciosSeleccionados);
    // También podés incluir esto como parte del mensaje o del body
  };

  return (
    <div className="h-screen w-full flex justify-between items-center flex-row px-4">
      <div></div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center mb-2 md:mb-8 ">
          <p className="font-bold text-5xl md:text-6xl 3xl:text-7xl">
            HABLEMOS DE TU
          </p>
          <p className="text-gradient-cas custom-stroke text-6xl 3xl:text-8xl">
            PROYECTO
          </p>
          <p className="mt-2 max-w-2xl text-lg flex justify-center items-center text-center">
            Contanos sobre tu proyecto y descubrí cómo podemos ayudarte a crecer
            con estrategias personalizadas.
          </p>
        </div>
        <div className="justify-center items-center flex">
          <form
            className="w-full max-w-2xl space-y-1 3xl:space-y-4 bg-white px-8 py-6  rounded-xl backdrop-blur-md border-2 border-gray text-black "
            onSubmit={handleSubmit}
          >
            <div className="flex sm:flex-row flex-col gap-2 md:gap-4 ">
              <div className="flex-1">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold ">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex-1 mb-2 md:mb-0">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="tuemail@email.com"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-2 md:gap-4  ">
              <div className="flex-1">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                  Nombre de Empresa
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tu empresa"
                />
              </div>
              <div className="flex-1 mb-2 md:mb-0">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                  Rubro
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 text-ellipsis  rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Ej. Indumentaria, decoración"
                />
              </div>
            </div>

            {/* SERVICIOS */}
            <div>
              <label className="block mb-2 text-sm 3xl:text-lg font-bold">
                ¿Qué servicios te interesan?
              </label>

              <select
                onChange={(e) => {
                  const selected = e.target.value;
                  if (selected && !serviciosSeleccionados.includes(selected)) {
                    setServiciosSeleccionados((prev) => [...prev, selected]);
                  }
                  // Reiniciamos el select al valor vacío para que se pueda volver a seleccionar
                  e.target.value = "";
                }}
                className="w-full p-3 rounded-md text-gray border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                defaultValue=""
              >
                <option value="" className="text-black" disabled>
                  Seleccioná Servicios
                </option>

                {items.map((item) => (
                  <option key={item} value={item} className="text-black">
                    {item}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="relative left-[92%] -translate-y-8 pointer-events-none text-black" />

              {/* Servicios seleccionados con botón de quitar */}
              {serviciosSeleccionados.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {serviciosSeleccionados.map((servicio) => (
                    <div
                      key={servicio}
                      className="flex items-center border border-gray placeholder-gray text-black rounded-full px-4 py-1 text-sm backdrop-blur-sm"
                    >
                      <span>{servicio}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setServiciosSeleccionados((prev) =>
                            prev.filter((s) => s !== servicio)
                          )
                        }
                        className="ml-2 text-black hover:text-pink"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                Mensaje
              </label>
              <textarea
                rows={3}
                className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50 resize-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white/10"
                placeholder="Contanos tu idea..."
              />
            </div>
            {/* Campo oculto para enviar servicios seleccionados */}
            <input
              type="hidden"
              name="servicios"
              value={serviciosSeleccionados.join(", ")}
            />

            <div className="flex justify-center items-start">
              <button type="submit" className="flex flex-col items-center">
                <span className="font-semibold tracking-wide border border-black rounded-sm backdrop-blur-md text-sm sm:w-auto btn-gradient-cas w-full transition-colors duration-300">
                  Enviar
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Image src={imagen} alt="imagen" className="h-screen w-auto " />
      <div></div>
    </div>
  );
}
