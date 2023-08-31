import React from 'react';
import './OrderProductPayment.scss';

export default function OrderProductPayment() {
  return (
    <section className="addressContentContainer">
      <section className="addressContentInfoTitleWrap">
        <div className="addressContentInfoTitle">결제 수단</div>
      </section>
      <div className="orderProductPaymentContainer">
        <section className="orderProductPaymentWrap">
          <div className="orderProductPaymentPoint">
            <input className="orderProductPaymentPointInput" />
            <button className="paymentAllBtn">전액사용</button>
          </div>
          <div className="paymentPointWrap">
            사용 가능 포인트
            <span className="paymentPoint">1,000</span>
            <span className="paymentPoint">P</span>
          </div>
        </section>
      </div>
    </section>
  );
}
