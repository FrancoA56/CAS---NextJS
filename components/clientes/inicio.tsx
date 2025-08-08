import emileHenry from "../../media/EmileHenry.png";
import wholesale from "../../media/Wholesale.png";
import tsc from "../../media/tsc.png";
import denisRos from "../../media/denisRos.png";
import expex from "../../media/Expex.png";
import Image from "next/image";
import image from "../../media/logoTscCarruselServicios.png";

export default function InicioC() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center mb-0 md:mb-2 3xl:mb-12 ">
        <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
        <p className="text-gradient-cas text-6xl md:text-7xl 3xl:text-8xl">CLIENTES</p>
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
              <Image
                src={image}
                alt="post emilehenry"
                className="w-60 h-auto"
              />
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
              <Image
                src={image}
                alt="post emilehenry"
                className="w-60 h-auto"
              />
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
              <Image
                src={image}
                alt="post emilehenry"
                className="w-60 h-auto"
              />
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
              <Image
                src={image}
                alt="post emilehenry"
                className="w-60 h-auto"
              />
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
              <Image
                src={image}
                alt="post emilehenry"
                className="w-60 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import emileHenry from "../../media/EmileHenry.png";
// import wholesale from "../../media/Wholesale.png";
// import tsc from "../../media/tsc.png";
// import denisRos from "../../media/denisRos.png";
// import expex from "../../media/Expex.png";
// import Image from "next/image";
// import image from "../../media/logoTscCarruselServicios.png";

// export default function InicioC() {
//   return (
//     <div className="h-screen w-full flex justify-center items-center flex-col">
//       <div className="flex flex-col justify-center items-center mb-12 ">
//         <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
//         <p className="text-gradient-cas text-6xl 3xl:text-8xl">CLIENTES</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 w-full px-40">
//         <div className="flex justify-center items-center  flip-container w-auto h-40 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={emileHenry}
//                 alt="emile henry argentina"
//                 className="w-36 object-contain"
//               />
//             </div>
//             <div className="back-logo">
//               <Image
//                 src={image}
//                 alt="post emilehenry"
//                 className="w-60 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center flip-container w-auto h-40 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={wholesale}
//                 alt="wholesale by dyr"
//                 className="w-72 h-auto"
//               />
//             </div>
//             <div className="back-logo">
//               <Image
//                 src={image}
//                 alt="post emilehenry"
//                 className="w-60 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid w-full px-40">
//         <div className="flex justify-center items-center flip-container w-auto h-40 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={tsc}
//                 alt="trade and ship co"
//                 className="w-60 h-auto mb-6"
//               />
//             </div>
//             <div className="back-logo">
//               <Image
//                 src={image}
//                 alt="post emilehenry"
//                 className="w-60 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//    <div className="grid grid-cols-1 md:grid-cols-2 w-full px-40">
//         <div className="flex justify-center items-center  flip-container w-auto h-40 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={expex}
//                 alt="emile henry argentina"
//                 className="w-52 object-contain"
//               />
//             </div>
//             <div className="back-logo">
//               <Image
//                 src={image}
//                 alt="post emilehenry"
//                 className="w-60 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center flip-container w-auto h-40 ">
//           <div className="flipper rotate-on-hover transition-transform duration-700">
//             <div className="front-logo">
//               <Image
//                 src={denisRos}
//                 alt="wholesale by dyr"
//                 className="w-40 h-auto"
//               />
//             </div>
//             <div className="back-logo">
//               <Image
//                 src={image}
//                 alt="post emilehenry"
//                 className="w-60 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import emileHenry from "../../media/EmileHenry.png";
// import wholesale from "../../media/Wholesale.png";
// import tsc from "../../media/tsc.png";
// import denisRos from "../../media/denisRos.png";
// import expex from "../../media/Expex.png";
// import Image from "next/image";
// export default function InicioC() {
//   return (
//     <div className="h-screen w-full flex justify-center items-center flex-col">
//       <div className="flex flex-col justify-center items-center  mb-12 ">
//         <p className="font-bold text-6xl 3xl:text-7xl">NUESTROS</p>
//         <p className="text-gradient-cas text-6xl 3xl:text-8xl">CLIENTES</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 w-full px-40">
//         <div className="flex justify-center items-center mb-8">
//           <Image
//             src={emileHenry}
//             alt="emile henry argentina"
//             className="w-60 h-auto"
//           />
//         </div>
//         <div className="flex justify-center items-center mb-8">
//           <Image
//             src={wholesale}
//             alt="wholesale by dyr"
//             className="w-80 h-auto"
//           />
//         </div>
//       </div>
//       <Image src={tsc} alt="trade and ship co" className="w-60 h-auto mb-12" />

//       <div className="grid grid-cols-1 md:grid-cols-2 w-full px-40">
//         <div className="flex justify-center items-center mb-12">
//           <Image src={expex} alt="expex" className="w-60 h-auto" />
//         </div>
//         <div className="flex justify-center items-center mb-12">
//           <Image src={denisRos} alt="denis & ros" className="w-72 h-auto" />
//         </div>
//       </div>
//     </div>
//   );
// }
