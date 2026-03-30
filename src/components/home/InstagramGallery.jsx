import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sandPSticker from "@assets/SandP_sticker.svg";
import ig1 from "@assets/instagram/IG1.webp";
import ig2 from "@assets/instagram/IG2.webp";
import ig3 from "@assets/instagram/IG3.webp";
import ig4 from "@assets/instagram/IG4.webp";
import ig5 from "@assets/instagram/IG5.webp";
import ig6 from "@assets/instagram/IG6.webp";

const posts = [
  { image: ig1, url: "https://www.instagram.com/p/DUWjU8ECVID" },
  { image: ig2, url: "https://www.instagram.com/p/DUAQep4jVzt" },
  { image: ig3, url: "https://www.instagram.com/p/DTynFUkDCsn" },
  { image: ig4, url: "https://www.instagram.com/p/DTmHzqCjG0k" },
  { image: ig5, url: "https://www.instagram.com/p/DTmHAmMDNKo" },
  { image: ig6, url: "https://www.instagram.com/p/DTgwejTjDti" },
];

function usePageSize() {
  const getSize = () => (window.innerWidth >= 768 ? 3 : 1);
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    const onResize = () => setSize(getSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

function InstagramGallery() {
  const pageSize = usePageSize();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / pageSize);
  const clampedPage = Math.min(page, totalPages - 1);
  const visible = posts.slice(clampedPage * pageSize, clampedPage * pageSize + pageSize);

  const goPrev = () => setPage(Math.max(0, clampedPage - 1));
  const goNext = () => setPage(Math.min(totalPages - 1, clampedPage + 1));

  return (
    <section className="relative bg-cream pt-24 pb-8 px-8">
      <img src={sandPSticker} alt="" className="absolute -top-28 -left-12 w-72 z-10" />
      <h2 className="font-heading text-5xl text-primary text-center mb-8">Instagram Gallery</h2>

      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {clampedPage > 0 ? (
          <button
            onClick={goPrev}
            className="text-gray-dark text-2xl hover:text-primary transition-colors shrink-0"
            aria-label="Previous photos"
          >
            <FaChevronLeft />
          </button>
        ) : (
          <div className="w-6 shrink-0" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
          {visible.map((post, i) => (
            <a
              key={clampedPage * pageSize + i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded group"
            >
              <img
                src={post.image}
                alt={`Instagram post ${clampedPage * pageSize + i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {clampedPage < totalPages - 1 ? (
          <button
            onClick={goNext}
            className="text-gray-dark text-2xl hover:text-primary transition-colors shrink-0"
            aria-label="Next photos"
          >
            <FaChevronRight />
          </button>
        ) : (
          <div className="w-6 shrink-0" />
        )}
      </div>

    </section>
  );
}

export default InstagramGallery;
