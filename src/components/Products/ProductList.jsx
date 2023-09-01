import React from 'react';
import ProductListCard from './ProductListCard';
import './ProductList.scss';

export default function ProductList({ products }) {
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
