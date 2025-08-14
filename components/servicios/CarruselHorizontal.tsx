"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import marcoCelular from "../../media/pantalla-celu.png";
import image1 from "../../media/wholesaleServicios2.png";
import image2 from "../../media/wholesaleServicios3.png";
import image3 from "../../media/wholesaleServicios2.png";

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

      <div className="hidden justify-center relative w-1/2 h-full md:flex items-center pt-44 pl-[40%]">
        {/* Imagen actual dentro del marco */}
        <AnimatePresence>
          {[0, 0].map((offset) => {
            const imgIndex = getIndex(offset);
            const isCenter = offset === 1;

            return (
              <motion.div
                key={imgIndex}
                initial={{
                  x: offset * 300,
                  opacity: 0,
                  scale: isCenter ? 0.95 : 0.7,
                }}
                animate={{
                  x: offset * 180,
                  opacity: 1,
                  scale: isCenter ? 1 : 0.9,
                }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full"
              >
                {isCenter ? (
                  <div className="relative w-full h-full top-[80px]">
                    <Image
                      src={images[imgIndex]}
                      alt={`Imagen ${imgIndex}`}
                      className="rounded-2xl px-2" // Padding para simular el marco
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full opacity-60">
                    <Image
                      src={images[imgIndex]}
                      alt={`Imagen ${imgIndex}`}
                      className="rounded-2xl object-contain p-[20px]"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Marco fijo por encima */}
        <div className="absolute inset-0 z-10 pointer-events-none top-[14.7%] left-[45%] ">
          <Image
            src={marcoCelular}
            alt="marco celular"
            className="object-contain w-[322px] h-auto  "
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
                    className="absolute -top-[21px] left-[20px] rounded-xl"
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
