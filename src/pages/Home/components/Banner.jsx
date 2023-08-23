import React, { useState } from 'react';
import './Banner.scss';

export default function Banner({ images = [] }) {
  const [image, setImage] = useState(0);

  return (
    <div className="banner">
      <img src={images[image]} alt="Banner" />
      <button
        className="nextBtn"
        onClick={() => {
          setImage(prevImage => (prevImage + 1) % images.length);
        }}
      >
        next
      </button>
      <button
        className="prevBtn"
        onClick={() => {
          setImage(
            prevImage => (prevImage + images.length - 1) % images.length,
          );
        }}
      >
        prev
      </button>
    </div>
  );
}
