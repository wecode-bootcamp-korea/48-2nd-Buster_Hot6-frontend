import React from 'react';
import './OrderProduct.scss';
import OrderProductCard from '../OrderProductCard/OrderProductCard';

export default function OrderProduct() {
  return (
    <section className="addressContentContainer">
      <section className="addressContentInfoTitleWrap">
        <div className="addressContentInfoTitle">주문자</div>
      </section>
      <div className="addressInfoWrap">
        <div className="orderProductContentContainer">
          <section className="orderProductContentWrap">
            <OrderProductCard />
            <OrderProductCard />
          </section>
        </div>
      </div>
    </section>
  );
}
