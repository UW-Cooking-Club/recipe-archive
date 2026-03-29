import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@assets/Logo1.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary fixed top-0 left-0 right-0 z-50 px-4 py-2 md:top-3 md:left-3 md:right-3 md:rounded-full md:px-8 md:py-2">
      <div className="flex items-center justify-between">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="UW Cooking Club" className="h-10 md:h-12" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 font-body text-white">
          <Link to="/recipes" className="hover:opacity-80">
            Recipes
          </Link>
          <Link to="/events" className="hover:opacity-80">
            Events
          </Link>
          <Link to="/about" className="hover:opacity-80">
            About Us
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 font-body text-white py-4 px-2 md:hidden">
          <Link to="/recipes" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>
            Recipes
          </Link>
          <Link to="/events" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
          <Link to="/about" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
