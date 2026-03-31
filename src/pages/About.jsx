import PageHero from "@components/PageHero";
import TeamSection from "@components/about/TeamSection";
import aboutBanner from "@assets/aboutUs_banner.jpg";
import aboutImage from "@assets/aboutUs_image.jpg";
import mteSticker from "@assets/MTE_sticker.svg";
import panSticker from "@assets/pan_sticker.svg";
import whiteLogo from "@assets/whiteLogo_sticker.svg";

const member = (id, name, role) => ({
  id,
  name,
  role,
  image: "https://placehold.co/200x200/e2e8f0/475569?text=Photo",
});

const teamData = [
  {
    title: "Prez",
    columns: 2,
    members: [member(1, "Ashley", "Co-President"), member(2, "Amal", "Co-President")],
  },
  {
    title: "Admin",
    columns: 4,
    members: [
      member(1, "Bandana", "Co-VP Finance"),
      member(2, "Gurman", "Co-VP Finance"),
      member(3, "Megan", "VP Internal"),
      member(4, "Agishan", "VP Web"),
      member(5, "Allen", "Webmaster"),
      member(6, "Dhyey", "Webmaster"),
      member(7, "Angela", "Webmaster"),
    ],
  },
  {
    title: "Content",
    columns: 4,
    members: [
      member(1, "Phoebe", "Content Lead"),
      member(2, "Cedric", "Designer"),
      member(3, "Sequoia", "Designer"),
      member(4, "Supneet", "Communications"),
      member(5, "Noah", "Production"),
      member(6, "Desmond", "Production"),
      member(7, "Caitlyn", "Production"),
    ],
  },
  {
    title: "Events",
    columns: 4,
    members: [
      member(1, "Abigail", "Events Manager"),
      member(2, "Anna", "Events Manager"),
      member(3, "O'Delia", "Class Lead"),
      member(4, "Nicole", "Class Lead"),
      member(5, "Sam", "Class Lead"),
      member(6, "Julianna", "Events Support"),
      member(7, "Anson", "Events Support"),
      member(8, "Jenni", "Events Support"),
      member(9, "Sherry", "Events Support"),
      member(10, "Victoria", "Events Support"),
      member(11, "Emily", "Events Support"),
      member(12, "Jiale", "Events Support"),
      member(13, "Eeshal", "Events Support"),
      member(14, "Rhyanna", "Club Baker"),
      member(15, "Michelle", "Club Baker"),
      member(16, "Daniel", "Club Baker"),
    ],
  },
];

function About() {
  return (
    <>
      <PageHero image={aboutBanner} alt="About Us" title="About Us" />

      {/* About Us group photo + info card */}
      <section className="relative pb-8 px-8 pt-8">
        <img
          src={aboutImage}
          alt="Cooking Club group photo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/70" />
        <div className="max-w-6xl mx-auto relative z-10 flex justify-center">
          <div className="bg-primary rounded-lg overflow-visible p-8 md:p-10 text-white max-w-[56rem]">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Our Cooking Philosophy</h2>
            <p className="font-body text-sm md:text-base leading-relaxed mb-2">
              &ldquo;Anyone can cook, but only the fearless can become great.&rdquo; (Ratatouille, 2007)
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed mb-6">
              You&rsquo;ve heard how food brings people together, but the act of cooking, sharing a kitchen with a
              stranger or someone you love, is one of the greatest acts of fearlessness. At Cooking Club, we give
              people a place to connect over the shared joy of cooking. In the kitchen with us, you can let go of
              all fears, and become great!
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">How To Get Involved</h2>
            <p className="font-body text-sm md:text-base leading-relaxed">
              We are a club that welcomes all! Whether you&rsquo;re a pro chef or just learning how to cook,
              cooking club is the place for you. We host a variety of events outside of cooking classes, such as
              bake sales and movie eat-alongs for example! Want to get even more involved? Our exec team re-hires
              every term!
            </p>
            <div className="flex justify-center mt-6">
              <img src={whiteLogo} alt="UWCC Logo" className="h-10 md:h-12 opacity-80" />
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="max-w-xl mx-auto mt-8 relative z-10">
          <hr className="border-primary border-t-2" />
        </div>
      </section>

      {/* Meet The Execs - TODO: implement next term */}
      {/* <section className="bg-dark pt-10 pb-6 px-8 relative overflow-hidden">
        <img
          src={panSticker}
          alt=""
          className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-48 lg:w-56 opacity-90"
        />
        <div className="flex justify-center">
          <img src={mteSticker} alt="Meet The Execs" className="w-64 md:w-80 lg:w-96" />
        </div>
      </section>

      <section className="bg-dark py-8 px-8 relative overflow-hidden">
        {teamData.map((section) => (
          <TeamSection key={section.title} title={section.title} members={section.members} columns={section.columns} />
        ))}
      </section> */}
    </>
  );
}

export default About;
