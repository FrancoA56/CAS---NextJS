"use client";
import Image from "next/image";
import image1 from "../../media/cuadrada.jpg";
import image2 from "../../media/cuadrada.jpg";
import image3 from "../../media/cuadrada.jpg";

export default function ImagesCol() {
  return (
    <>
      {/*desktop*/}

      <div className=" relative hidden h-screen md:flex flex-row md:flex-col items-end justify-end left-[8%]  bottom-[105%]  pointer-events-none">
        <div className="flex flex-col gap-6">
          <div className="flip-container w-48 3xl:w-64 h-48 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={image1}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={image2}
                  alt="Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          <div className="flip-container w-48 3xl:w-64 h-48 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={image1}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={image2}
                  alt="Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          <div className="flip-container w-48 3xl:w-64 h-48 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={image1}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={image2}
                  alt="Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}
