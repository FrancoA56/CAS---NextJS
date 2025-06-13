export default function ThirdQS() {
  return (
    <div className="h-screen w-screen flex-shrink-0 flex items-center px-16 justify-center">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8 items-center flex gap-2 justify-center">
          Nuestro <span className="text-teal-400"> Enfoque</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Estrategia",
              desc: "Planes personalizados basados en tus objetivos específicos",
            },
            {
              title: "Tecnología",
              desc: "Herramientas y plataformas de última generación",
            },
            {
              title: "Resultados",
              desc: "Métricas claras y reportes transparentes",
            },
            {
              title: "Innovación",
              desc: "Siempre explorando nuevas fronteras digitales",
            },
          ].map((item, index) => (
            <div key={index} className="border-l-4 border-teal-400 pl-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
