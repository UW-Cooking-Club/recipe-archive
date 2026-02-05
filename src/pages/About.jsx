import { FaDiscord } from "react-icons/fa";
import PageHero from "@components/PageHero";
import TeamSection from "@components/about/TeamSection";

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
      <PageHero title="About Us - Clearly a work in progress" />

      {/* Who Are We + Our Cooking Philosophy */}
      <section className="bg-cream py-10 px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src="https://placehold.co/300x250/e2e8f0/475569?text=Who+Are+We"
              alt="Who are we"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-8 text-white">
              <h2 className="font-heading text-3xl mb-4">Who Are We?</h2>
              <p className="font-body text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src="https://placehold.co/300x250/e2e8f0/475569?text=Philosophy"
              alt="Our cooking philosophy"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-8 text-white">
              <h2 className="font-heading text-3xl mb-4">Our Cooking Philosophy</h2>
              <p className="font-body text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="bg-cream pb-4">
        <h2 className="font-heading text-4xl text-gray-dark text-center py-6">Meet The Team</h2>
      </section>

      <section className="bg-dark py-8 px-8">
        {teamData.map((section) => (
          <TeamSection key={section.title} title={section.title} members={section.members} columns={section.columns} />
        ))}
      </section>

      {/* Join The Club */}
      <section className="bg-cream py-10 px-8">
        <h2 className="font-heading text-4xl text-gray-dark text-center mb-6">Join The Club</h2>
        <div className="max-w-4xl mx-auto bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 text-white flex-1">
            <p className="font-body text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="bg-cream py-10 px-8">
        <h2 className="font-heading text-4xl text-gray-dark text-center mb-6">Have Questions?</h2>
        <div className="max-w-4xl mx-auto bg-primary rounded-lg p-8">
          <p className="font-body text-sm text-white leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
