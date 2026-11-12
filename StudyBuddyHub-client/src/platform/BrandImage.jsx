import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import assets from "./media-assets.json";
export default function BrandImage({ src, alt, ...props }) {
  const [failed, setFailed] = useState(false);
  const image = useRef();
  useEffect(() => {
    // A server-rendered image may fail before hydration attaches onError.
    if (image.current?.complete && !image.current.naturalWidth) setFailed(true);
  }, [src]);
  return (
    <img
      {...props}
      ref={image}
      src={(!failed && assets[src]?.url) || src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
BrandImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
