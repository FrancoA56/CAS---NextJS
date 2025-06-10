import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleItemClick = (index: number) => {
    onSelect(index + 1);
    setIsMenuOpen(false); // Cierra el menú al seleccionar
  };

  return (
    <nav className="fixed bottom-0 w-full text-white z-10">
      {/* Versión Desktop (siempre visible) */}
      <div className="hidden sm:grid sm:grid-cols-8">
        {items.map((item, index) => {
          const isActive = activeIndex === index + 1;
          return (
            <div
              key={`desktop-${index}`}
              onClick={() => onSelect(index + 1)}
              className="relative cursor-pointer overflow-visible border border-white text-center w-full h-full flex items-center justify-center group transition duration-300 group-hover:bg-green"
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-green z-0"
                  initial={{
                    scaleX: 0,
                    originX: scrollDirection === "right" ? 0 : 1,
                  }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
              <div className="relative z-10 p-2 flex items-center justify-center overflow-visible">
                <span className="text-sm md:text-base">{item}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Versión Mobile */}
      <div className="sm:hidden border-t-2  border-white bg-pink">
        {/* Botón de flecha */}
        <div
          className=" animate-bounce w-full mt-2 flex justify-center py-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row"
          >
             <FiChevronUp size={24} />
          </motion.div>
        </div>

        {/* Menú desplegable */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-peach"
            >
              <div className="flex flex-col">
                {items.map((item, index) => {
                  const isActive = activeIndex === index + 1;
                  return (
                    <div
                      key={`mobile-${index}`}
                      onClick={() => handleItemClick(index)}
                      className={`relative cursor-pointer border text-center p-3 flex items-center justify-center transition-colors ${
                        isActive ? "bg-green" : "hover:bg-green"
                      }`}
                    >
                      <span className="text-sm">{item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
