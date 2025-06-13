export default function ThirdE() {
  return (
    <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-16">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8">
          <span className="text-teal-400">CÓMO</span> TRABAJAMOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Colaboración multidisciplinaria",
            "Enfoque en soluciones, no solo en diseño",
            "Comunicación transparente",
            "Mejora continua basada en datos",
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 w-4 h-4 bg-teal-400 rounded-full"></div>
              <p className="text-xl text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
