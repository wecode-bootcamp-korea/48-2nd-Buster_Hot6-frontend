import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ category, hash }) => {
  const [slicedArray, setSlicedArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const IMAGE_PER_VIEW = 4;

  const handleNext = () => {
    if ((currentIndex + 1) * IMAGE_PER_VIEW < category.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(Math.floor(category.length / IMAGE_PER_VIEW) - 1);
    }
  };

  useEffect(() => {
    setSlicedArray(
      category.slice(
        currentIndex * IMAGE_PER_VIEW,
        (currentIndex + 1) * IMAGE_PER_VIEW,
      ),
    );
  }, [category, currentIndex]);

  console.log(slicedArray);

  return (
    <div className="categoriesWrapper">
      <p className="hash">#{hash}</p>
      <button className="btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="categoriesContainer">
        {slicedArray.map(item => (
          <div
            className="categoryCard"
            key={item.image}
            onClick={() => navigate(`/${item.id}`)}
          >
            <img className="images" src={item.image} alt={item.title} />
            <div className="content">
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.content}</p>
            </div>
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
