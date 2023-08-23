import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveEmail = e => {
    setEmail(e.target.value);
  };

  const savePassword = e => {
    setPassword(e.target.value);
  };

  const goToHome = () => {
    navigate('/');
    fetch('http://10.58.52.144:3000/users/signup', {
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
        console.log(data.message);
        console.log(data.accessToken);
        if (data.message === 'specified user does not exist') {
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
              <img className="logoPicture" src="/images/homelogo.png"></img>
              <p>오늘의 집</p>
            </div>

            <form className="form">
              <input
                className="email"
                type="email"
                placeholder="이메일"
                onChange={saveEmail}
                value={email}
              />

              <input
                className="password"
                type="password"
                placeholder="비밀번호"
                onChange={savePassword}
                value={password}
              />

              <button
                className={isInputValue ? 'btn active' : 'btn'}
                onClick={goToHome}
                disabled={!isInputValue}
              >
                로그인
              </button>
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
