"use client";
import Image from "next/image";
import tsc2 from "../../media/tsc-1x1.webp";
import tsc1 from "../../media/tsc-maritimo-1.webp";
import eh from "../../media/onni2.webp";
import ooni from "../../media/wholesale-1x1.webp";
import expex2 from "../../media/expex-1x1.webp";
import expex1 from "../../media/expex6.webp";

export default function ImagesCol() {
  return (
    <>
      {/*desktop*/}
      <div className=" relative hidden h-screen md:flex flex-row md:flex-col items-end justify-end left-[8%]  3xl:bottom-[105%] bottom-[102%]  pointer-events-none">
        <div className="flex flex-col gap-6">
          <div className="flip-container w-44 3xl:w-64 h-44 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={tsc2}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={tsc1}
                  alt="Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          <div className="flip-container w-44 3xl:w-64 h-44 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={ooni}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={eh}
                  alt="Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          <div className="flip-container w-44 3xl:w-64 h-44 3xl:h-64 pointer-events-auto">
            <div className="flipper rotate-on-hover transition-transform duration-700">
              <div className="front">
                <Image
                  src={expex2}
                  alt="Front"
                  className="w-full h-full rounded"
                />
              </div>
              <div className="back">
                <Image
                  src={expex1}
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
