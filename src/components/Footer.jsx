import instagramIcon from "@assets/Instagram_Icon.webp";
import discordIcon from "@assets/Discord_Icon.webp";

function Footer() {
  return (
    <footer className="bg-primary px-10 py-4 flex items-center justify-between">
      <p className="text-white text-sm font-body">© UWCC 2026</p>
      <div className="flex items-center gap-2">
        <p className="text-white text-sm font-body">Our Socials:</p>
        <br />
        <a
          href="https://www.instagram.com/uwcookingclub/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <img src={instagramIcon} alt="Instagram" className="h-10" />
        </a>
        <a
          href="https://discord.gg/Gacu9hZ6sy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="hover:opacity-80"
        >
          <img src={discordIcon} alt="Discord" className="h-14" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
