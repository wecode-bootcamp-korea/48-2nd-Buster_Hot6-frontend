import React, { useState, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  const images = [
    {
      id: '라이언',
      url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
      text: '10평대 전세집 최소수정',
    },
    {
      id: '토마토',
      url: 'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg',
      text: '20평대 전세집',
    },
    {
      id: '춘식이',
      url: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
      text: '30평대 전세집',
    },
    {
      id: '햄스터',
      url: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685522_1280.jpg',
      text: '40평대 전세집',
    },
    {
      id: '애플',
      url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg',
      text: '50평대 전세집',
    },
    {
      id: '디지몬',
      url: 'https://cdn.pixabay.com/photo/2018/07/15/13/04/living-room-3539587_1280.jpg',
      text: '무료배솔',
    },
  ];

  const [count, setCount] = useState(0);
  const handlePrev = () => {
    setCount(prevCount => (prevCount - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setCount(prevCount => (prevCount + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="banner">
      <div className="imgContainer">
        <img className="images" src={images[count].url} alt="Banner" />
        <div className="bannerTextWrap">
          <p className="bannerTitle">{images[count].text}</p>
          <p className="bannerId">{images[count].id}</p>
        </div>
      </div>
      <button className="btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
