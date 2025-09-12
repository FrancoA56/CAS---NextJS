"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import imagen from "../../media/contacto.webp";
import Image from "next/image";
import { useIsIOS } from "../../hooks/useIsIOS";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | CAS Marketing",
  description: "¿Queres trabajar con nosotros? ¡Contactate!"
}

export default function Contacto() {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<
    string[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  const items = [
    "DISEÑO GRAFICO",
    "EMAIL MARKETING",
    "SOCIAL MEDIA",
    "DISEÑO WEB",
    "PAID MEDIA",
    "CONTENIDO",
    "ASESORÍAS",
  ];

  const toggleServicio = (item: string) =>
    setServiciosSeleccionados((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );

  const isIOS = useIsIOS();
  if (isIOS === null) return null; // esperar a detect

  const API_KEY =
    process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY ||
    "a28260df-571a-4a2a-88c6-db71e57bcd2f"; // pon tu key aquí si prefieres

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!API_KEY) {
      setResult({
        ok: false,
        message: "Falta configurar la API key de Web3Forms.",
      });
      return;
    }

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // validar honeypot: si viene lleno, es bot => no enviar
    const honeypotValue = formData.get("honeypot")?.toString() || "";
    if (honeypotValue.trim() !== "") {
      // opcional: ignorar silenciosamente o setear un resultado
      setResult({ ok: false, message: "Spam detectado (honeypot)." });
      return;
    }

    // añadir servicios seleccionados (si el input hidden fue manipulado)
    if (!formData.get("servicios")) {
      formData.set("servicios", serviciosSeleccionados.join(", "));
    }

    // convertir formData a objeto simple
    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      unknown
    >;

    // agregar parámetros requeridos por Web3Forms
    payload.access_key = API_KEY;
    // especificaste que querés `captcha: true`
    payload.captcha = true;

    payload.subject = "Nuevo mensaje de la web de CAS";

    try {
      setLoading(true);
      setResult(null);

      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await resp.json();

      if (resp.ok && json.success) {
        // éxito
        setResult({
          ok: true,
          message: "Mensaje enviado correctamente. Gracias!",
        });
        formEl.reset();
        setServiciosSeleccionados([]);
      } else {
        // fallo (web3forms devuelve info en json)
        setResult({
          ok: false,
          message:
            (json?.message as string) ||
            "Error al enviar. Revisa la consola y la configuración de la API key.",
        });
        console.error("Web3Forms response:", json);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResult({
        ok: false,
        message: "Error de red al enviar el formulario.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-[100dvh] safe-area w-full flex justify-between items-center flex-row px-4">
      <div></div>
      {isIOS ? (
        <>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-2 md:mb-4 ">
              <p className="font-bold text-3xl">HABLEMOS DE TU</p>
              <p className="text-gradient-cas custom-stroke text-3xl">
                PROYECTO
              </p>
              <p className="mt-2 max-w-2xl text-sm flex justify-center items-center text-center">
                Contanos sobre tu proyecto y descubrí cómo podemos ayudarte a
                crecer con estrategias personalizadas.
              </p>
            </div>
            <div className="justify-center items-center flex">
              <form
                onSubmit={handleSubmit}
                className="
    w-full 
    max-w-md
    space-y-1
    bg-white 
    px-4
    py-2 
    rounded-xl backdrop-blur-md border-2 border-gray text-black
  "
              >
                <div className="flex sm:flex-row flex-col gap-2 md:gap-4 ">
                  <div className="flex-1">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold ">
                      Nombre
                    </label>
                    <input
                      name="Nombre"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="flex-1 mb-2 md:mb-0">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                      Email
                    </label>
                    <input
                      name="Email"
                      type="email"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                      name="Empresa"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div className="flex-1 mb-2 md:mb-0">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                      Rubro
                    </label>
                    <input
                      name="Rubro"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 text-ellipsis  rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                      if (
                        selected &&
                        !serviciosSeleccionados.includes(selected)
                      ) {
                        setServiciosSeleccionados((prev) => [
                          ...prev,
                          selected,
                        ]);
                      }
                      // Reiniciamos el select al valor vacío para que se pueda volver a seleccionar
                      e.target.value = "";
                    }}
                    className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-gray border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                    name="Mensaje"
                    rows={3}
                    className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50 resize-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white/10"
                    placeholder="Contanos tu idea..."
                  />
                </div>
                {/* Campo oculto para enviar servicios seleccionados */}
                <input
                  type="hidden"
                  name="servicios"
                  value={serviciosSeleccionados.join(", ")}
                />

                {/* HONEYPOT (campo oculto antip-bot). Web3Forms documenta este método, aunque lo consideran menos efectivo. */}
                <div style={{ display: "none" }} aria-hidden>
                  <label>Si sos humano, dejá este campo vacío</label>
                  <input name="honeypot" type="text" />
                </div>

                <div className="flex justify-center items-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex flex-col items-center"
                  >
                    <span className="font-semibold tracking-wide border border-black rounded-sm backdrop-blur-md text-sm sm:w-auto btn-gradient-cas w-full transition-colors duration-300">
                      {loading ? "Enviando..." : "Enviar"}
                    </span>
                  </button>
                </div>
                {result && (
                  <p
                    className={`mt-1 text-center ${
                      result.ok ? "text-green font-bold" : "text-teal font-bold"
                    }`}
                  >
                    {result.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-2 md:mb-4 ">
              <p className="font-bold text-4xl md:text-4xl 3xl:text-7xl">
                HABLEMOS DE TU
              </p>
              <p className="text-gradient-cas custom-stroke text-4xl 3xl:text-8xl">
                PROYECTO
              </p>
              <p className="mt-2 max-w-2xl text-base 3xl:text-lg flex justify-center items-center text-center">
                Contanos sobre tu proyecto y descubrí cómo podemos ayudarte a
                crecer con estrategias personalizadas.
              </p>
            </div>
            <div className="justify-center items-center flex">
              <form
                onSubmit={handleSubmit}
                className="
    w-full 
    max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 
    space-y-1 md:space-y-2 3xl:space-y-4 
    bg-white 
    px-4 md:px-6 3xl:px-8 
    py-4 md:py-3 lg:py-4 3xl:py-6  
    rounded-xl backdrop-blur-md border-2 border-gray text-black
  "
              >
                <div className="flex sm:flex-row flex-col gap-2 md:gap-4 ">
                  <div className="flex-1">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold ">
                      Nombre
                    </label>
                    <input
                      name="Nombre"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="flex-1 mb-2 md:mb-0">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                      Email
                    </label>
                    <input
                      name="Email"
                      type="email"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                      name="Empresa"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div className="flex-1 mb-2 md:mb-0">
                    <label className="block mb-1 text-sm 3xl:text-lg font-bold">
                      Rubro
                    </label>
                    <input
                      name="Rubro"
                      type="text"
                      required
                      className="w-full py-1 px-2 3xl:py-3 3xl:px-3 text-ellipsis  rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                      if (
                        selected &&
                        !serviciosSeleccionados.includes(selected)
                      ) {
                        setServiciosSeleccionados((prev) => [
                          ...prev,
                          selected,
                        ]);
                      }
                      // Reiniciamos el select al valor vacío para que se pueda volver a seleccionar
                      e.target.value = "";
                    }}
                    className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-gray border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50"
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
                    name="Mensaje"
                    rows={3}
                    className="w-full py-1 px-2 3xl:py-3 3xl:px-3 rounded-md text-black border border-gray placeholder-gray outline-none focus:ring-2 focus:ring-white/50 resize-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white/10"
                    placeholder="Contanos tu idea..."
                  />
                </div>
                {/* Campo oculto para enviar servicios seleccionados */}
                <input
                  type="hidden"
                  name="servicios"
                  value={serviciosSeleccionados.join(", ")}
                />

                {/* HONEYPOT (campo oculto antip-bot). Web3Forms documenta este método, aunque lo consideran menos efectivo. */}
                <div style={{ display: "none" }} aria-hidden>
                  <label>Si sos humano, dejá este campo vacío</label>
                  <input name="honeypot" type="text" />
                </div>

                <div className="flex justify-center items-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex flex-col items-center"
                  >
                    <span className="font-semibold tracking-wide border border-black rounded-sm backdrop-blur-md text-sm sm:w-auto btn-gradient-cas w-full transition-colors duration-300">
                      {loading ? "Enviando..." : "Enviar"}
                    </span>
                  </button>
                </div>
                {result && (
                  <p
                    className={`mt-1 text-center ${
                      result.ok ? "text-green font-bold" : "text-teal font-bold"
                    }`}
                  >
                    {result.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </>
      )}
      <Image
        src={imagen}
        alt="imagen"
        className="h-[100dvh] safe-area w-auto hidden md:flex mr-20"
      />
    </div>
  );
}
