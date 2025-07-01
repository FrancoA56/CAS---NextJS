"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import marcoCelular from "../../media/pantalla-celu.png";
import image1 from "../../media/wholesaleServicios.png";
import image2 from "../../media/wholesaleServicios.png";
import image3 from "../../media/wholesaleServicios.png";

const images = [image1, image2, image3];

export default function HorizontalCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number) =>
    (index + offset + images.length) % images.length;

  return (
    <div className="relative w-[760px] h-[530px] overflow-hidden flex items-end justify-end pb-12">
      {/* Animaciones de fondo: imágenes rotando */}
      {[-1, 0].map((offset) => {
        const imgIndex = getIndex(offset);
        const isCenter = offset === 0;

        return (
          <motion.div
            key={imgIndex}
            initial={{
              x: offset * 400,
              opacity: 0,
              scale: isCenter ? 0.9 : 0.7,
            }}
            animate={{
              x: offset * 300,
              opacity: 1,
              scale: isCenter ? 1 : 0.8,
            }}
            transition={{ duration: 0.6 }}
            className="absolute"
          >
            {isCenter ? (
              <div className="relative w-[280px] h-[455px]">
                <Image
                  src={images[imgIndex]}
                  alt={`Imagen ${imgIndex}`}
                  width={240}
                  height={480}
                  className="absolute top-[40px] left-[20px] rounded-xl"
                />
              </div>
            ) : (
              <Image
                src={images[imgIndex]}
                alt={`Imagen ${imgIndex}`}
                width={260}
                height={520}
                className="rounded-xl shadow-lg"
              />
            )}
          </motion.div>
        );
      })}

      {/* Marco del celular fijo, sin animación */}
      <div className="absolute right-[0px] bottom-[48px] w-[280px] h-[455px] pointer-events-none z-10">
        <Image
          src={marcoCelular}
          alt="marco celular"
          fill
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}
