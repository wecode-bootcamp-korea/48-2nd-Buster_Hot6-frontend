import React, { useState } from 'react';
import './ProductsCarousel.scss';
import useInterval from '../../hooks/useInterval';

const FIRST_SLIDE_INDEX = 0;

export default function ProductsCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(FIRST_SLIDE_INDEX);

  useInterval(() => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(FIRST_SLIDE_INDEX);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, 3500);

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(FIRST_SLIDE_INDEX);
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div
        className="imgWrapper"
        style={{
          transition: `transform 350ms ease 0s`,
          transform: `translateX(-${currentIndex}00%)`,
        }}
      >
        {images.map((images, i) => {
          return (
            <img className="carouselImg" key={i} src={images} alt="dkdk" />
          );
        })}
      </div>
      <div className="carouselBtnWrapper">
        <button className="carouselBtn" onClick={prevSlide}>
          &lt;
        </button>
        <button className="carouselBtn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </>
  );
}
