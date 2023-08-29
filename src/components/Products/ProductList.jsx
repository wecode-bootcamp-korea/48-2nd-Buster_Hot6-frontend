import React from 'react';
import './ProductList.scss';
import PostListCard from './ProductListCard';

export default function ProductList() {
  return (
    <section className="productContainer">
      <header className="storeItemListHeader">
        <h1 className="productTitle">가구</h1>
      </header>
      <div className="storeItemListContentContainer">
        <PostListCard />
      </div>
    </section>
  );
}
