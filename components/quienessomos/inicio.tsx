import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import imagen from "../../media/MaterialWeb/quienessomosbanner.jpg";
import imagen2 from "../../media/MaterialWeb/quienessomosbannervertical.jpg";

export default function InicioQS() {
  return (
    <div className="h-screen w-screen flex-shrink-0 flex flex-row justify-between items-center px-8">
      <div></div>
      <div className="text-center flex flex-col">
        <div className="flex flex-col justify-center items-center  mb-6 ">
          <p className="font-bold text-6xl 3xl:text-7xl">¿QUIÉNES</p>
          <p className="text-gradient-cas text-6xl 3xl:text-8xl">SOMOS?</p>
        </div>
        <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto">
          Somos una agencia de marketing que diseña soluciones a la medida de tu
          negocio. Planificamos, creamos y medimos para que tu marca crezca con
          propósito y puedas delegar con tranquilidad.
        </p>
        <div className="my-12 animate-bounce flex justify-center items-center">
          <FaChevronRight className="text-black text-4xl" />
        </div>
      </div>
      <Image src={imagen2} alt="imagen de stock" className="h-screen w-auto flex mr-14" />
    </div>
  );
}
// import { FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import imagen from "../../media/MaterialWeb/quienessomosbanner.jpg"
// import imagen2 from "../../media/MaterialWeb/quienessomosbannervertical.jpg"

// export default function InicioQS() {
//   return (
//     <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
//       <div className="text-center">
//         <div className="flex flex-col justify-center items-center  mb-6 ">
//           <p className="font-bold text-6xl 3xl:text-7xl">¿QUIÉNES</p>
//           <p className="text-gradient-cas text-6xl 3xl:text-8xl">SOMOS?</p>
//         </div>
//         <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto">
//           Somos una agencia de marketing que diseña soluciones a la medida de tu
//           negocio. Planificamos, creamos y medimos para que tu marca crezca con
//           propósito y puedas delegar con tranquilidad.
//         </p>
//       </div>
//       <div className="my-12 animate-bounce">
//         <FaChevronRight className="text-black text-4xl" />
//       </div>
//       <Image src={imagen} alt="imagen de stock" className=""/>
//     </div>
//   );
// }
