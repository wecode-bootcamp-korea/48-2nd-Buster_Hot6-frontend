import React from 'react';
import './Home.scss';
import Banner from './components/Banner';

export default function Home() {
  const bannerImages = ['/images/1.png', '/images/2.png', '/images/3.png'];

  return (
    <div className="home">
      <Banner images={bannerImages} />
    </div>
  );
}
