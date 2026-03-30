function PageHero({ image, alt = "", title }) {
  return (
    <section>
      {title && <h1 className="sr-only">{title}</h1>}
      <img src={image} alt={alt} className="w-full" />
    </section>
  );
}

export default PageHero;
