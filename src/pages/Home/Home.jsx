import React, { useEffect, useState } from 'react';
import './Home.scss';
import Banner from './components/Banner';
import Categories from './components/Categories';

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/data/categories.json')
      .then(res => res.json())
      .then(result => setCategories(result.data));
  }, []);

  if (!categories.length > 0) return null;
  return (
    <div className="home">
      <Banner />
      {categories.map(category => {
        return <Categories key={category.id} category={category} />;
      })}
    </div>
  );
}
