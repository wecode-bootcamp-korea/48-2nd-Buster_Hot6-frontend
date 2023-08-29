import React, { useEffect, useState } from 'react';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import './ProductsSlide.scss';
import CartegoryCard from '../CartegoryCard/CartegoryCard';
import Carousel from '../Carousel/Carousel';

export default function ProductsSlide() {
  console.log('=======================');

  useEffect(() => {
    fetch('http://10.58.52.235:3000/products/bro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        console.log(res);
        if (res.ok === true) {
          return res;
        }
        throw new Error('통신 실패 😭');
      })
      .then(res => res.json())

      // .catch(error => console.log(error))
      .then(data => {
        console.log('???', data);
        if (typeof data !== 'undefined') {
          // alert('성공');

          console.log(data);
          setCartegory(data.products[0].cartegory_name);
        } else if (typeof data === 'undefined') {
          alert('안 됨');
        }
      });
  }, []);
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  const [cartegory, setCartegory] = [];

  console.log(cartegory);
  console.log(cartegory);

  return (
    <div className="container">
      <div className="carouselContainer">
        <Carousel images={images} size="productContainer" />
      </div>
      <section className="cartegoryContaienr">
        <h1 className="cartegoryTitle">카테고리</h1>
        <div className="cartegoryListWrap">
          {/* {cartegory.map(item => (
            <CartegoryCard item={item} key="i" />
          ))} */}
        </div>
      </section>
    </div>
  );
}
