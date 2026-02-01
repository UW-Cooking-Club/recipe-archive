import PageHero from "@components/PageHero";
import uwccLogo from "@assets/UWCC_Black_nobg_Logo.png";

function Hero() {
  return (
    <PageHero>
      <p className="font-body text-lg text-gray-dark">University Of Waterloo</p>
      <h1 className="font-heading text-5xl text-gray-dark mt-1">Cooking Club</h1>
      <img src={uwccLogo} alt="UWCC Logo" className="h-12 mx-auto mt-3" />
    </PageHero>
  );
}

export default Hero;
