import React, { useEffect } from 'react';
import './ProductListCard.scss';

export default function ProductListCard() {
  const [products, setProducts] = [];

  useEffect(() => {
    fetch('http://10.58.52.235:3000/products/bro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        console.log(res);
        if (res.ok === true) {
          return res;
        }
        throw new Error('통신 실패 😭');
      })
      .catch(error => console.log(error))
      .then(data => {
        console.log('???', data);
        if (typeof data !== 'undefined') {
          alert('성공');
          setProducts(data.products);
        } else if (typeof data === 'undefined') {
          alert('안 됨');
        }
      });
  }, []);
  console.log(products);

  {
    products?.map((item, i) => {
      console.log(item);
      return (
        <div className="storeItemContentBox">
          <div className="storeItemContentWrap">
            <article className="storeItemContent">
              <a className="storeItemOverlay" />
              <div className="storeItemImg">
                <div className="storeProductItemImgWrap">
                  <img
                    className="productItemImg"
                    src={item.image_url}
                    alt={i}
                  />
                  <button className="storeItemScrapBadge">스크랩</button>
                </div>
              </div>
              <div className="storeItemDescriptionContentContainer">
                <div>
                  <h1 className="storeItemDescriptionContentHeader">
                    <div className="storeItemDescriptionBrand">브랜드 없음</div>
                    <div className="storeItemDescriptionName">{item.name}</div>
                    <div className="storeItemDescriptionName">
                      {item.description}
                    </div>
                  </h1>
                  <div className="storeItemDescriptionPrice">
                    <span className="storeItemDescriptionOriginalPrice">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      );
    });
  }
}
