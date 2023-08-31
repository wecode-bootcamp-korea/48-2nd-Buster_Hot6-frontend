import React from 'react';
import './OrderProductCard.scss';

export default function OrderProductCard() {
  return (
    <div className="orderProductCardContainer">
      <div className="orderProductCardHeaderWrap">
        <div className="orderProductCardHeaderBrand">
          <div className="orderProductCardHeaderBrandName">브랜드</div>
        </div>
      </div>
      <div>
        <div className="orderProductCardContentWrap">
          <div className="orderProductCardImgWrap">
            <img
              className="orderProductCardImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168169853901085959.png?w=144&h=144&c=c"
              alt="?"
            />
          </div>
          <div className="orderProductCardContent">
            <div className="orderProductCardContentName">
              그린티 플러스 하이브리드 스프링 매트리스 (15cm)
            </div>
            <div className="orderProductCardContentDescription">
              그린티 플러스 하이브리드 스프링 매트리스 (15cm) 입니다~
            </div>
            <div className="orderProductCardContentPriceWrap">
              <span className="orderProductCardContentPrice">138,600</span>
              <span className="orderProductCardContentPrice">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
