import HorizontalScrollWrapper from "../components/HorizontalScrollWrapper";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/footer";
import AnimatedVideo from "../components/video";
export default function Home() {
  return (
    <HorizontalScrollWrapper>
      <PageWrapper>
        <div className="flex flex-row items-center w-full">
          <div className="w-1/2 flex flex-col items-end">
            <h1 className="text-8xl text-white uppercase font-[1000] ">
              SOMOS
            </h1>
            <h1 className="text-8xl text-white uppercase custom-stroke">
              CREATIVOS
            </h1>
          </div>
          <div className="w-1/2 flex justify-center items-start">
            <AnimatedVideo />
          </div>
        </div>
      </PageWrapper>
      <PageWrapper>
        <h1 className="text-6xl text-white uppercase">Slide 2</h1>
      </PageWrapper>
      <PageWrapper>
        <Footer />
      </PageWrapper>
    </HorizontalScrollWrapper>
  );
}
