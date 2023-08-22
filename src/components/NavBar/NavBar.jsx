import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2, BsSearch } from 'react-icons/bs';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="navBar">
      <p>오늘의 집</p>
      <p>
        <Link to="/">커뮤니티</Link>
      </p>
      <p>
        <Link to="/store">쇼핑</Link>
      </p>
      <div className="searchBar">
        <input type="text" placeholder="통합검색" />
        <BsSearch />
      </div>

      <BsCart2 />
      <button>로그인</button>
      <p>|</p>
      <button>회원가입</button>
    </nav>
  );
}
