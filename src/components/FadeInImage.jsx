import { useState } from "react";

/**
 * Image with neutral placeholder and fade-in on load (reduces “pop-in” feel on slow networks).
 */
function FadeInImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  fetchPriority,
  loading = "lazy",
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
        onLoad={() => setLoaded(true)}
        {...imgProps}
      />
    </div>
  );
}

export default FadeInImage;
