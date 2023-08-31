import React, { useState } from 'react';
import './ProductItemDetail.scss';
import ProductItemTap from '../ProductItemTap/ProductItemTap';
import ProductItemDetailInfo from '../ProductItemDetailInfo/ProductItemDetailInfo';
import Reviews from '../Reviews/Reviews';
import { useLocation } from 'react-router-dom';

export default function ProductItemDetail() {
  const {
    state: {
      products: { id, image_url, name, description, price },
    },
  } = useLocation();
  const [selected, setSelected] = useState('상품 이름');
  const handleSelect = e => setSelected(e.target.value);
  const handleShoppingBasket = e => {
    // // 여기서 장바구니에 추가하면 됨!
    // const product = {
    //   id,
    //   image_url,
    //   name,
    //   description,
    //   price,
    //   option: selected,
    //   quantity: 1,
    // };
    // // 추가적으로 함수 만들어서 유저 식별 고유 id 와 product 넣어주기
  };

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
              <div className="sellingProductImg">
                <img
                  className="sellingProductImgUrl"
                  src={image_url}
                  alt="상품 이미지"
                />
              </div>
            </div>
          </div>
          <div className="productOvewviewInfo">
            <div className="sellingProductHeader">
              <h1 className="sellingProductHeaderTitle">
                <p className="sellingProductHeaderTitleBrand">브랜드?</p>
                <div className="sellingProductHeaderTitleNameWrap">
                  <span className="sellingProductHeaderTitleName">{name}</span>
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
                  <span className="price">{description}</span>
                  <span className="won">원</span>
                </span>
              </span>
              <div className="sellingProductHeaderPricePrice">
                <span className="finalPrice">{price}</span>
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
                <button
                  className="shoppingBasketBtn"
                  onClick={handleShoppingBasket}
                >
                  장바구니
                </button>
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
