import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import './Carousel.scss';

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
          transition: `${getImageSizeStyle(size).transition}`,
          transform: `${getImageSizeStyle(size).transform}`,
        }}
      >
        {images.map((images, i) => {
          return (
            <img className="carouselImg" key={i} src={images} alt="dkdk" />
          );
        })}
      </div>
      <div className={getImageSizeStyle(size).btns}>
        <button className={getImageSizeStyle(size).btn} onClick={prevSlide}>
          &lt;
        </button>
        <button className={getImageSizeStyle(size).btn} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </>
  );
}

function getContainerStyle(size) {
  const { container } = getImageSizeStyle(size);
  return `${container}`;
}

function getImageSizeStyle(size, currentIndex) {
  switch (size) {
    case 'productContainer':
      return {
        container: 'propductImgWrapper',
        transition: 'transform 350ms ease 0s',
        transform: `translateX(-${currentIndex}00%)`,
        btns: 'carouselBtnWrapper',
        btn: 'carouselBtn',
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
