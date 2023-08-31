import React, { useState } from 'react';
import './ProductItemDetailInfo.scss';
import { FiStar } from 'react-icons/fi';
import ReviewModal from '../ReviewModal/ReviewModal';

export default function ProductItemDetailInfo() {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [starNum, setStarNum] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenPost = () => {
    setOpenModal(true);
  };

  return (
    <div className="productionsellingDetailInfoContent">
      <section className="productionsellingSection">
        <header className="productionsellingSectionHeader">
          <h1 className="productionsellingSectionTitle">상품정보</h1>
          <div className="productionsellingSectionInfo">
            <img
              className="productionsellingSectionInfoImg"
              src="https://exit.ohou.se/3a864a80cf86d7a03f1425ab18c4ad73024312b2/ai.esmplus.com/pbcottcon/2021_%EC%BD%94%ED%8A%BC%EB%A6%AC%EB%B9%99/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%B8_%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%91%E1%85%A1%E1%84%90%E1%85%B3%E1%84%82%E1%85%A5_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_%E1%84%89%E1%85%AE%E1%84%80%E1%85%A5%E1%86%AB.jpg"
              alt="상세이미지"
            />
          </div>
        </header>
      </section>
      <section className="productionsellingSection">
        <header className="productionsellingSectionHeaderReview">
          <h1 className="productionsellingSectionTitle">
            리뷰
            <span className="count">22435</span>
          </h1>
          <div className="productionsellingSectionRight">
            <button className="reviewBtn" onClick={handleOpenPost}>
              리뷰작성
            </button>
            {openModal && <ReviewModal onClose={() => setOpenModal(false)} />}
          </div>
        </header>
        <div className="productionReviewFeed">
          <div className="productionReviewFeedHeader">
            <div className="productionReviewFeedHeaderStars">
              <div className="productionReviewFeedHeaderStarsBadge">
                {starArr.map(idx => (
                  <FiStar
                    className="starIcon"
                    key={idx}
                    onClick={() => setStarNum(idx)}
                    onMouseEnter={() => (starNum === 0 ? setHover(idx) : null)}
                    onMouseLeave={() => setHover(0)}
                    fill={idx <= (hover || starNum) ? '#000' : '#E5E5E5'}
                  />
                ))}
                <div className="fianlRatingScore">4.8</div>
              </div>
              <div className="productionReviewFeedHeaderWholeStars">
                <div className="productionReviewFeedHeaderWholeStarsWrap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
