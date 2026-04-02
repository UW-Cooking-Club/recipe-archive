import HeroBannerImage from "@components/HeroBannerImage";
import bannerImg from "@assets/landingPage_banner.jpg";

function Hero() {
  return (
    <section>
      <HeroBannerImage src={bannerImg} alt="UW Cooking Club" fetchPriority="high" />
    </section>
  );
}

export default Hero;
