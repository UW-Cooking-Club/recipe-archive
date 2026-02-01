import { FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary px-8 py-4 flex items-center justify-between">
      <p className="text-white text-sm">© UWCC 2026</p>
      <div className="flex flex-col items-end gap-1">
        <p className="text-white text-sm">Our Socials</p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="text-white hover:opacity-80">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" aria-label="Discord" className="text-white hover:opacity-80">
            <FaDiscord className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
