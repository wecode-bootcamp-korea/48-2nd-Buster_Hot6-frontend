import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/data/cart.json')
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, []);

  return (
    <div className="cart">
      <h1>브랜드</h1>
      <div className="cardList">
        <div className="today">오늘 출발</div>
        <div className="product">
          <img className="img" src={cartItems.imgae} alt="상품 이미지" />

          <span className="productName">{cartItems.prouctName}</span>
        </div>

        <div className="modal">
          <span>{cartItems.productDetail}</span>
          <span className="price">29,000</span>
        </div>
        <span className="price">29,000</span>
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
