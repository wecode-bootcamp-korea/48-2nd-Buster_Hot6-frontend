import React from 'react';
import './Products.scss';
import ProductsSlide from '../../components/ProductsSlide/ProductsSlide';
import ProductList from '../../components/Products/ProductList';

export default function Products() {
  return (
    <>
      <ProductsSlide />
      <ProductList />
    </>
  );
}
