import React, { useEffect, useState } from 'react';
import './Home.scss';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { BASE_API_URL } from '../../config';
export default function Home() {
  const [categories, setCategories] = useState([]);

  let a = [];
  let b = [];
  let c = [];

  useEffect(() => {
    fetch(`${BASE_API_URL}posts/category`)
      .then(res => res.json())
      .then(result => setCategories(result.getPosts));
  }, []);

  if (!categories.length > 0) return null;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].postCategoriesId === 1) {
      a.push(categories[i]);
    } else if (categories[i].postCategoriesId === 2) {
      b.push(categories[i]);
    } else {
      c.push(categories[i]);
    }
  }

  return (
    <div className="home">
      <Banner />
      <Categories hash="거실" category={a} />
      <Categories hash="주방" category={b} />
      <Categories hash="오피스" category={c} />
    </div>
  );
}
