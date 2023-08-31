import React from 'react';
import './PaymentContainer.scss';

export default function PaymentContainer() {
  return (
    <div className="paymentBoxContainer">
      <div className="paymentBoxWrap">
        <div className="paymentBoxPadding">
          <div className="paymentBox">
            <div className="paymentContentBox">
              <h2 className="paymentContentTitle">결제금액</h2>
              <div className="paymentContentTextWrap">
                <div className="paymentContentText">총 상품 금액</div>
                <div className="paymentContentPrice">439,000 원</div>
              </div>
              <div className="paymentContentTextWrap">
                <div className="paymentContentText">배송비</div>
                <div className="paymentContentPrice">0 원</div>
              </div>
              <div className="paymentContentTextWrap">
                <div className="paymentContentText">포인트 사용</div>
                <div className="paymentContentPrice">0 원</div>
              </div>
              <div className="finalPriceWrap">
                <div className="finalPriceText">최종 결제 금액</div>
                <div className="finalPricesWrap">
                  <strong>
                    <span className="finalPrice">439,300</span>&nbsp;원
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <button className="paymentBtn">439,300 원 결제하기</button>
        </div>
      </div>
    </div>
  );
}
