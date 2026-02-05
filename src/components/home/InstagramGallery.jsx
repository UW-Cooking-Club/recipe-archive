import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ig1 from "@assets/instagram/IG1.jpg";
import ig2 from "@assets/instagram/IG2.jpg";
import ig3 from "@assets/instagram/IG3.jpg";
import ig4 from "@assets/instagram/IG4.jpg";
import ig5 from "@assets/instagram/IG5.jpg";
import ig6 from "@assets/instagram/IG6.jpg";

const posts = [
  { image: ig1, url: "https://www.instagram.com/p/DUWjU8ECVID" },
  { image: ig2, url: "https://www.instagram.com/p/DUAQep4jVzt" },
  { image: ig3, url: "https://www.instagram.com/p/DTynFUkDCsn" },
  { image: ig4, url: "https://www.instagram.com/p/DTmHzqCjG0k" },
  { image: ig5, url: "https://www.instagram.com/p/DTmHAmMDNKo" },
  { image: ig6, url: "https://www.instagram.com/p/DTgwejTjDti" },
];

const PAGE_SIZE = 3;

function InstagramGallery() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const visible = posts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="bg-cream py-12 px-8">
      <h2 className="font-heading text-3xl text-primary text-center mb-8">Instagram Gallery</h2>

      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {page > 0 ? (
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

        <div className="grid grid-cols-3 gap-3 flex-1">
          {visible.map((post, i) => (
            <a
              key={page * PAGE_SIZE + i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded group"
            >
              <img
                src={post.image}
                alt={`Instagram post ${page * PAGE_SIZE + i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {page < totalPages - 1 ? (
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
