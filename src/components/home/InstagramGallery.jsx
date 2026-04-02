import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lightbox, { useLightbox } from "@components/Lightbox";
import sandPSticker from "@assets/SandP_sticker.svg";
import ig1 from "@assets/instagram/IG1.webp";
import ig2 from "@assets/instagram/IG2.webp";
import ig3 from "@assets/instagram/IG3.webp";
import ig4 from "@assets/instagram/IG4.webp";
import ig5 from "@assets/instagram/IG5.webp";
import ig6 from "@assets/instagram/IG6.webp";

const INSTAGRAM_PROFILE = "https://www.instagram.com/uwcookingclub/";

const galleryImages = [ig1, ig2, ig3, ig4, ig5, ig6];

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
  const totalPages = Math.ceil(galleryImages.length / pageSize);
  const clampedPage = Math.min(page, totalPages - 1);
  const visible = galleryImages.slice(clampedPage * pageSize, clampedPage * pageSize + pageSize);

  const { lightboxIndex, setLightboxIndex, close, goNext, goPrev } = useLightbox(galleryImages);

  const goPrevPage = () => setPage(Math.max(0, clampedPage - 1));
  const goNextPage = () => setPage(Math.min(totalPages - 1, clampedPage + 1));

  return (
    <section className="relative bg-cream pt-24 pb-8 px-8">
      <img src={sandPSticker} alt="" className="absolute -top-28 -left-12 w-72 z-10" />
      <h2 className="font-heading text-5xl text-primary text-center mb-8">
        <a
          href={INSTAGRAM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity underline-offset-4 hover:underline"
        >
          Instagram Gallery
        </a>
      </h2>

      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {clampedPage > 0 ? (
          <button
            type="button"
            onClick={goPrevPage}
            className="text-gray-dark text-2xl hover:text-primary transition-colors shrink-0"
            aria-label="Previous photos"
          >
            <FaChevronLeft />
          </button>
        ) : (
          <div className="w-6 shrink-0" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
          {visible.map((src, i) => {
            const globalIndex = clampedPage * pageSize + i;
            return (
              <button
                key={globalIndex}
                type="button"
                className="block w-full overflow-hidden rounded cursor-zoom-in group p-0 border-0 bg-transparent text-left"
                onClick={() => setLightboxIndex(globalIndex)}
                aria-label={`View Instagram photo ${globalIndex + 1} larger`}
              >
                <img
                  src={src}
                  alt={`Instagram photo ${globalIndex + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform pointer-events-none"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>

        {clampedPage < totalPages - 1 ? (
          <button
            type="button"
            onClick={goNextPage}
            className="text-gray-dark text-2xl hover:text-primary transition-colors shrink-0"
            aria-label="Next photos"
          >
            <FaChevronRight />
          </button>
        ) : (
          <div className="w-6 shrink-0" />
        )}
      </div>

      <Lightbox
        photos={galleryImages}
        index={lightboxIndex}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        alt="Instagram"
      />
    </section>
  );
}

export default InstagramGallery;
