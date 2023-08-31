import React from 'react';
import './ProductsSlide.scss';
import Carousel from '../Carousel/Carousel';

export default function ProductsSlide({ categories, selected, onClick }) {
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  return (
    <div className="container">
      <div className="carouselContainer">
        <Carousel images={images} size="productContainer" />
      </div>
      <section className="cartegoryContaienr">
        <h1 className="cartegoryTitle">카테고리</h1>
        <div className="cartegoryListWrap">
          {categories.map(item => {
            return (
              <div
                className="cartegoryItemWrap"
                key={item}
                onClick={() => onClick(item)}
              >
                {/* <img className="cartegoryItemImg" src={item.img} alt="?" /> */}
                <div className="cartegoryItemTitle">{item}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
