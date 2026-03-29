import instagramIcon from "@assets/Instagram_Icon.webp";
import discordIcon from "@assets/Discord_Icon.webp";
import bowlSticker from "@assets/bowl_sticker.png";

function Footer() {
  return (
    <footer className="relative bg-primary px-6 py-4 flex items-center justify-between md:px-10 md:py-4">
      <img src={bowlSticker} alt="" className="hidden md:block absolute bottom-0 left-2/3 -translate-x-1/2 h-[12rem] z-10" />
      <p className="text-white text-sm font-body">© UWCC 2026</p>
      <div className="flex items-center gap-2">
        <p className="text-white text-sm font-body hidden sm:block">Our Socials:</p>
        <a
          href="https://www.instagram.com/uwcookingclub/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <img src={instagramIcon} alt="Instagram" className="h-8 md:h-10" />
        </a>
        <a
          href="https://discord.gg/Gacu9hZ6sy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="hover:opacity-80"
        >
          <img src={discordIcon} alt="Discord" className="h-10 md:h-14" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
