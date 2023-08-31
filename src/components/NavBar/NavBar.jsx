import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch, BsCart } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import './NavBar.scss';

export default function NavBar() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToSignup = () => {
    navigate('/signup');
  };
  const goToCart = () => {
    navigate('/cart');
  };

  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navBar">
      <div className="logo">
        오늘의 집
        <Link to="/" className="community">
          커뮤니티
        </Link>
        <Link to="/store" className="shopping">
          쇼핑
        </Link>
      </div>

      <div className="searchBar">
        <BsSearch className="icon" />
        <input className="inputBar" type="text" placeholder="통합검색" />
      </div>
      <div className="btns">
        {isLoggedIn ? (
          <>
            <FiBookmark className="scrap" />
            <BsCart onClick={goToCart} />
          </>
        ) : (
          <>
            <button onClick={goToLogin} className="login">
              로그인
            </button>
            <button onClick={goToSignup} className="signup">
              회원가입
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
