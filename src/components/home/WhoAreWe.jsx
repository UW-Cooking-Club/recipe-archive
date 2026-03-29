import { Link } from "react-router-dom";
import ccHomeImg from "@assets/cc_home_img.png";
import ccSticker from "@assets/CC_sticker.png";

function WhoAreWe() {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
        <div className="relative w-full md:w-2/5 h-[420px] md:h-[500px]">
          {/* Image wrapper (handles rounding + cropping) */}
          <div className="w-full h-full overflow-hidden rounded-lg">
            <img
              src={ccHomeImg}
              alt="Club members"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sticker */}
          <img
            src={ccSticker}
            alt="Cooking Club sticker"
            className="absolute top-0 left-0 w-40 md:w-52 z-10 -translate-x-1/4 -translate-y-1/4 rotate-[-15deg]"
          />
        </div>

        <div className="flex-1 pt-4">
          <h2 className="font-fun text-4xl font-semibold text-primary border-b-2 border-primary pb-2 mb-5">
            Who Are We?
          </h2>
          <p className="font-body text-sm leading-relaxed text-gray-dark mb-4">
            The Cooking Club serves up cooking classes, workshops, bake sales, potlucks, and other food-related
            adventures. We cover the full spectrum of foods from fancy pasta classes to quick and dirty tips to help you
            manage the necessary evil known as 'cooking during midterms'.
          </p>
          <p className="font-body text-sm leading-relaxed text-gray-dark mb-8">
            When we're not in the kitchen or hosting our famous classes, we occasionally venture out to the real world
            to visit coffee roasters, picnic areas, strawberry fields, or bonfire pits. If we're not doing any of the
            above, our members are usually busy trying to craft an amazing burger or a cupcake to help fuel the culinary
            debauchery!
          </p>
          <p className="font-body text-sm leading-relaxed text-gray-dark mb-8">
            Join our{" "}
            <a href="https://discord.gg/Gacu9hZ6sy" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:opacity-80">
              Discord server
            </a>{" "}
            and follow our{" "}
            <a href="https://www.instagram.com/uwcookingclub/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:opacity-80">
              Instagram
            </a>{" "}
            to keep up with our events and become a part of the community!
          </p>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/Gacu9hZ6sy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-body px-6 py-2 rounded-full hover:opacity-80"
            >
              Get Tickets
            </a>
            <Link to="/events" className="border-2 border-primary text-primary font-body px-6 py-2 rounded-full hover:opacity-80">
              See Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
