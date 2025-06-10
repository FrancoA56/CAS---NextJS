import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white px-6 sm:px-8 py-8 sm:py-12 font-gotham">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Columna 1: Contacto */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold">NUESTROS LINKS</h3>

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
            <a href="tel:+5491112345678" className="text-base sm:text-xl transition hover:opacity-80">
              +54 9 11 1234-5678
            </a>
          </div>
          
          {/* Redes sociales */}
          <div className="flex flex-col gap-4 sm:gap-6 pt-4 sm:pt-6">
            <h3 className="text-lg sm:text-xl font-semibold">SEGUINOS</h3>
            <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl">
              <a
                href="https://www.instagram.com/casmarketingdesign/?hl=es-la"
                className="transition hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/CAS-Marketing-Design-103007271792611"
                className="transition hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/somoscas/"
                className="transition hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Dirección y mapa */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <FaMapMarkerAlt className="text-base sm:text-xl mt-1" />
            <a
              href="https://maps.app.goo.gl/FndGN5Nw29wEMoUq5"
              className="text-base sm:text-xl transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azopardo 1487 Piso 2 | CP1107 | CABA, Argentina
            </a>
          </div>
          <div className="w-full h-40 sm:h-48 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d6566.70171469881!2d-58.37220980075117!3d-34.62057288358532!3m2!1i1024!2i768!4f13.1!2m1!1sAzopardo%201487%20Piso%202%20%7C%20CP1107%20%7C%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1749241705967!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-12 sm:pt-24 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} CAS Marketing & Design. Todos los derechos reservados.
      </div>
    </footer>
  );
}