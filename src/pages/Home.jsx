import Hero from "@components/home/Hero";
import WhoAreWe from "@components/home/WhoAreWe";
import UpcomingEvents from "@components/home/UpcomingEvents";
import InstagramGallery from "@components/home/InstagramGallery";
import usePageMetadata from "../hooks/usePageMetadata";

function Home() {
  usePageMetadata({
    title: "UW Cooking Club",
    description:
      "University of Waterloo Cooking Club — upcoming classes, past events, recipe archive, and how to get involved.",
  });

  return (
    <>
      <Hero />
      <WhoAreWe />
      <UpcomingEvents />
      <InstagramGallery />
    </>
  );
}

export default Home;
