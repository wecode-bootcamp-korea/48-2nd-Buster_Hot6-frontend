import React from 'react';
import './ProductList.scss';

export default function ProductListCard() {
  const items = [
    {
      brand: 'LG',
      itemName: '가구',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=180&h=180&c=c&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
    {
      brand: 'LG',
      itemName: '세탁기',
      img: `https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=720&h=720&c=c&q=0.8&webp=1`,
    },
  ];

  return (
    <div>
      {items.map((item, i) => {
        return (
          <ul className="productCard">
            <div className="productItemContent">
              <div className="productItemImgContainer">
                <img className="productItemImg" src={item.img} alt={i} />
              </div>
              <div className="productItemHeader">
                <span className="productItemHeaderBrand">{item.brand}</span>
                <span className="productItemHeaderName">{item.itemName}</span>
              </div>
              <div className="productItemPrice" />
              <div className="productItemReview" />
            </div>
          </ul>
        );
      })}
    </div>
  );
}
