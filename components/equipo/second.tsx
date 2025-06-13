import Image from "next/image";
import trabajo from "../../media/trabajo.jpg";
import trabajo2 from "../../media/trabajo2.jpg";

export default function SecondE() {
  const teamMembers = [
    {
      name: "Victoria",
      role: "Directora Creativa",
      image: trabajo2,
      fact: "Especialista en branding con 10+ años de experiencia",
    },
    {
      name: "Melissa",
      role: "Lead Developer",
      image: trabajo2,
      fact: "Experto en React y arquitecturas escalables",
    },
    {
      name: "Nadiuska",
      role: "Strategist Digital",
      image: trabajo2,
      fact: "Apasionada por métricas y crecimiento orgánico",
    },
    {
      name: "Franco",
      role: "Programador Full Stack",
      image: trabajo,
      fact: "Creador de experiencias digitales innovadoras",
    },
  ];

  return (
    <div className="h-screen w-screen flex-shrink-0 flex items-center px-4">
      <div className="flex space-x-8 px-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-105"
          >
            <div className="h-64 relative">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-teal-400 mb-2">{member.role}</p>
              <p className="text-white text-sm">{member.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
