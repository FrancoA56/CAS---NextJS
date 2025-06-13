"use client";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiAlignJustify } from "react-icons/fi";
import FullScreenNav from "../components/FullScreenNav";
import LogoCasBlanco from "../media/LogoCasBlanco.png";
import Image from "next/image";
import Link from "next/link";

// Colores de fondo nuevos
const backgroundColors: Record<string, string> = {
  "/": "#78C8D2",
  "/servicios": "#B791DD",
  "/clientes": "#FFC4AC",
  "/quienessomos": "#A5E6A8",
  "/contacto": "#FFDF7D",
  "/equipo": "#EE8EC3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const backgroundColor = backgroundColors[pathname] || "#ffffff";

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <html lang="es">
      <body className="overflow-hidden transition-colors duration-700 font-gotham">
        <div className="absolute z-90 top-0 left-0 h-full w-[100px] border-r border-white/30 flex-col items-center justify-between py-8 md:inline hidden">
          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-2 left-8 absolute"
          >
            <FiAlignJustify size={32} className="text-white" />
          </button>

          {/* Texto rotado */}
          <div className="absolute bottom-64 left-16 transform -translate-x-1/2 rotate-[-90deg] origin-bottom text-white opacity-80 tracking-widest text-2xl whitespace-nowrap">
            CAS - MARKETING & DESIGN
          </div>
        </div>
        <div className="absolute z-40 md:top-10 top-8 left-6 flex-col space-y-2 font-gotham inline md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiAlignJustify size={32} className="text-white" />
          </button>
        </div>
        <FullScreenNav
          prop={backgroundColor}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <main>{children}</main>
        <Link href="/">
          <Image
            src={LogoCasBlanco}
            alt="LogoCas"
            width={100} // Este es el tamaño máximo (para desktop)
            className="absolute top-9 right-9 w-[80px] md:w-[100px]"
          />
        </Link>{" "}
      </body>
    </html>
  );
}
