"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import marcoCelular from "../../media/pantalla-celu.png";
import image1 from "../../media/email1.webp";
import image2 from "../../media/email2.webp";
import image3 from "../../media/email3.webp";

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
    <>
      {/* Desktop */}
      <div className="hidden md:flex relative w-1/2 h-full justify-center items-center">
        {/* Contenedor fijo para marco + imágenes */}
        <div className="relative w-[260px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[400px] h-auto">
          {/* Carrusel dentro del marco */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <AnimatePresence>
              {[0].map((offset) => {
                const imgIndex = getIndex(offset);
                return (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute w-[93%] h-[96%] rounded-3xl left-4"
                  >
                    <Image
                      src={images[imgIndex]}
                      alt={`Imagen ${imgIndex}`}
                      className="object-cover rounded-3xl"
                      fill
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Marco fijo */}
          <Image
            src={marcoCelular}
            alt="marco celular"
            className="relative z-10 pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* Movil */}

      <div className="relative w-[260px] h-[230px] flex md:hidden items-end justify-end pb-12">
        {/* Animaciones de fondo: imágenes rotando */}
        {[-1, 0].map((offset) => {
          const imgIndex = getIndex(offset);
          const isCenter = offset === 0;

          return (
            <motion.div
              key={imgIndex}
              initial={{
                x: offset * 300,
                opacity: 0,
                scale: isCenter ? 0.9 : 0.7,
              }}
              animate={{
                x: offset * 180,
                opacity: 1,
                scale: isCenter ? 1 : 0.8,
              }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              {isCenter ? (
                <div className="relative w-[180px] h-[275px]">
                  <Image
                    src={images[imgIndex]}
                    alt={`Imagen ${imgIndex}`}
                    width={140}
                    height={380}
                    className="absolute -top-[21px] left-[21px] rounded-xl"
                  />
                </div>
              ) : (
                <Image
                  src={images[imgIndex]}
                  alt={`Imagen ${imgIndex}`}
                  width={160}
                  height={320}
                  className="rounded-xl shadow-lg"
                />
              )}
            </motion.div>
          );
        })}

        {/* Marco del celular fijo, sin animación */}
        <div className="absolute right-[10px] bottom-[48px] w-[160px] h-[300px] pointer-events-none z-10">
          <Image
            src={marcoCelular}
            alt="marco celular"
            fill
            className="pointer-events-none"
          />
        </div>
      </div>
    </>
  );
}
