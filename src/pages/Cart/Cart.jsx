import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
    fetch('/data/cartData.json', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setCartItems(data));
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      <h1>브랜드</h1>
      <div className="cardList">
        {cartItems.map(item => {
          return (
            <>
              <div className="today">오늘 출발</div>
              <div className="product">
                <img className="img" src={item.image} alt="상품 이미지" />

                <span className="productName">{item.productName}</span>
              </div>

              <div className="modal">
                <span>{item.productDetail}</span>
                <span className="price">{item.price}</span>
              </div>
              <span className="price">{item.price}</span>
            </>
          );
        })}
      </div>
      <div className="payModal">
        <div className="modal">
          <div>총 상품 금액</div>
          <div>29,000</div>
        </div>
        <div className="modal">
          <div>총 배송비</div>
          <div>무료</div>
        </div>
        <div className="modal">
          <div>총 할인금액</div>
          <div>얼마</div>
        </div>
        <div className="modal">
          <div>결제금액</div>
          <div>얼마</div>
        </div>
      </div>
      <button className="paymentButton">결제하기</button>
    </div>
  );
};

export default Cart;
