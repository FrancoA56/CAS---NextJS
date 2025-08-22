// import emileHenry from "../../media/EmileHenry.png";
// import wholesale from "../../media/Wholesale.png";
// import tsc from "../../media/tsc.png";
// import denisRos from "../../media/denisRos.png";
// import expex from "../../media/Expex.png";
// import Image from "next/image";

// export default function Clientes({ prop }) {
//   return (
//     <div className="h-screen w-full flex justify-center items-center flex-col">
//       <div className="flex flex-col justify-center items-center mb-0 md:mb-2 3xl:mb-12 ">
//         <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
//         <p className="text-gradient-cas text-6xl md:text-7xl 3xl:text-8xl">
//           CLIENTES
//         </p>
//       </div>
//       <div className="grid md:flex grid-cols-2 flex-row w-full px-6 md:px-40 justify-center items-center gap-2 md:gap-12">
//         <div className="flex justify-center items-center flip-container w-60 h-60 ">
//           <div className="slide-container">
//             <Image src={tsc} alt="trade and ship co" className="w-52 h-auto" />
//             <div className="slide-text">
//               <p className="text-xl">
//                 Freight <br /> Forwarding
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center flip-container w-60 h-60 ">
//           <div className="slide-container">
//             <div className="w-28">
//               <Image
//                 src={emileHenry}
//                 alt="emile henry argentina"
//                 className="w-16 h-auto"
//               />
//             </div>
//             <div className="slide-text">
//               <p className="text-xl text-center">
//                 Marca francesa de utensilios de cerámica.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center flip-container w-60 h-60 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={wholesale}
//                 alt="wholesale by dyr"
//                 className="w-52 h-auto"
//               />
//             </div>
//             <div className="back-logo">
//               <p className="text-lg text-center">
//                 Representante y distribuidor mayorista de productos de cocina y
//                 bazar
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center flip-container w-60 h-60 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={denisRos}
//                 alt="wholesale by dyr"
//                 className="w-32 h-32"
//               />
//             </div>
//             <div className="back-logo">
//               <p className="text-xl text-center">Deco y Bazar</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center  flip-container w-60 h-60 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={expex}
//                 alt="emile henry argentina"
//                 className="w-52 h-auto"
//               />
//             </div>
//             <div className="back-logo">
//               <p className="text-lg text-center">
//                 Diseño e integración de soluciones tecnológicas
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import emileHenry from "../../media/EmileHenry.png";
import wholesale from "../../media/Wholesale.png";
import tsc from "../../media/tsc.png";
import denisRos from "../../media/denisRos.png";
import expex from "../../media/Expex.png";
import Image from "next/image";

export default function Clientes({ prop }) {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center mb-0 md:mb-2 3xl:mb-12 ">
        <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
        <p className="text-gradient-cas text-6xl md:text-7xl 3xl:text-8xl">
          CLIENTES
        </p>
      </div>
      <div className="grid md:flex grid-cols-2 flex-row w-full px-6 md:px-40 justify-center items-center gap-2 md:gap-12">
        <div className="flex justify-center items-center flip-container w-60 h-60 ">
          <div className="flipper rotate-on-hover transition-transform duration-700">
            <div className="front-logo">
              <Image
                src={tsc}
                alt="trade and ship co"
                className="w-52 h-auto"
              />
            </div>
            <div className="back-logo">
              <p className="text-xl text-center">
                Freight <br /> Forwarding
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flip-container w-60 h-60 ">
          <div className="flipper rotate-on-hover transition-transform duration-700">
            <div className="front-logo">
              <Image
                src={emileHenry}
                alt="emile henry argentina"
                className="w-28 h-auto"
              />
            </div>
            <div className="back-logo">
              <p className="text-xl text-center">
                Marca francesa de utensilios de cerámica.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flip-container w-60 h-60 ">
          <div className="flipper rotate-on-hover transition-transform duration-700">
            <div className="front-logo">
              <Image
                src={wholesale}
                alt="wholesale by dyr"
                className="w-52 h-auto"
              />
            </div>
            <div className="back-logo">
              <p className="text-lg text-center">
                Representante y distribuidor mayorista de productos de cocina y
                bazar
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flip-container w-60 h-60 ">
          <div className="flipper rotate-on-hover transition-transform duration-700">
            <div className="front-logo">
              <Image
                src={denisRos}
                alt="wholesale by dyr"
                className="w-32 h-32"
              />
            </div>
            <div className="back-logo">
              <p className="text-xl text-center">Deco y Bazar</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  flip-container w-60 h-60 ">
          <div className="flipper rotate-on-hover transition-transform duration-700">
            <div className="front-logo">
              <Image
                src={expex}
                alt="emile henry argentina"
                className="w-52 h-auto"
              />
            </div>
            <div className="back-logo">
              <p className="text-lg text-center">
                Diseño e integración de soluciones tecnológicas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
