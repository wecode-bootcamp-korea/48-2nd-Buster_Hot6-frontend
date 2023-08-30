import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const goToHome = () => {
    fetch('http://10.58.52.83:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        }

        if (data.message === 'INVALID_USER user') {
          alert('존재하지 않는 유저입니다.');
        }
      });
  };

  const isInputValue = email.includes('@') && password.length >= 8;

  return (
    <div className="login">
      <main className="container">
        <div className="logoWrap">
          <div className="logo">
            <div className="imageWrap">
              <img
                className="logoPicture"
                src="/images/homelogo.png"
                alt="logo"
              />
              <p>오늘의 집</p>
            </div>

            <div className="form">
              <input
                className="email"
                type="email"
                placeholder="이메일"
                onChange={handleEmail}
                value={email}
              />

              <input
                className="password"
                type="password"
                placeholder="비밀번호"
                onChange={handlePassword}
                value={password}
              />

              <button
                className={isInputValue ? 'btn active' : 'btn'}
                onClick={goToHome}
                disabled={!isInputValue}
              >
                로그인
              </button>
            </div>
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
