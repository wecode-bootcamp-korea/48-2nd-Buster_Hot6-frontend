import React from 'react';
import './ProductListCard.scss';
import { useNavigate } from 'react-router-dom';

export default function ProductListCard({
  products: { id, image_url, name, description, price },
}) {
  const navigate = useNavigate();
  return (
    <div className="storeItemContentBox">
      <div className="storeItemContentWrap">
        <article className="storeItemContent">
          <div
            className="storeItemOverlay"
            onClick={() => {
              navigate(`/store/${id}`);
            }}
          />
          <div className="storeItemImg">
            <div className="storeProductItemImgWrap">
              <img className="productItemImg" src={image_url} alt="나나나" />
              <button className="storeItemScrapBadge">스크랩</button>
            </div>
          </div>
          <div className="storeItemDescriptionContentContainer">
            <div>
              <h1 className="storeItemDescriptionContentHeader">
                <div className="storeItemDescriptionName">{name}</div>
                <div className="storeItemDescriptionName">{description}</div>
              </h1>
              <div className="storeItemDescriptionPrice">
                <span className="storeItemDescriptionOriginalPrice">
                  {price}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
