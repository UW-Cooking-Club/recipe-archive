import whoAreWeImg from "@assets/WhoAreWe_Photo.png";

function WhoAreWe() {
  return (
    <section className="bg-cream py-12 px-8">
      <div className="max-w-4xl mx-auto bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img src={whoAreWeImg} alt="Club members" className="w-full md:w-1/3 object-cover" />
        <div className="p-8 text-white">
          <h2 className="font-heading text-3xl mb-4">Who Are We?</h2>
          <p className="font-body text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
