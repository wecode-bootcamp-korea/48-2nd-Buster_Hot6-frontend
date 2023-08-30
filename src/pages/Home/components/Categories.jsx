import React, { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = ({ category }) => {
  const [slicedArray, setSlicedArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const IMAGE_PER_VIEW = 4;

  const handleNext = () => {
    if ((currentIndex + 1) * IMAGE_PER_VIEW < category.cards.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(Math.floor(category.cards.length / IMAGE_PER_VIEW) - 1);
    }
  };

  useEffect(() => {
    setSlicedArray(
      category.cards.slice(
        currentIndex * IMAGE_PER_VIEW,
        (currentIndex + 1) * IMAGE_PER_VIEW,
      ),
    );
  }, [category, currentIndex]);

  return (
    <div className="categoriesWrapper">
      <p className="hash">#{category.hash}</p>
      <button className="btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="categoriesContainer">
        {slicedArray.map(item => (
          <div className="categoryCard" key={item.image}>
            <img className="images" src={item.image} alt={item.title} />
            <h2 className="title">{item.title}</h2>
            <p className="text">{item.user}</p>
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
