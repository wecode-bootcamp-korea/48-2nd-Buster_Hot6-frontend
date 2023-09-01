import React, { useEffect, useState } from 'react';
import './OrderProduct.scss';
import OrderProductCard from '../OrderProductCard/OrderProductCard';
import { BASE_API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

export default function OrderProduct({ orderItem }) {
  return (
    <section className="addressContentContainer">
      <section className="addressContentInfoTitleWrap">
        <div className="addressContentInfoTitle">주문상품</div>
      </section>
      <div className="addressInfoWrap">
        <div className="orderProductContentContainer">
          <section className="orderProductContentWrap">
            {orderItem.map(item => {
              return <OrderProductCard orderItem={item} key={orderItem.id} />;
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
