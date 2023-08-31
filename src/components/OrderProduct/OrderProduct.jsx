import React from 'react';
import './OrderProduct.scss';
import OrderProductCard from '../OrderProductCard/OrderProductCard';

export default function OrderProduct({ orderItem }) {
  return (
    <section className="addressContentContainer">
      <section className="addressContentInfoTitleWrap">
        <div className="addressContentInfoTitle">주문상품</div>
      </section>
      <div className="addressInfoWrap">
        <div className="orderProductContentContainer">
          <section className="orderProductContentWrap">
            {orderItem.map(() => {
              return (
                <OrderProductCard orderItem={orderItem} key={orderItem.id} />
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
