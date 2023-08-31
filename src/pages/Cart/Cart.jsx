import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
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

        setCartItems(data);
      });
  };
  const goToOrder = () => {
    navigate('/orders');
  };

  useEffect(() => {
    getCart();
  }, []);

  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice = totalPrice + Number(item.price);
  });

  const discountPrice = 0;

  return (
    <div className="cart">
      <div className="cardList">
        {cartItems.map(item => {
          return (
            <React.Fragment key={item.product_id}>
              <div className="today">오늘 출발</div>
              <div className="product">
                <img className="img" src={item.image} alt="상품 이미지" />

                <span className="productName">{item.product_name}</span>
              </div>

              <div className="modal">
                <span>{item.brand_name}</span>
                <span className="price">{item.price.toLocaleString()}원</span>
              </div>
              <span className="price">{item.price.toLocaleString()}원</span>
            </React.Fragment>
          );
        })}
      </div>
      <div className="payModal">
        <div className="modal">
          <div>총 상품 금액</div>
          <div>{totalPrice.toLocaleString()}원</div>
        </div>
        <div className="modal">
          <div>총 배송비</div>
          <div>무료</div>
        </div>
        <div className="modal">
          <div>총 할인금액</div>
          <div>{discountPrice.toLocaleString()}원</div>
        </div>
        <div className="modal">
          <div>결제금액</div>
          <div>{(totalPrice - discountPrice).toLocaleString()}원</div>
        </div>
      </div>
      <button onClick={goToOrder} className="paymentButton">
        결제하기
      </button>
    </div>
  );
};

export default Cart;
