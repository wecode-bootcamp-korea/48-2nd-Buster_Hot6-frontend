import React, { useEffect, useState } from 'react';
import './Orders.scss';
import Address from '../../components/Address/Address';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import OrderProductPayment from '../../components/OrderProductPayment/OrderProductPayment';
import PaymentContainer from '../../components/PaymentContainer/PaymentContainer';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../config';
import { useReducer } from 'react';

export default function Orders() {
  const navigate = useNavigate();
  const pay = () => {};
  const [orderItem, setOrderItem] = useState([]);
  const [ordersData, setOrdersData] = useState({
    name: '',
    email: '',
    domain: '',
    firstPhoneNumber: '',
    secondPhoneNumber: '',
    deliveryAddress: '',
    deliveryName: '',
    deliveryFirstPhoneNumber: '',
    deliverySecondPhoneNumber: '',
    zoneCode: '',
    address: '',
    detailAddress: '',
  });
  const {
    name,
    email,
    domain,
    firstPhoneNumber,
    secondPhoneNumber,
    deliveryAddress,
    deliveryName,
    deliveryFirstPhoneNumber,
    deliverySecondPhoneNumber,
    zoneCode,
    address,
    detailAddress,
  } = ordersData;
  const handleOrdersData = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setOrdersData({ ...ordersData, [name]: value });
  };

  // const [event, updateEvent] = useReducer(
  //   (prev, next) => {
  //     return { ...prev, ...next };
  //   },
  //   {
  //     userId: '',
  //     name: '',
  //     email: '',
  //     phoneNumber: '',
  //     deliveryAddress: '',
  //     deliveryName: '',
  //     deliveryPhoneNumber: '',
  //     address: '',
  //   },
  // );

  useEffect(() => {
    // fetch('/data/cartData.json', {
    // fetch(`${BASE_API_URL}order/delivery`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     authorization: localStorage.getItem('token'),
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email: `${email}@${domain}`,
    //     phoneNumber: `${firstPhoneNumber}${secondPhoneNumber}`,
    //     deliveryAddress,
    //     deliveryName,
    //     deliveryPhoneNumber: `${deliveryFirstPhoneNumber}${deliverySecondPhoneNumber}`,
    //     address: `${address}${detailAddress}`,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.message === 'INVALID_ACCESS_TOKEN') {
    //       alert('로그인이 필요합니다.');
    //       navigate('/login');
    //     }
    //     setOrderItem(data);
    //   });
  }, []);
  console.log(ordersData);

  const handlePayButton = async amount => {
    await fetch(`${BASE_API_URL}order/delivery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name,
        email: `${email}@${domain}`,
        phoneNumber: `${firstPhoneNumber}${secondPhoneNumber}`,
        deliveryAddress,
        deliveryName,
        deliveryPhoneNumber: `${deliveryFirstPhoneNumber}${deliverySecondPhoneNumber}`,
        address: `${address}${detailAddress}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'INVALID_ACCESS_TOKEN') {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
      });

    await fetch(`${BASE_API_URL}order/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        amount,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'INVALID_ACCESS_TOKEN') {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    fetch(`${BASE_API_URL}cart/getCartList`, {
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
  }, []);

  return (
    <div className="ordersContainer">
      <div className="mainContainer">
        <Address
          handleOrdersData={handleOrdersData}
          setOrdersData={setOrdersData}
        />
        <OrderProduct orderItem={orderItem} />
        <OrderProductPayment />
      </div>
      <div className="productContainer">
        <PaymentContainer handleClick={handlePayButton} orderItem={orderItem} />
      </div>
    </div>
  );
}
