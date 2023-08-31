import React from 'react';
import './HomeDetail.scss';
import Avatar from '../../components/Avatar/Avatar';

export default function HomeDetail() {
  return (
    <div className="HomecontentDtail">
      <div className="HomecontentDtailSection">
        <header className="HomecontentDtailHeader">
          <h1 className="HomecontentDtailTitle">
            多주택 | 가족의 로망을 모두 담은, 김포 캐빈하우스
          </h1>
          <div className="HomecontentDtailBottom">
            <div className="HomecontentDtailAuthor">
              <Avatar
                image="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=144&h=144&c=c&webp=1"
                size="medium"
              />
              <div className="HomecontentDtailAuthorInfo">
                <div className="HomecontentDtailAuthorName">아나아ㅏㅇ</div>
                <div className="HomecontentDtailAuthorDate">23. 09. 02</div>
              </div>
            </div>
          </div>
        </header>
        <div>
          <h2 className="HomecontentDetailBlock">
            ⚡️ 한 장으로 집들이 끝내기
          </h2>
        </div>
        <div className="contentDtailSection">
          <div className="contentDtailImgContainer">
            <div className="contentDtailImgOverlay">
              <img
                className="contentDtailImg"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/161081443577819861.JPG?gif=1&w=1440&webp=1"
                alt="남의집"
              />
            </div>
            <div className="contentDetailProductImgWrap">
              <div className="contentDetailProductImgs">
                <ul className="productImgsContainer">
                  <li className="productImgsWrap">
                    <div className="productImgWrap">
                      <a className="productImgSingleWrap">
                        <div className="productImgSingle">
                          <img
                            className="productImg"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/160576563598379329.jpg?gif=1&w=144"
                            alt="zz"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="productImgsWrap">
                    <div className="productImgWrap">
                      <a className="productImgSingleWrap">
                        <div className="productImgSingle">
                          <img
                            className="productImg"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/160576563598379329.jpg?gif=1&w=144"
                            alt="zz"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="contentDetailWriting">
            코로나로 인해 계속된 재택근무로 방에 변화가 필요해졌어요! 협탁에서
            업무를 하기엔 공간이 너무 협소했고, 식탁에서 하기엔 전화 업무도 있다
            보니 가족들이 너무 신경 쓰였어요. 결국 책상을 구매하기로 결정했지만
            제 눈은 주제를 모르고 하늘에 달려 150만 원대의 제품이 눈에
            들어오더라고요; 책상에 큰돈을 쓰기엔 부담스러워서 저렴이를 찾던
            와중에 저와 취향이 매우 비슷하신 분이 책상을 제작하셨다는 글을 보게
            되었고, 어렵지 않은 것 같아 저도 제작해보기로 했습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
