import React from 'react';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import './ProductsSlide.scss';
import CartegoryCard from '../CartegoryCard/CartegoryCard';

export default function ProductsSlide() {
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  const cartegory = [
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      item: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
  ];

  return (
    <div className="container">
      <div className="carouselContainer">
        <ProductsCarousel images={images} />
      </div>
      <section className="cartegoryContaienr">
        <h1 className="cartegoryTitle">카테고리</h1>
        <div className="cartegoryListWrap">
          {cartegory.map(item => (
            <CartegoryCard item={item} key="i" />
          ))}
        </div>
      </section>
    </div>
  );
}
