import AnimatedVideo from "../video";

export default function SlideMain() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className=" md:w-1/2 flex flex-col items-end mb-8 md:mb-0 ">
        <h1 className="text-5xl md:text-8xl text-white uppercase font-[1000] ">
          SOMOS
        </h1>
        <h1 className="text-5xl md:text-8xl text-white uppercase custom-stroke">
          CREATIVOS
        </h1>{" "}
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-start">
        <AnimatedVideo />
      </div>
    </div>
  );
}
