import React, { useState } from 'react';
import './Reviews.scss';
import Avatar from '../Avatar/Avatar';
import { FiStar } from 'react-icons/fi';

export default function Reviews() {
  const image = `https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80`;
  const starArr = [1, 2, 3, 4, 5];
  const [starNum, setStarNum] = useState(0);

  return (
    <div className="productionReview">
      <div className="productionReviewItemWriter">
        <Avatar image={image} size="small" />
        <div className="productionReviewItemWriterInfo">
          <p className="productionReviewItemWriterName">나나나나</p>
          {starArr.map(idx => (
            <FiStar
              className="reviewStarIconWriter"
              key={idx}
              onClick={() => setStarNum(idx)}
              fill={idx <= starNum ? '#000' : '#E5E5E5'}
            />
          ))}
          <span className="productionReviewItemWriterInfoDate">2023.08.29</span>
        </div>
      </div>
      <p className="productionReviewItemDescription">
        이사하면서 수건이 오래되어서 바꿨는데 좋습니다.
      </p>
    </div>
  );
}
