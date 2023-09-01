import React, { useEffect, useState } from 'react';
import './Address.scss';
import DaumPostcode from 'react-daum-postcode';

const options = [
  '선택해주세요',
  'naver.com',
  'daum.net',
  'gmail.com',
  'hanmail.net',
  '직접 입력',
];

const numOptions = ['010', '011'];

export default function Address({ handleOrdersData, setOrdersData }) {
  const [selected, setSelected] = useState(options[0]);
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState('');
  const [zoneCode, setZonecode] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const handle = {
    clickButton: () => {
      setOpenPostcode(current => !current);
    },

    selectAddress: data => {
      setAddress(data.address);
      setZonecode(data.zonecode);
      setOpenPostcode(false);
    },
  };
  useEffect(() => {
    setOrdersData(prev => ({ ...prev, zoneCode, address, detailAddress }));
  }, [address, zoneCode]);
  return (
    <div onChange={e => handleOrdersData(e)}>
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
                        name="email"
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
                        <select
                          name="domain"
                          className="addressInfoUserEmailDomainList"
                        >
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
                      <select
                        name="firstPhoneNumber"
                        className="addressInfoUserEmailDomainList"
                      >
                        {numOptions.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="addressInfoUserPhonenumLast">
                    <input
                      className="addressInfoUserEmailInput"
                      type="tel"
                      name="secondPhoneNumber"
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
              <div className="addressInfoUserName">배송지명</div>
              <div className="addressInfoUserNameInputWrap">
                <input
                  className="addressInfoUserNameInput"
                  name="deliveryAddress"
                  maxLength="10"
                />
              </div>
            </label>
            <label className="addressInfoUserEmailWrap">
              <div className="addressInfoUserName">받는 사람</div>
              <div className="addressInfoUserNameInputWrap">
                <input
                  className="addressInfoUserNameInput"
                  name="deliveryName"
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
                      <select
                        name="deliveryFirstPhoneNumber"
                        className="addressInfoUserEmailDomainList"
                      >
                        {numOptions.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="addressInfoUserPhonenumLast">
                    <input
                      className="addressInfoUserEmailInput"
                      name="deliverySecondPhoneNumber"
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
                        <button
                          className="findAddressBtn"
                          onClick={handle.clickButton}
                        >
                          주소찾기
                        </button>
                        {openPostcode && (
                          <div className="modalWholeContaienr">
                            <div className="modalContainer">
                              <div className="modalWrap">
                                <div className="modalBoxWrap">
                                  <div className="modalBox">
                                    <div className="modalBoxTitlteWrap">
                                      <h2 className="modalBoxTitlte">
                                        주소 검색
                                      </h2>
                                    </div>
                                    <div className="modalAddressContainer">
                                      <div className="modalAddress">
                                        <DaumPostcode
                                          onComplete={handle.selectAddress}
                                          autoClose={false}
                                          defaultQuery="판교역로 235"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="addressInfoUserPhonenumLast">
                      <input
                        className="ariveAddressNumInfoUser"
                        disabled
                        placeholder={zoneCode}
                      />
                    </div>
                  </div>
                  <div className="finalAriveAddressWrap">
                    <textarea
                      className="finalAriveAddress"
                      placeholder={address}
                    />
                  </div>
                  <div className="finalAriveAddressWrap">
                    <input
                      name="detailAddress"
                      onChange={e => setDetailAddress(e.target.value)}
                      className="addressInfoUserEmailInput"
                    />
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
