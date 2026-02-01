import logo from "@assets/Logo1.png";

function Navbar() {
  return (
    <nav className="bg-primary flex items-center justify-between px-8 py-3">
      <a href="/">
        <img src={logo} alt="UW Cooking Club" className="h-16" />
      </a>
      <div className="flex items-center gap-8 font-body text-white">
        <a href="/recipes" className="hover:opacity-80">
          Recipes
        </a>
        <a href="/events" className="hover:opacity-80">
          Events
        </a>
        <a href="/about" className="hover:opacity-80">
          About Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
