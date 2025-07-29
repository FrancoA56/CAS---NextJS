"use client";

import { useState } from "react";

export default function SecondSumate() {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<
    string[]
  >([]);
  const [file, setFile] = useState<File | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");

  const items = [
    "DISEÑO GRAFICO",
    "EMAIL MARKETING",
    "SOCIAL MEDIA",
    "DISEÑO WEB",
    "PAID MEDIA",
    "CONTENIDO",
    "ASESORÍAS",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Agregar campos manualmente
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      empresa: form.empresa.value,
      rubro: form.rubro.value,
      mensaje: form.mensaje.value,
    };

    // Chequear honeypot
    if (form.botcheck.value !== "") {
      return;
    }

    // Enviar datos al backend
    const envio = new FormData();
    envio.append("data", JSON.stringify(data));
    if (file) envio.append("cv", file);
    envio.append("captcha", captchaToken);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: envio,
      });
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.error("Error al enviar", err);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col px-4">
      <form
        className="w-full max-w-2xl space-y-4 bg-teal p-8 rounded-xl backdrop-blur-md border border-white/30 text-white"
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm 3xl:text-lg font-bold ">
              Nombre Completo
            </label>
            <input
              type="text"
              required
              className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu nombre"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm 3xl:text-lg font-bold">
              Email
            </label>
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
            <label className="block mb-1 text-sm 3xl:text-lg font-bold">
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
              placeholder="011-2323-2323"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm 3xl:text-lg font-bold">
              Área
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
              <option
                value="Seleccioná varios"
                className="text-white bg-teal"
              ></option>
              {items.map((item) => (
                <option key={item} value={item} className="text-white bg-teal">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {/* Servicios seleccionados con botón de quitar */}
          {serviciosSeleccionados.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {serviciosSeleccionados.map((servicio) => (
                <div
                  key={servicio}
                  className="flex items-center bg-white/20 text-white rounded-full px-4 py-1 text-sm 3xl:text-lg backdrop-blur-sm"
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
        {/* Archivo adjunto */}
        {/* Drag & Drop para CV */}
        <div
          className="w-full p-6 border-2 border-dashed border-white/50 rounded-md text-white text-center cursor-pointer hover:bg-white/10 transition"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile && /\.(pdf|doc|docx)$/i.test(droppedFile.name)) {
              setFile(droppedFile);
            }
          }}
          onClick={() => {
            const input = document.getElementById("cv-upload");
            input && input.click();
          }}
        >
          <p className="text-sm">
            {file ? (
              <>
                <strong>Archivo seleccionado:</strong> {file.name}
              </>
            ) : (
              <>
                Arrastrá tu CV aquí o hacé click para seleccionar un archivo
                (PDF o Word)
              </>
            )}
          </p>
          <input
            id="cv-upload"
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        {/* Honeypot */}
        <input type="text" name="botcheck" className="hidden" />
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
