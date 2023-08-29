import React, { useState } from 'react';
import './Address.scss';

const options = [
  '선택해주세요',
  'naver.com',
  'daum',
  'gmail',
  'hanmail',
  '직접 입력',
];

export default function Address() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1 className="addressContentTitle">주문/결제</h1>
      <section className="addressContentContainer">
        <section className="addressContentInfoTitleWrap">
          <div className="addressContentInfoTitle">주문자</div>
        </section>
        <div className="addressInfoWrap">
          <section className="addressInfo">
            <label className="addressInfoUserNameWrap">
              <div className="addressInfoUserName">이름</div>
              <div className="addressInfoUserNameInputWrap">
                <input
                  className="addressInfoUserNameInput"
                  name="name"
                  maxLength="10"
                />
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserEmail">이메일</div>
              <div className="addressInfoUserEmailInputFirstWrap">
                <div className="addressInfoUserEmailInputFirstWrapAt">
                  <div className="addressInfoUserEmailInputFirstWrapAtWrap">
                    <div className="addressInfoUserEmailInputFirstContainer">
                      <input
                        className="addressInfoUserEmailInput"
                        type="email"
                        placeholder="이메일"
                        title="이메일 앞부분"
                        maxLength="20"
                      />
                    </div>
                    <span className="addressInfoUserEmailAt">@</span>
                  </div>
                  <div className="addressInfoUserEmailDomainContainer">
                    <div className="addressInfoUserEmailDomainWrap">
                      <div className="addressInfoUserEmailDomainListWrap">
                        <select className="addressInfoUserEmailDomainList">
                          {options.map((option, index) => (
                            <option key={index}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserEmail">휴대전화</div>
              <div className="addressInfoUserNameInputWrap">
                <div className="addressInfoUserEmailInputFirstWrapAt">
                  <div className="addressInfoUserPhonenumFirstContainer">
                    <div className="addressInfoUserPhonenumFirstListWrap">
                      <select className="addressInfoUserEmailDomainList">
                        {options.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="addressInfoUserPhonenumLast">
                    <input
                      className="addressInfoUserEmailInput"
                      type="tel"
                      placeholder="입력해주세요"
                      maxLength="9"
                    />
                  </div>
                </div>
              </div>
            </label>
          </section>
        </div>
      </section>
      <section className="addressContentContainer">
        <section className="addressContentInfoTitleWrap">
          <div className="addressContentInfoTitle">배송지</div>
        </section>
        <div className="addressInfoWrap">
          <section className="addressInfo">
            <label className="addressInfoUserNameWrap">
              <div className="addressInfoUserName">이름</div>
              <div className="addressInfoUserNameInputWrap">
                <input
                  className="addressInfoUserNameInput"
                  name="name"
                  maxLength="10"
                />
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserName">이름</div>
              <div className="addressInfoUserNameInputWrap">
                <input
                  className="addressInfoUserNameInput"
                  name="name"
                  maxLength="10"
                />
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserEmail">휴대전화</div>
              <div className="addressInfoUserNameInputWrap">
                <div className="addressInfoUserEmailInputFirstWrapAt">
                  <div className="addressInfoUserPhonenumFirstContainer">
                    <div className="addressInfoUserPhonenumFirstListWrap">
                      <select className="addressInfoUserEmailDomainList">
                        {options.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="addressInfoUserPhonenumLast">
                    <input
                      className="addressInfoUserEmailInput"
                      type="tel"
                      placeholder="입력해주세요"
                      maxLength="9"
                    />
                  </div>
                </div>
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserEmail">주소</div>
              <div className="ariveAddressInfoUserNameInputWrap">
                <div>
                  <div className="ariveAddressInfoUseWrap">
                    <div className="addressInfoUserPhonenumFirstContainer">
                      <div className="addressInfoUserPhonenumFirstListWrap">
                        <button className="findAddressBtn">주소찾기</button>
                      </div>
                    </div>
                    <div className="addressInfoUserPhonenumLast">
                      <input className="ariveAddressNumInfoUser" disabled />
                    </div>
                  </div>
                  <div className="finalAriveAddressWrap">
                    <textarea className="finalAriveAddress" />
                  </div>
                  <div className="finalAriveAddressWrap">
                    <input className="addressInfoUserEmailInput" />
                  </div>
                </div>
              </div>
            </label>
          </section>
        </div>
      </section>
    </div>
  );
}
