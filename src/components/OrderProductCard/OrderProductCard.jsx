import React from 'react';
import './OrderProductCard.scss';

export default function OrderProductCard({
  orderItem: { brand_name, image, product_name, price },
}) {
  return (
    <div className="orderProductCardContainer">
      <div className="orderProductCardHeaderWrap">
        <div className="orderProductCardHeaderBrand">
          <div className="orderProductCardHeaderBrandName">{brand_name}</div>
        </div>
      </div>
      <div>
        <div className="orderProductCardContentWrap">
          <div className="orderProductCardImgWrap">
            <img className="orderProductCardImg" src={image} alt="?" />
          </div>
          <div className="orderProductCardContent">
            <div className="orderProductCardContentName">{product_name}</div>
            <div className="orderProductCardContentDescription">
              {product_name} 입니다.
            </div>
            <div className="orderProductCardContentPriceWrap">
              <span className="orderProductCardContentPrice">{price}</span>
              <span className="orderProductCardContentPrice">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
