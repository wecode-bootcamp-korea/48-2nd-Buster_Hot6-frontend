import React, { useEffect, useState } from 'react';
import './Orders.scss';
import Address from '../../components/Address/Address';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import OrderProductPayment from '../../components/OrderProductPayment/OrderProductPayment';
import PaymentContainer from '../../components/PaymentContainer/PaymentContainer';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const navigate = useNavigate();
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    fetch('/data/cartData.json', {
      // fetch('http://10.58.52.83:3000/cart/getCartList', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'INVALID_ACCESS_TOKEN') {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }

        setOrderItem(data);
      });
  });

  return (
    <div className="ordersContainer">
      <div className="mainContainer">
        <Address />
        <OrderProduct orderItem={orderItem} />
        <OrderProductPayment />
      </div>
      <div className="productContainer">
        <PaymentContainer orderItem={orderItem} />
      </div>
    </div>
  );
}
