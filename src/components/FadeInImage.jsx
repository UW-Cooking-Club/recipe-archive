import { useState } from "react";

/**
 * Image with neutral placeholder and fade-in on load (reduces “pop-in” feel on slow networks).
 * On load error, still fades in so the broken image / alt is visible instead of a permanent gray box.
 * Remounts when `src` changes (via `key`) so carousels / route reuse get a proper fade-in per image.
 */
function FadeInImageInner({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  fetchPriority,
  loading = "lazy",
  onLoad: consumerOnLoad,
  onError: consumerOnError,
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-[opacity,transform] duration-300 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        fetchPriority={fetchPriority}
        decoding="async"
        loading={loading}
        onLoad={(e) => {
          setLoaded(true);
          consumerOnLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          consumerOnError?.(e);
        }}
        {...imgProps}
      />
    </div>
  );
}

function FadeInImage(props) {
  return <FadeInImageInner key={props.src} {...props} />;
}

export default FadeInImage;
