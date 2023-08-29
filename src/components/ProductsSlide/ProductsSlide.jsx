import React, { useState } from 'react';
import './ProductsSlide.scss';
import Carousel from '../Carousel/Carousel';

export default function ProductsSlide() {
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  const [cartegory, setCartegory] = useState([]);

  return (
    <div className="container">
      <div className="carouselContainer">
        <Carousel images={images} size="productContainer" />
      </div>
      <section className="cartegoryContaienr">
        <h1 className="cartegoryTitle">카테고리</h1>
        <div className="cartegoryListWrap">
          {cartegory.map((item, i) => {
            return (
              <div className="cartegoryItemWrap" key={i}>
                <img className="cartegoryItemImg" src={item.img} alt="?" />
                <div className="cartegoryItemTitle">{item.item}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
