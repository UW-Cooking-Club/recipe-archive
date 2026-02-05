import heroImg from "@assets/Cooking_Hero.webp";

function PageHero({ title, children }) {
  return (
    <section className="relative h-[400px] bg-dark">
      <img src={heroImg} alt="Cooking" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 px-16 py-10 text-center">
          {children || <h1 className="font-heading text-5xl text-gray-dark">{title}</h1>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
