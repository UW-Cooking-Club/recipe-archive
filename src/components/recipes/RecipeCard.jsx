import { Link } from "react-router-dom";
import FadeInImage from "@components/FadeInImage";

function RecipeCard({ name, image, slug }) {
  return (
    <Link to={`/recipes/${slug}`} className="relative overflow-hidden rounded cursor-pointer group block bg-gray-200">
      {image ? (
        <FadeInImage
          src={image}
          alt={name}
          wrapperClassName="h-56 w-full"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div
          role="img"
          aria-label={name}
          className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-500 font-body text-sm"
        >
          Photo coming soon
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/70 px-3 py-2">
        <p className="font-body text-white text-sm text-center">{name}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
