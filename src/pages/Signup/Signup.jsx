import React, { useState } from 'react';
import './Signup.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');

  const handleInfoEmail = e => {
    setEmail(e.target.value);
  };
  const handleInfoPassword = e => {
    setPassword(e.target.value);
  };

  const handleInfoPasswordCheck = e => {
    setPasswordCheck(e.target.value);
  };
  const handleInfoNickname = e => {
    setNickname(e.target.value);
  };
  const isEmailValue = email.includes('@');
  const isInputValue =
    isEmailValue &&
    password.length >= 8 &&
    password === passwordCheck &&
    nickname.length >= 2 &&
    nickname.length <= 15;

  const goToHome = () => {
    navigate('/');
    fetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordCheck: passwordCheck,
        nickname: nickname,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        }

        if (data.message === 'specified user does not exist') {
          alert('존재하지 않는 유저입니다.');
        }
      });
  };

  const emailOk = () => {
    alert('인증되셨습니다.');
  };

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
            <input
              onChange={handleInfoEmail}
              value={email}
              className="email"
              placeholder="이메일"
            />
            <button
              onClick={emailOk}
              className={isEmailValue ? 'btn active' : 'btn'}
              disabled={!isEmailValue}
            >
              이메일 인증하기
            </button>
          </section>
          <section className="passwordWrap">
            <div>비밀번호</div>
            <div>8자 이상 입력해주세요.</div>
            <input
              onChange={handleInfoPassword}
              value={password}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
          </section>
          <section className="rePasswordWrap">
            <div>비밀번호 확인</div>
            <input
              onChange={handleInfoPasswordCheck}
              value={passwordCheck}
              className="rePassword"
              type="password"
              placeholder="비밀번호 확인"
            />
          </section>
          <section className="nameWrap">
            <div>별명</div>
            <div>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</div>
            <input
              onChange={handleInfoNickname}
              value={nickname}
              className="name"
              placeholder="별명 (2~15자)"
            />
            <button
              onClick={goToHome}
              disabled={!isInputValue}
              className={isInputValue ? 'btn active' : 'btn'}
            >
              회원가입 완료
            </button>
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
