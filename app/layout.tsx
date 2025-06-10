"use client";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiAlignJustify } from "react-icons/fi";
import FullScreenNav from "../components/FullScreenNav";
import LogoCasBlanco from "../media/LogoCasBlanco.png";
import Image from "next/image";
import Link from "next/link";

// Colores de fondo viejos
// const backgroundColors: Record<string, string> = {
//   "/": "#8ECAC0",
//   "/servicios": "#D47FB1",
//   "/clientes": "#E8B7A3",
//   "/quienessomos": "#C7D997",
//   "/contacto": "#F3D56A",
//   "/equipo": "#93D1E3",
// };

// Colores de fondo nuevos
const backgroundColors: Record<string, string> = {
  "/": "#78C8D2",
  "/servicios": "#EE8EC3",
  "/clientes": "#FFC4AC",
  "/quienessomos": "#A5E6A8",
  "/contacto": "#FFDF7D",
  "/equipo": "#B791DD",
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
        <div className="absolute z-40 md:top-10 top-8 left-6 flex flex-col space-y-2 font-gotham">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiAlignJustify size={32} className="text-white" />
          </button>
        </div>
        <div className="absolute left-12 bottom-16 transform -rotate-90 origin-left text-2xl text-white h-12 opacity-70 tracking-widest font-gotham whitespace-nowrap md:inline hidden">
          CAS - MARKETING & DESIGN
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
