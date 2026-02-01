function RecipeCard({ name, image }) {
  return (
    <div className="relative overflow-hidden rounded cursor-pointer group">
      <img src={image} alt={name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform" />
      <div className="absolute bottom-0 left-0 right-0 bg-dark/70 px-3 py-2">
        <p className="font-body text-white text-sm text-center">{name}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
