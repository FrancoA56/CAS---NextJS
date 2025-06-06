"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FullScreenNav({ isOpen, setIsOpen, prop }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          style={{ backgroundColor: prop }}
          className="fixed inset-0 text-5xl font-gotham uppercase text-white z-40 flex flex-col justify-center items-center text-center "
        >
          <ul className="flex flex-col gap-10">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                replace
                className=" text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                onClick={() => setIsOpen(false)}
                replace
                className="text-5xl font-gotham uppercase  text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/quienessomos"
                onClick={() => setIsOpen(false)}
                replace
                className="text-5xl font-gotham uppercase  text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                ¿QUIÉNES SOMOS?
                              </Link>
            </li>
            <li>
              <Link
                href="/equipo"
                onClick={() => setIsOpen(false)}
                replace
                className="text-5xl font-gotham uppercase  text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                EQUIPO
              </Link>
            </li>
            <li>
              <Link
                href="/clientes"
                onClick={() => setIsOpen(false)}
                replace
                className="text-5xl font-gotham uppercase  text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                replace
                className="text-5xl font-gotham uppercase  text-transparent hover:text-white transition-all duration-300 custom-stroke"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
