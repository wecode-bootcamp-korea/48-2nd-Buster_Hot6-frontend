import React, { useEffect, useState } from 'react';
import ProductsSlide from '../../components/ProductsSlide/ProductsSlide';
import ProductList from '../../components/Products/ProductList';
import './Products.scss';

const ALL_PRODUCTS = 'All Products';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.176:3000/products/all', {
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
          setProducts(data.products);
        } else {
          alert('안 됨');
        }
      });
  }, []);

  const categories = [
    ...new Set(products.map(product => product.category_name)),
  ];

  const [selected, setSelected] = useState(ALL_PRODUCTS);
  const filterd =
    selected === ALL_PRODUCTS
      ? products
      : products.filter(products => products.category_name === selected);

  return (
    <>
      <ProductsSlide
        categories={[ALL_PRODUCTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <ProductList categories={categories} products={filterd} />
    </>
  );
}
