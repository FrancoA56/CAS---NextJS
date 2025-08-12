"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import imagen from "../../media/MaterialWeb/quienessomosbannervertical.jpg";
import Image from "next/image";

export default function Sumate() {
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
    <div className="h-screen w-screen flex-shrink-0 flex flex-row justify-between items-center px-8">
      <div></div>
      <Image src={imagen} alt="imagen" className="h-screen w-auto" />
      <div className="flex flex-col">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-6xl 3xl:text-7xl">SUMATE</p>
            <p className="text-gradient-cas text-6xl 3xl:text-8xl">AL TEAM</p>
          </div>
          <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto my-2 mb-12">
            Te invitamos a trabajar con nosotros
          </p>
        </div>
        <div className="flex justify-center items-center flex-col px-4">
          <form
            className="w-full max-w-2xl space-y-1 3xl:space-y-4 bg-white p-8 rounded-xl backdrop-blur-md border-2 border-gray text-black"
            onSubmit={handleSubmit}
          >
            <div className="flex sm:flex-row flex-col gap-2 md:gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold ">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="tuemail@email.com"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-2 md:gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                  Celular
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="011-2323-2323"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                  Área
                </label>
                <div className="relative flex-1 mb-2 md:mb-0">
                  <select
                    onChange={(e) => {
                      const selected = e.target.value;
                      if (
                        selected &&
                        !serviciosSeleccionados.includes(selected)
                      ) {
                        setServiciosSeleccionados((prev) => [
                          ...prev,
                          selected,
                        ]);
                      }
                      e.target.value = "";
                    }}
                    className="w-full p-3 pr-10 rounded-md text-gray border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                    defaultValue=""
                  >
                    <option value="" className="text-gray" disabled>
                      Seleccioná Áreas
                    </option>
                    {items.map((item) => (
                      <option key={item} value={item} className="text-black">
                        {item}
                      </option>
                    ))}
                  </select>

                  {/* Flecha */}
                  <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black" />
                </div>
              </div>
            </div>

            <div className="">
              {/* Servicios seleccionados con botón de quitar */}
              {serviciosSeleccionados.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3 md:mb-0">
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
                        className="ml-2 text-black hover:text-pink "
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
              className="w-full p-6 border-dashed rounded-md text-black border border-gray text-center cursor-pointer hover:bg-white/10 transition"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files?.[0];
                if (
                  droppedFile &&
                  /\.(pdf|doc|docx)$/i.test(droppedFile.name)
                ) {
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
                className="flex flex-col items-center text-black mt-4"
              >
                <span className="font-semibold tracking-wide border text-black border-black rounded-sm backdrop-blur-md text-sm sm:w-auto btn-gradient-cas w-full transition-colors duration-300">
                  Enviar
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
            <div></div>
      <div></div>

    </div>
  );
}
