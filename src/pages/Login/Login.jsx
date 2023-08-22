import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="containerWrap">
      <main className="container">
        <div className="logoWrap">
          <div className="logo">
            <div className="imageWrap">
              <img className="logoPicture" src="/images/homelogo.png"></img>
              <p>오늘의 집</p>
            </div>

            <form className="form">
              <input className="email" type="email" placeholder="이메일" />

              <input
                className="password"
                type="password"
                placeholder="비밀번호"
              />

              <button className="btn">로그인</button>
            </form>
            <div className="rePassword">
              <a>비밀번호 재설정 </a>
              <Link to="/signup">회원가입</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
