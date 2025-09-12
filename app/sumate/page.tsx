"use client";
import imagen from "../../media/sumateAlTeam.webp";
import Image from "next/image";
import { useIsIOS } from "../../hooks/useIsIOS";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumate al Team | CAS Marketing",
  description: "¿Queres sumarte a nuestro banco de talentos? ¡Contactanos!",
};

export default function Sumate() {
  const isIOS = useIsIOS();
  if (isIOS === null) return null; // Esperar que se detecte

  return (
    <div className="h-[100dvh] safe-area w-screen flex-shrink-0 flex flex-row justify-between items-center px-8">
      <div></div>
      <Image
        src={imagen}
        alt="imagen"
        className="h-[100dvh] safe-area w-auto hidden md:flex"
      />
      {isIOS ? (
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-4xl">SUMATE</p>
            <p className="text-gradient-cas text-4xl ">AL TEAM</p>
          </div>
          <p className="text-base  text-black max-w-2xl mx-auto mt-2 mb-2 ">
            Si la creatividad y el trabajo en equipo es lo tuyo, compartí tu CV
            y sumate a nuestro banco de talentos para futuras oportunidades.{" "}
          </p>
          <p className="text-base  text-black max-w-2xl mx-auto mt-2 mb-2 ">
            Compartí tu perfil a{" "}
            <a
              className=" text-teal font-bold "
              href="mailto:rrhh@castradeandco.com"
            >
              {" "}
              rrhh@castradeandco.com{" "}
            </a>{" "}
            adjuntando tu cv.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop */}
          <div className="text-center hidden md:flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-7xl">SUMATE</p>
              <p className="text-gradient-cas text-8xl">AL TEAM</p>
            </div>
            <p className="text-2xl  text-black max-w-2xl mx-auto mt-6 mb-2 ">
              Si la creatividad y el trabajo en equipo es lo tuyo, compartí tu
              CV y sumate a nuestro banco de talentos para futuras
              oportunidades.{" "}
            </p>
            <p className="text-2xl  text-black max-w-2xl mx-auto mt-6 mb-2 ">
              Compartí tu perfil a{" "}
              <a
                className=" text-teal font-bold "
                href="mailto:rrhh@castradeandco.com"
              >
                {" "}
                rrhh@castradeandco.com{" "}
              </a>{" "}
              adjuntando tu cv.
            </p>
          </div>

          {/* Movil */}

          <div className="text-center md:hidden flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-5xl">SUMATE</p>
              <p className="text-gradient-cas text-6xl">AL TEAM</p>
            </div>
            <p className="text-xl  text-black max-w-2xl mx-auto mt-2 mb-2 ">
              Si la creatividad y el trabajo en equipo es lo tuyo, compartí tu
              CV y sumate a nuestro banco de talentos para futuras
              oportunidades.{" "}
            </p>
            <p className="text-xl  text-black max-w-2xl mx-auto mt-2 mb-2 ">
              Compartí tu perfil a{" "}
              <a
                className=" text-teal font-bold "
                href="mailto:rrhh@castradeandco.com"
              >
                {" "}
                rrhh@castradeandco.com{" "}
              </a>{" "}
              adjuntando tu cv.
            </p>
          </div>
        </>
      )}

      <div></div>
    </div>
  );
}
