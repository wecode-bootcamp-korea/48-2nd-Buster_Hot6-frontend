import React from 'react';
import './OrderProductCard.scss';

export default function OrderProductCard({ orderItem }) {
  console.log('???????', orderItem);

  return (
    <div className="orderProductCardContainer">
      <div className="orderProductCardHeaderWrap">
        <div className="orderProductCardHeaderBrand">
          <div className="orderProductCardHeaderBrandName">
            {orderItem.brand_name}
          </div>
        </div>
      </div>
      <div>
        <div className="orderProductCardContentWrap">
          <div className="orderProductCardImgWrap">
            <img
              className="orderProductCardImg"
              src={orderItem.image}
              alt="?"
            />
          </div>
          <div className="orderProductCardContent">
            <div className="orderProductCardContentName">
              {orderItem.product_name}
            </div>
            <div className="orderProductCardContentDescription">
              {orderItem.product_name} 입니다.
            </div>
            <div className="orderProductCardContentPriceWrap">
              <span className="orderProductCardContentPrice">
                {orderItem.price}
              </span>
              <span className="orderProductCardContentPrice">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
