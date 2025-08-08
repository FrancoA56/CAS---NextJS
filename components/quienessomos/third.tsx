export default function ThirdQS() {
  const valores = [
    {
      title: "TRABAJO EN EQUIPO:",
      desc: "Contribuyendo a una experiencia interdisciplinaria.",
      color: "#A5E6A8",
    },
    {
      title: "CALIDAD:",
      desc: "Fortaleciendo la excelencia para cada uno de nuestros clientes.",
      color: "#B791DD",
    },
    {
      title: "INNOVACIÓN:",
      desc: "Transformando las ideas en hechos.",
      color: "#78C8D2",
    },
    {
      title: "COMPROMISO:",
      desc: "Responsabilidad ante los colaboradores y nuestros clientes, implementando creatividad para que cada proyecto sea único.",
      color: "#EE8EC3",
    },
    {
      title: "RESPONSABILIDAD:",
      desc: "Nos ocupamos de las necesidades de nuestros clientes.",
      color: "#FFDF7D",
    },
    {
      title: "PROFESIONALIDAD:",
      desc: "Buscando la mejor opción para cada cliente. Colaborar con las metas con esfuerzo constante y responsabilidad.",
      color: "#888A8B",
    },
    {
      title: "ÉTICA:",
      desc: "Siendo confiables con la información que manejamos.",
      color: "#FFC4AC",
    },
  ];

  return (
    <div className="h-screen w-screen flex-shrink-0 flex items-center px-16 justify-center">
      <div className="w-full md:max-w-6xl 3xl:max-w-7xl px-0 xl:px-24 3xl:px-0">
        <div className="inline-block md:hidden">
          <h2 className="text-5xl 3xl:text-6xl text-gradient-cas mb-8 ">
            VALORES
          </h2>
        </div>
        <div
          className="3xl:grid md:grid-cols-2 hidden gap-8"
          style={{ gridAutoRows: "110px" }}
        >
          <div className="inline-block">
            <h2 className="text-5xl 3xl:text-6xl text-gradient-cas mb-8 ">
              VALORES
            </h2>
          </div>
          {valores.map((item, index) => (
            <div
              key={index}
              className="border-l-4 pl-4 flex flex-col justify-center"
              style={{ borderLeftColor: item.color }}
            >
              <h3 className="text-xl 3xl:text-2xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black text-lg 3xl:text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="md:grid md:grid-cols-2 hidden gap-8 3xl:hidden"
          style={{ gridAutoRows: "95px" }}
        >
          {valores.map((item, index) => (
            <div
              key={index}
              className="border-l-4 pl-4 flex flex-col justify-center"
              style={{ borderLeftColor: item.color }}
            >
              <h3 className="text-lg font-bold text-black">{item.title}</h3>
              <p className="text-black text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:hidden gap-8">
          {valores.map((item, index) => (
            <div
              key={index}
              className="border-l-4 pl-4 flex flex-col justify-center"
              style={{ borderLeftColor: item.color }}
            >
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black text-sm ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
