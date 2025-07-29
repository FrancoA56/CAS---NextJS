"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import Image1 from "../../media/logoTscCarruselServicios.png";
import Image2 from "../../media/logoTscCarruselServicios.png";
import Image3 from "../../media/logoTscCarruselServicios.png";

const images = [Image1, Image2, Image3];

export default function VerticalCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number) =>
    (index + offset + images.length) % images.length;

  return (
    <>
      <div className="relative h-[700px] w-[600px] overflow-hidden hidden md:flex flex-col items-center justify-center">
        {[1, 0, -1].map((offset, i) => {
          const imgIndex = getIndex(offset);
          const isCenter = offset === 0;

          return (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 0.7, y: offset * 150 }}
              animate={{
                opacity: isCenter ? 1 : 0.5,
                scale: isCenter ? 1.2 : 0.8,
                y: offset * 260,
              }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              <Image
                src={images[imgIndex]}
                alt={`Imagen ${imgIndex}`}
                className="rounded-xl"
                width={isCenter ? 460 : 300}
                height={isCenter ? 460 : 300}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="relative h-[350px] w-[260px] md:hidden flex flex-col items-center justify-center">
        {[1, 0, -1].map((offset, i) => {
          const imgIndex = getIndex(offset);
          const isCenter = offset === 0;

          return (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 0.7, y: offset * 150 }}
              animate={{
                opacity: isCenter ? 1 : 0,
                scale: isCenter ? 1.2 : 0,
                y: offset * 160,
              }}
              transition={{ duration: 1.4 }}
              className="absolute"
            >
              <Image
                src={images[imgIndex]}
                alt={`Imagen ${imgIndex}`}
                className="rounded-xl"
                width={isCenter ? 460 : 300}
                height={isCenter ? 460 : 300}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
