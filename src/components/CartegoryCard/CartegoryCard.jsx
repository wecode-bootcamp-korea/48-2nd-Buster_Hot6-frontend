import React from 'react';
import './CartegoryCard.scss';

export default function CartegoryCard({ item }) {
  return (
    <div className="cartegoryItemWrap">
      <img className="cartegoryItemImg" src={item.img} alt="?" />
      <div className="cartegoryItemTitle">{item.item}</div>
    </div>
  );
}
