"use client";

import { useState } from "react";

export default function Contacto() {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<
    string[]
  >([]);

  const items = [
    "DISEÑO",
    "WEB",
    "CONTENIDO",
    "ANÁLISIS",
    "EMAIL",
    "RRSS",
    "CAMPAÑAS",
    "ASESORÍA",
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
      <div className="md:flex hidden gap-4 flex-col sm:flex-row justify-center items-center text-6xl mb-6 text-center">
        <p className="text-gradient-cas custom-stroke">CREAMOS</p>
        <p className="text-gradient-cas font-bold ">JUNTOS</p>
      </div>

      <form
        className="w-full max-w-lg space-y-4 bg-teal p-8 rounded-xl backdrop-blur-md border border-white/30 text-black"
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm">Nombre</label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-black placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 bg-white/20 rounded-md text-black placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="tunombre@email.com"
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm">Nombre de Empresa</label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-black placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu empresa"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Rubro</label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-black placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu rubro"
            />
          </div>
        </div>

        {/* SERVICIOS */}
        <div>
          <label className="block mb-2 text-sm">
            ¿Qué servicios te interesan?
          </label>
          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  value={item}
                  checked={serviciosSeleccionados.includes(item)}
                  onChange={() => toggleServicio(item)}
                  className="hidden peer"
                />
                <span className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center peer-checked:bg-blue transition-all duration-200">
                  {/** El punto interno blanco cuando está seleccionado */}
                  <div className="w-2.5 h-2.5 bg-black rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200" />
                </span>
                <span className="text-sm ">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm">Mensaje</label>
          <textarea
            rows={3}
            className="w-full p-3 bg-white/20 rounded-md text-black placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 resize-none"
            placeholder="Contanos tu idea..."
          />
        </div>

        {/* Campo oculto para enviar servicios seleccionados */}
        <input
          type="hidden"
          name="servicios"
          value={serviciosSeleccionados.join(", ")}
        />

        <button type="submit" className="bg-blue hover:bg-blue/60 transition-colors duration-200 border border-black/30 px-6 py-2 rounded-xl text-black backdrop-blur-md">
          Enviar
        </button>
      </form>
    </div>
  );
}
