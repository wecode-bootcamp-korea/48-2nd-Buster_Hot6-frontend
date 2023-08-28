import React, { useState } from 'react';
import './ProductItemDetail.scss';
import ProductItemTap from '../ProductItemTap/ProductItemTap';
import ProductItemDetailInfo from '../ProductItemDetailInfo/ProductItemDetailInfo';
import Reviews from '../Reviews/Reviews';

export default function ProductItemDetail() {
  const [selected, setSelected] = useState('상품 옵션1111');
  const handleSelect = e => setSelected(e.target.value);

  return (
    <div className="productSelling">
      <div className="productOverviewContainer">
        <nav className="commerceCartegry">
          <ol className="commerceCategryDetail">
            <li className="commerceCategryDetailTitle">아아</li>
          </ol>
        </nav>
        <div className="productOverview">
          <div className="productOvewviewImg">
            <div className="sellingProductImgContainer">
              <div className="sellingProductImg" />
            </div>
          </div>
          <div className="productOvewviewInfo">
            <div className="sellingProductHeader">
              <h1 className="sellingProductHeaderTitle">
                <p className="sellingProductHeaderTitleBrand">코튼리빙</p>
                <div className="sellingProductHeaderTitleNameWrap">
                  <span className="sellingProductHeaderTitleName">
                    [8/28하루만29,900원] 40수 코마사 호텔수건 200g 10장
                    압도적리뷰!
                  </span>
                  <button className="sellingProductHeaderBookmar" />
                </div>
              </h1>
            </div>
            <div className="sellingProductHeaderContent">
              <p className="sellingProductHeaderReviewWrap">
                <div className="sellingProductHeaderReview">
                  <span>아이콘 들어갈 자리</span>
                  <span className="sellingProductHeaderReviewText">
                    <span className="number">3532</span>
                    <span className="postFix">개 리뷰</span>
                  </span>
                </div>
              </p>
            </div>
            <div className="sellingProductHeaderPrice">
              <span className="sellingProductHeaderPriceWrap">
                <span className="sellingProductHeaderPriceDiscount">63%</span>
                <span className="sellingProductHeaderPriceOriginal">
                  <span className="price">399340</span>
                  <span className="won">원</span>
                </span>
              </span>
              <div className="sellingProductHeaderPricePrice">
                <span className="finalPrice">4923094320</span>
                <span className="finalWon">원</span>
              </div>
            </div>
            <div className="sellingProductOptionForm">
              <section className="sellingProductOption">
                <select
                  className="ProductOption"
                  onChange={handleSelect}
                  value={selected}
                >
                  <option className="ProductOptionTitle">{selected}</option>
                </select>
              </section>
              <p className="sellingProductOptionFormPrice">
                <span className="sellingProductOptionOrdeAmount">주문금액</span>
                <span className="sellingProductOptioPriceWrap">
                  <span>0</span>
                  <span>원</span>
                </span>
              </p>
              <div className="sellingProductOptionFormFooter">
                <button className="shoppingBasketBtn">장바구니</button>
                <button className="buyNow">바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductItemTap />
      <div className="productionsellingDetailInfoContainer">
        <div className="productionsellingDetailInfo">
          <ProductItemDetailInfo />
        </div>
        <div className="productionReviewFeedList">
          <article className="productionReviewItem">
            <Reviews />
          </article>
        </div>
      </div>
    </div>
  );
}
