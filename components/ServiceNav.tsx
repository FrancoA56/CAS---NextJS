import Image from "next/image";
import corazon from "../media/corazon.png";
import { motion } from "framer-motion";

export default function ServiceNav({
  onSelect,
  activeIndex,
  selectedIndex,
  scrollDirection,
}: {
  onSelect: (index: number) => void;
  activeIndex: number;
  selectedIndex: number | null;
  scrollDirection: "left" | "right";
}) {
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


  return (
    <nav className="grid grid-cols-8 absolute bottom-0 w-full text-white z-10">
      {items.map((item, index) => {
        const isActive = activeIndex === index + 1;

        return (
          <div
            key={index}
            onClick={() => onSelect(index + 1)}
            className="relative cursor-pointer overflow-visible border border-white text-center w-full h-full flex items-center justify-center group transition duration-300 group-hover:bg-green"
          >
            {/* Fondo animado */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-teal z-0"
                initial={{
                  scaleX: 0,
                  originX: scrollDirection === "right" ? 0 : 1,
                }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}

              {/* {isActive && !selectedIndex && (
                <div className="absolute -top-5 right-1 w-8 h-8 animate-bounce ">
                  <Image
                    src={corazon}
                    alt="Corazón"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              )} */}
            {/* Contenido visible con el corazón */}
            <div className="relative z-10 p-2 flex items-center justify-center overflow-visible">
              <span>{item}</span>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
