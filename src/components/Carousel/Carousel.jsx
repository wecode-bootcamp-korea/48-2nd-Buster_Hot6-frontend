import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

const FIRST_SLIDE_INDEX = 0;

export default function Carousel({
  images,
  size = 'medium',
  intervalTime = 3500,
}) {
  const [currentIndex, setCurrentIndex] = useState(FIRST_SLIDE_INDEX);

  useInterval(() => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(FIRST_SLIDE_INDEX);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, intervalTime);

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
        className={getContainerStyle(size)}
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

function getContainerStyle(size) {
  const baseStyle = 'baseStyle';
  const { container } = getImageSizeStyle(size);
  const { transition } = getImageSizeStyle(size);
  const { transform } = getImageSizeStyle(size);
  return `${baseStyle} ${container} ${transition} ${transform}`;
}

function getImageSizeStyle(size, currentIndex) {
  switch (size) {
    case 'productContainer':
      return {
        container: 'propductImgWrapper',
        transition: `transform 350ms ease 0s`,
        transform: `translateX(-${currentIndex}00%)`,
        image: 'smallImg',
      };
    case 'medium':
      return {
        container: 'mediumContainer',
        transform: `translateX(-${currentIndex}00%)`,
        image: 'mediumImg',
      };
    case 'large':
      return {
        container: 'largeContainer',
        image: 'largeImg',
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
