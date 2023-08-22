import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="signup">
      <section className="logoContainer">
        <div className="logoWrap">
          <img className="logo" src="/images/homelogo.png" alt="logo" />
          <p>오늘의집</p>
        </div>
        <section className="inputContainer">
          <section className="inputWrap">
            <div>이메일</div>
            <input className="email" placeholder="이메일" />
            <button className="btn">이메일 인증하기</button>
          </section>
          <section className="passwordWrap">
            <div>비밀번호</div>
            <div>8자 이상 입력해주세요.</div>
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
            />
          </section>
          <section className="rePasswordWrap">
            <div>비밀번호 확인</div>
            <input
              className="rePassword"
              type="password"
              placeholder="비밀번호 확인"
            />
          </section>
          <section className="nameWrap">
            <div>별명</div>
            <div>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</div>
            <input className="name" placeholder="별명 (2~15자)" />
            <button className="btn">회원가입 완료</button>
          </section>

          <div>
            <span>이미 아이디가 있으신가요?</span>
            <Link to="/login">로그인</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
