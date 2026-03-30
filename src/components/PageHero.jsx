function PageHero({ image, alt = "" }) {
  return (
    <section>
      <img src={image} alt={alt} className="w-full" />
    </section>
  );
}

export default PageHero;
