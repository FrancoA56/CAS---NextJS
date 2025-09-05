import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import { useIsIOS } from "../hooks/useIsIOS";

export default function Footer() {
  const isIOS = useIsIOS();
  if (isIOS === null) return null; // Esperar que se detecte

  return (
    <footer className="text-black px-6 sm:px-8 py-8 sm:py-12 font-gotham h-screen w-screen flex flex-col justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 3xl:gap-24">
        {/* Columna 1: Contacto */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg 3xl:text-xl rounded-sm border-b border-black py-2 px-8 w-fit">
            NUESTROS LINKS
          </h3>

          <div className="flex items-center gap-3 sm:gap-4">
            <FaEnvelope className="text-base sm:text-xl" />
            <a
              href="mailto:info@castradeandco.com?subject=Consulta"
              className="text-base sm:text-xl transition hover:opacity-80"
            >
              info@castradeandco.com
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <FaPhoneAlt className="text-base sm:text-xl" />
            <a
              href="tel:+5491112345678"
              className="text-base sm:text-xl transition hover:opacity-80"
            >
              +54 9 11 1234-5678
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-row justify-between pt-4 sm:pt-6">
            <div className="flex flex-col gap-4 sm:gap-6 ">
              <h3 className="text-lg 3xl:text-xl rounded-sm border-b border-black py-2 px-4">
                SEGUINOS
              </h3>
              <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl">
                <a
                  href="https://www.instagram.com/casmarketingdesign/?hl=es-la"
                  className="transition hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-8" />
                </a>
                <a
                  href="https://www.facebook.com/CAS-Marketing-Design-103007271792611"
                  className="transition hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/company/somoscas/"
                  className="transition hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <Link href="/contacto" replace className="flex flex-row ">
                <button className="bg-white text-lg 3xl:text-xl rounded-sm border border-black py-2 px-4 hover:bg-black/10 transition-colors ease-in-out">
                  CONTACTANOS {">"}
                  {">"}
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>

        {/* Columna 2: Dirección y mapa */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <FaMapMarkerAlt className="text-base sm:text-xl mt-1" />
            <a
              href="https://maps.app.goo.gl/JjKSjNKUkkZR6QnD7"
              className="text-base sm:text-xl transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Av. Alicia Moreau de Justo 1930, Piso 3, Oficina 306 <br />
              CABA | Buenos Aires, Argentina
            </a>
          </div>
          {isIOS ? (
             <div className="w-full h-30 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.31999753436!2d-58.364956!3d-34.6213529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d1f2bc3f3d%3A0xb4d4e772c8679a66!2sAv.%20Alicia%20Moreau%20de%20Justo%201930%20Piso%203%2C%20Oficina%20306%2C%20C1107AFN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1754658655863!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-60 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.31999753436!2d-58.364956!3d-34.6213529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d1f2bc3f3d%3A0xb4d4e772c8679a66!2sAv.%20Alicia%20Moreau%20de%20Justo%201930%20Piso%203%2C%20Oficina%20306%2C%20C1107AFN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1754658655863!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-12 sm:pt-24 text-center text-base sm:text-xl">
        © {new Date().getFullYear()} CAS Marketing & Design. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
