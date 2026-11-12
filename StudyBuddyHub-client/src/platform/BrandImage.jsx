import { useState } from "react";
import PropTypes from "prop-types";
import assets from "./media-assets.json";
export default function BrandImage({ src, alt, ...props }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      {...props}
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
