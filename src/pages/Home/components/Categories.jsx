import React, { useState } from 'react';
import './Categories.scss';

const Categories = () => {
  const IMAGES_PER_VIEW = 4;
  const [pictures, setPictures] = useState(0);

  const handleNext = () => {
    if (pictures + IMAGES_PER_VIEW < MOCK_DATA.length) {
      setPictures(pictures + IMAGES_PER_VIEW);
    } else {
      setPictures(0);
    }
  };

  const handlePrev = () => {
    if (pictures - IMAGES_PER_VIEW >= 0) {
      setPictures(pictures - IMAGES_PER_VIEW);
    } else {
      const remainder = MOCK_DATA.length % IMAGES_PER_VIEW;
      setPictures(
        remainder === 0
          ? MOCK_DATA.length - IMAGES_PER_VIEW
          : MOCK_DATA.length - remainder,
      );
    }
  };

  let displayedImages = MOCK_DATA.slice(pictures, pictures + IMAGES_PER_VIEW);

  return (
    <div className="categoriesWrapper">
      <p className="hash">#{displayedImages[0]?.hash}</p>
      <button className="btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="categoriesContainer">
        {displayedImages.map(item => (
          <div className="categoryCard" key={item.image}>
            <img className="images" src={item.image} alt={item.title} />
            <h2 className="title">{item.title}</h2>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
      <button className="btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Categories;
const MOCK_DATA = [
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2013/09/21/14/30/sofa-184551_1280.jpg',
    title: '편안한게 최고',
    text: '쇼파 짱',
    user: '짱구',
  },

  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
    title: '최고~~',
    text: '짱~',
    user: '마우스~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225_1280.jpg',
    title: '공부 방~~',
    text: '이케아꺼래~',
    user: '키보드~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2018/07/27/00/32/interior-design-3564955_1280.jpg',
    title: '사무실~',
    text: 'ㅇㅇㄴㅁㄹㅇㅁㄹ',
    user: '맥북~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225_1280.jpg',
    title: '공부 방~~',
    text: '이케아꺼래~',
    user: '키보드~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225_1280.jpg',
    title: '공부 방~~',
    text: '이케아꺼래~',
    user: '키보드~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225_1280.jpg',
    title: '공부 방~~',
    text: '이케아꺼래~',
    user: '키보드~',
  },
  {
    hash: '똑똑하게 잘꾸민 거실',
    image:
      'https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225_1280.jpg',
    title: '공부 방~~',
    text: '이케아꺼래~',
    user: '키보드~',
  },
];
