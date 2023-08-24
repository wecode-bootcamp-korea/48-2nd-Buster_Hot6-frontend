import React from 'react';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';
import './ProductsSlide.scss';

export default function ProductsSlide() {
  const images = [
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270462546092819.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270488609368980.png?w=2880`,
    `https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169270494609713014.png?w=2880`,
  ];

  return (
    <div className="container">
      <ProductsCarousel images={images} />
    </div>
  );
}
