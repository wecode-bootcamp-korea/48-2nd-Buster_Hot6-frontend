import React from 'react';
import './Home.scss';
import Banner from './components/Banner';
import Categories from './components/Categories';

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <Categories />
      <Categories />
    </div>
  );
}
