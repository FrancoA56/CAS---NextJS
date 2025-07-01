"use client";
import Image from "next/image";
import { useState } from "react";
import image2 from "../../media/trabajo.jpg";
import image1 from "../../media/trabajo2.jpg";

export default function SecondE() {
  const teamMembers = [
    {
      imagen: image1,
      name: "Belén",
      role: "CEO",
      fact: "Líder que hace que todo funcione… incluso los días sin WiFi y sin café.",
    },
    {
      imagen: image2,
      name: "Alejandro",
      role: "Gerente General",
      fact: "Líder que guía, motiva y sobrevuelve infinitas reuniones sin perder la paciencia.",
    },
    {
      imagen: image1,
      name: "Sabrina",
      role: "Digital Strategy Manager",
      fact: "Detecta oportunidades como si tuviera radar. Habla con clientes, los entiende y los conquista.",
    },
    {
      imagen: image1,
      name: "Melissa",
      role: "Community Manager",
      fact: "Especialista en convertir ideas locas en posts geniales y en hacer que el feed nunca pierda el ritmo.",
    },
    {
      imagen: image1,
      name: "Agustina",
      role: "Analista de Marketing",
      fact: "La que convierte un simple mail en una fiesta para la bandeja de entrada.",
    },
    {
      imagen: image1,
      name: "Victoria",
      role: "Community Manager",
      fact: "Creadora de captions épicos y domadora de algoritmos. Si algo tiene likes, seguro lo subió ella.",
    },
    {
      imagen: image1,
      name: "Nadiuska",
      role: "Diseñadora Gráfica",
      fact: "Experta en transformar ideas vagas en diseños que impactan. Su secreto: mucho talento.",
    },
    {
      imagen: image2,
      name: "Franco",
      role: "Programador Web",
      fact: "El héroe silencioso que mantiene la web andando, aunque nadie entienda cómo lo hace.",
    },
    {
      imagen: image1,
      name: "Lucia",
      role: "Recursos Humanos",
      fact: "Gestiona gente, resuelve dramas y se asegura que todos lleguen a tiempo (o al menos lo intenta).",
    },
  ];

  const colors = [
    "#FFDF7D",
    "#A5E6A8",
    "#EE8EC3",
    "#FFC4AC",
    "#EE8EC3",
    "#B791DD",
    "#78C8D2",
    "#A5E6A8",
    "#FFC4AC",
  ];

  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-white relative">
      <div className="w-full max-w-6xl space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => {
            const isOpen = openCard === index;
            return (
              <div
                key={member.name}
                className={`relative group bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 cursor-pointer ${
                  isOpen ? "z-10 scale-105" : "scale-100"
                } hover:scale-110 `}
                onClick={() => setOpenCard(isOpen ? null : index)}
              >
                <div className="flex p-4">
                  <div className="w-24 h-24 flex-shrink-0 relative">
                    <Image
                      src={member.imagen}
                      alt={`Foto de ${member.name}`}
                      className=" rounded-md"
                    />
                  </div>
                  <div
                    className={` text-center flex flex-col transition-all duration-300 ${
                      isOpen
                        ? "justify-center"
                        : "justify-center group-hover:justify-start"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-black">
                      {member.name}
                    </h3>
                    <p
                      className="mb-1 font-semibold"
                      style={{ color: colors[index] }}
                    >
                      {member.role}
                    </p>
                    {/* Fact solo visible en hover o abierto */}
                    <p
                      className={`text-black text-sm mt-2 transition-opacity duration-300 ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {member.fact}
                    </p>
                  </div>
                </div>

                {/* ✖ botón solo en mobile cuando está abierta */}
                {isOpen && (
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold md:hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCard(null);
                    }}
                  >
                    ✖
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
