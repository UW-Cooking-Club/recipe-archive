import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import PageHero from "@components/PageHero";
import RecipeCard from "@components/recipes/RecipeCard";

const placeholderRecipes = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "[food name]",
  image: `https://placehold.co/400x300/e2e8f0/475569?text=Recipe+${i + 1}`,
}));

function Recipes() {
  const [search, setSearch] = useState("");

  return (
    <>
      <PageHero title="Recipe Archive" />

      <section className="bg-cream py-8 px-8">
        {/* Search bar */}
        <div className="max-w-4xl mx-auto flex items-center bg-gray-300 rounded-lg overflow-hidden mb-8">
          <FaSearch className="text-gray-600 ml-4" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="flex-1 bg-transparent px-4 py-3 font-body text-sm outline-none"
          />
          <button className="px-4" aria-label="Filter">
            <FaBars className="text-gray-600" />
          </button>
        </div>

        {/* Recipe grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Recipes;
