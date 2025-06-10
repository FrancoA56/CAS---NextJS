import HorizontalScrollWrapper from "../components/HorizontalScrollWrapper";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/footer";
import AnimatedVideo from "../components/video";
import SecondSlide from "../components/slides/SecondSlide";
import SlideMain from "../components/slides/MainSlide";
export default function Home() {
  return (
    <HorizontalScrollWrapper>
      <PageWrapper>
        <SlideMain />
      </PageWrapper>
      <PageWrapper>
        <SecondSlide/>
      </PageWrapper>
      <PageWrapper>
        <Footer />
      </PageWrapper>
    </HorizontalScrollWrapper>
  );
}
