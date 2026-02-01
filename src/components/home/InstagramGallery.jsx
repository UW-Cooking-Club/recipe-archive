import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const placeholderImages = [
  "https://placehold.co/400x300/e2e8f0/475569?text=Photo+1",
  "https://placehold.co/400x300/e2e8f0/475569?text=Photo+2",
  "https://placehold.co/400x300/e2e8f0/475569?text=Photo+3",
];

function InstagramGallery() {
  return (
    <section className="bg-cream py-12 px-8">
      <h2 className="font-heading text-3xl text-primary text-center mb-8">Instagram Gallery</h2>

      <div className="max-w-4xl mx-auto relative">
        <div className="grid grid-cols-3 gap-2">
          {placeholderImages.map((src, i) => (
            <img key={i} src={src} alt={`Instagram photo ${i + 1}`} className="w-full h-48 object-cover" />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl hover:opacity-80"
          aria-label="Previous photos"
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl hover:opacity-80"
          aria-label="Next photos"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default InstagramGallery;
