import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import Image from "next/image";
import carpeta from "../../media/carpetaVaciaFina.png";

export default function Clientes({ prop }) {
  return (
    <HorizontalScrollWrapper>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center text-6xl mb-6 text-white">
          <p className="">NUESTROS</p>
          <p className="font-bold">CLIENTES</p>
        </div>
        <div className="grid grid-cols-4 gap-4 "></div>
      </div>
    </HorizontalScrollWrapper>
  );
}
