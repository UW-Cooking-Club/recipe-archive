import { Link } from "react-router-dom";
import logo from "@assets/Logo1.png";

function Navbar() {
  return (
    <nav className="bg-primary flex items-center justify-between px-8 py-3">
      <Link to="/">
        <img src={logo} alt="UW Cooking Club" className="h-16" />
      </Link>
      <div className="flex items-center gap-8 font-body text-white">
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
    </nav>
  );
}

export default Navbar;
