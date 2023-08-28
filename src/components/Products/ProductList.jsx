import React from 'react';
import './ProductList.scss';
import PostListCard from './ProductListCard';

export default function ProductList() {
  return (
    <div className="productContainer">
      <h1 className="productTitle">가구</h1>
      <div className="productListFilter" />
      <ul>
        <PostListCard />
      </ul>
    </div>
  );
}
