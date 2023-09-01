import React, { useState } from 'react';
import './ProductItemDetailInfo.scss';
import { FiStar } from 'react-icons/fi';
import ReviewModal from '../ReviewModal/ReviewModal';

export default function ProductItemDetailInfo({ description }) {
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
          <div className="productionsellingSectionInfo">{description}</div>
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
