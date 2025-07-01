"use client";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import FullScreenNav from "../components/FullScreenNav";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundColor = "#ffffff";

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <html lang="es">
      <body className="overflow-hidden transition-colors duration-700 font-gotham">
        <div className="bg-black absolute z-20 top-0 left-0 h-full w-[100px] border-r border-black/30 flex-col items-center justify-between py-8 md:inline hidden">
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
        <div className="absolute z-0 md:top-10 top-8 left-6 flex-col space-y-2 font-gotham inline md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiAlignJustify size={32} className="text-black" />
          </button>
        </div>
        <FullScreenNav
          prop={backgroundColor}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
