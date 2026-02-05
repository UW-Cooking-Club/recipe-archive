import whoAreWeImg from "@assets/WhoAreWe_Photo.png";

function WhoAreWe() {
  return (
    <section className="bg-cream py-12 px-8">
      <div className="max-w-4xl mx-auto bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img src={whoAreWeImg} alt="Club members" className="w-full md:w-1/3 object-cover" />
        <div className="p-8 text-white">
          <h2 className="font-fun text-4xl font-semibold mb-4">Who Are We?</h2>
          <p className="font-body text-sm leading-relaxed">
            The Cooking Club serves up cooking classes, workshops, bake sales, potlucks, and other food-related
            adventures. We cover the full spectrum of foods from fancy pasta classes to quick and dirty tips to help you
            manage the necessary evil known as ‘cooking during midterms’. When we’re not in the kitchen or hosting our
            famous classes, we occasionally venture out to the real world to visit coffee roasters, picnic areas,
            strawberry fields, or bonfire pits. If we’re not doing any of the above, our members are usually busy trying
            to craft an amazing burger or a cupcake to help fuel the culinary debauchery!
          </p>
          <br />
          <p className="font-body text-sm leading-relaxed">
            Join our{" "}
            <a
              href="https://discord.gg/Gacu9hZ6sy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80"
            >
              <span className="font-bold">Discord server </span>
            </a>
            and follow our{" "}
            <a
              href="https://www.instagram.com/uwcookingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80"
            >
              <span className="font-bold">Instagram </span>
            </a>
            to keep up with our events and become apart of the community!
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
