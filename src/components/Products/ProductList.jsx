import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import PostListCard from './ProductListCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.235:3000/products/bro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('통신 실패 😭');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'success') {
          alert('성공');
          setProducts(data.products);
        } else {
          alert('안 됨');
        }
      });
  }, []);

  return (
    <section className="productContainer">
      <header className="storeItemListHeader">
        <h1 className="productTitle">가구</h1>
      </header>
      <div className="storeItemListContentContainer">
        {products.map((item, i) => (
          <PostListCard item={item} key={i} />
        ))}
      </div>
    </section>
  );
}
