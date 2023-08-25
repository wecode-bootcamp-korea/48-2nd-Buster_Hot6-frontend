import React, { useState, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  const [count, setCount] = useState(0);
  const [bannerImages, setBannerImages] = useState([]);

  const handlePrev = () => {
    setCount(
      prevCount =>
        (prevCount - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length,
    );
  };
  const handleNext = () => {
    setCount(prevCount => (prevCount + 1) % BANNER_IMAGES.length);
  };

  useEffect(() => {
    fetch('/data/bannerData.json')
      .then(res => res.json())
      .then(result => setBannerImages(result));
  }, []);

  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);

    return () => clearTimeout(timer);
  }, [count]);

  // component early return
  // if (bannerImages.length === 0) return null;

  return (
    <div className="banner">
      <div className="imgContainer">
        {/* optional chaining */}
        <img className="images" src={bannerImages[count]?.url} alt="Banner" />
        <button className="btn prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="btn next" onClick={handleNext}>
          &gt;
        </button>
        <div className="bannerTextWrap">
          <p className="bannerTitle">{bannerImages[count]?.text}</p>
          <p className="bannerId">{bannerImages[count]?.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
