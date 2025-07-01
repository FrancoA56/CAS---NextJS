"use client";

import { useState } from "react";

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
    <div className="h-screen w-full flex justify-center items-center flex-col px-4">
      <div className="flex flex-row justify-center gap-4 items-center md:text-6xl text-4xl mb-2 ">
        <p className="font-bold">TRABAJEMOS</p>
        <p className="text-gradient-cas custom-stroke ">JUNTOS</p>
      </div>

      <form
        className="w-full max-w-2xl space-y-4 bg-green p-8 rounded-xl backdrop-blur-md border border-white/30 text-white"
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-bold ">Nombre</label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu nombre"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-bold">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="tunombre@email.com"
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-bold">
              Nombre de Empresa
            </label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu empresa"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-bold">Rubro</label>
            <input
              type="text"
              required
              className="w-full p-3 text-ellipsis bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Ej. Indumentaria, decoración"
            />
          </div>
        </div>

        {/* SERVICIOS */}
        <div>
          <label className="block mb-2 text-sm font-bold">
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
            className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
            defaultValue=""
          >
            <option value="Seleccioná varios" className="text-white bg-green"></option>
            {items.map((item) => (
              <option key={item} value={item} className="text-white bg-green">
                {item}
              </option>
            ))}
          </select>

          {/* Servicios seleccionados con botón de quitar */}
          {serviciosSeleccionados.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {serviciosSeleccionados.map((servicio) => (
                <div
                  key={servicio}
                  className="flex items-center bg-white/20 text-white rounded-full px-4 py-1 text-sm backdrop-blur-sm"
                >
                  <span>{servicio}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setServiciosSeleccionados((prev) =>
                        prev.filter((s) => s !== servicio)
                      )
                    }
                    className="ml-2 text-white hover:text-red-400"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-bold">Mensaje</label>
          <textarea
            rows={3}
  className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 resize-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white/10"
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
          <button
            type="submit"
            className="flex flex-col items-center text-white "
          >
            <span className="w-96 h-px bg-white mb-2 transition-all duration-300 group-hover:w-16" />
            <span className="font-semibold tracking-wide">Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
