import React from 'react';
import './Orders.scss';
import Address from '../../components/Address/Address';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import OrderProductPayment from '../../components/OrderProductPayment/OrderProductPayment';
import PaymentContainer from '../../components/PaymentContainer/PaymentContainer';

export default function Orders() {
  return (
    <div className="ordersContainer">
      <div className="mainContainer">
        <Address />
        <OrderProduct />
        <OrderProductPayment />
      </div>
      <div className="productContainer">
        <PaymentContainer />
      </div>
    </div>
  );
}
