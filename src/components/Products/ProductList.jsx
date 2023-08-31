import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductListCard from './ProductListCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.193:3000/products/products/all', {
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
        if (data) {
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
        {products.map((products, i) => (
          <ProductListCard products={products} key={i} />
        ))}
      </div>
    </section>
  );
}
