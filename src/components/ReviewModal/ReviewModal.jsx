import React, { useState } from 'react';
import './ReviewModal.scss';
import { FiStar } from 'react-icons/fi';

export default function ReviewModal({ onClose }) {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [starNum, setStarNum] = useState(0);

  return (
    <section
      className="reviewModalContainer"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="reviewModalCotent">
        <div className="reviewModal">
          <div className="reviewModalTitle">리뷰쓰기</div>
          <button className="reviewModalClose " onClick={() => onClose()}>
            닫기
          </button>
          <form className="reviewForm">
            <div className="reviewFormProduct">
              <img
                className="reviewFormProductImg"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=240&h=240&c=c&webp=1"
                alt="상품사진"
              />
              <div className="reviewFormProductContent">
                <div className="reviewFormProductContentBrand">코튼리빙</div>
                <div className="reviewFormProductContentName">
                  [8/28하루만29,900원] 40수 코마사 호텔수건 200g 10장
                  압도적리뷰!
                </div>
              </div>
            </div>
            <div className="reviewFormProductSection">
              <div className="reviewFormProductSectionTitle">별점 평가</div>
              <div className="reviewFormStarSection">
                <div className="reviewFormStarLabel">만족도</div>
                {starArr.map(idx => (
                  <FiStar
                    className="reviewStarIcon"
                    key={idx}
                    onClick={() => setStarNum(idx)}
                    onMouseEnter={() => (starNum === 0 ? setHover(idx) : null)}
                    onMouseLeave={() => setHover(0)}
                    fill={idx <= (hover || starNum) ? '#000' : '#E5E5E5'}
                  />
                ))}
              </div>
            </div>
            <div className="reviewFormProductSection">
              <div className="reviewFormProductSectionTitle">리뷰 작성</div>
              <textarea
                className="reviewFromInput"
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)"
              />
            </div>
            <button className="reviewFormSubmit">완료</button>
          </form>
        </div>
      </div>
    </section>
  );
}
