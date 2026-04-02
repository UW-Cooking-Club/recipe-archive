import HeroBannerImage from "@components/HeroBannerImage";

function PageHero({ image, alt = "", title }) {
  return (
    <section>
      {title && <h1 className="sr-only">{title}</h1>}
      <HeroBannerImage src={image} alt={alt} />
    </section>
  );
}

export default PageHero;
