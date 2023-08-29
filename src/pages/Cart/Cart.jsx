import React from 'react';
import './Cart.scss';

const Cart = () => {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   fetch('/data/cart.json')
  //     .then(response => response.json())
  //     .then(data => setCartItems(data))
  //     .catch(error => console.error('Fetching data error:', error));
  // }, []);

  // const handleCheckout = () => {
  //   alert('결제가 진행됩니다.');
  // };

  return (
    <div className="cart">
      <h1>브랜드</h1>
      <div className="cardList">
        <div className="today">오늘 출발</div>
        <div className="product">
          <img className="img" src="#" alt="상품 이미지" />{' '}
          {/* 이미지 src를 지정하십시오 */}
          <span className="productName">[코튼리빙]40수 호텔수건</span>
        </div>

        <div className="modal">
          <span>40tn 200g 화이트</span>
          <span className="price">29,000</span>
        </div>
        <span className="price">29,000</span>
      </div>
      <div className="payModal">
        <div className="modal">
          <div>총 상품 금액</div>
          <div>얼마</div>
        </div>
        <div className="modal">
          <div>총 배송비</div>
          <div>얼마</div>
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
      <button>결제하기</button>
    </div>
  );
};

export default Cart;
