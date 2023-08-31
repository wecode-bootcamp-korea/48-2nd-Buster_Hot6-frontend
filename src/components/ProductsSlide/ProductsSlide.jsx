import React, { useEffect, useState } from 'react';
import './ProductsSlide.scss';
import Carousel from '../Carousel/Carousel';

export default function ProductsSlide() {
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.193:3000/products/products/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('통신 실패 😭');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data) {
          alert('성공');
          console.log('데이터 있음', data);
          setProducts(data.products);
        } else {
          alert('안 됨');
        }
      });
  }, []);

  const categories = [
    ...new Set(products.map(product => product.category_name)),
  ];

  return (
    <div className="container">
      <div className="carouselContainer">
        <Carousel images={images} size="productContainer" />
      </div>
      <section className="cartegoryContaienr">
        <h1 className="cartegoryTitle">카테고리</h1>
        <div className="cartegoryListWrap">
          {categories.map((item, i) => {
            return (
              <div className="cartegoryItemWrap" key={i}>
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
