import heroImg from "@assets/Cooking_Hero.webp";
import uwccLogo from "@assets/UWCC_Black_nobg_Logo.webp";

function Hero() {
  return (
    <section className="relative h-[450px] bg-dark">
      {/* Background image */}
      <img src={heroImg} alt="Cooking" className="absolute inset-0 w-full h-full object-cover" />

      {/* White overlay card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 px-12 py-10 text-center">
          <p className="font-body text-lg text-gray-dark">University Of Waterloo</p>
          <h1 className="font-heading text-5xl text-gray-dark mt-1">Cooking Club</h1>
          <img src={uwccLogo} alt="UWCC Logo" className="h-12 mx-auto mt-3" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
