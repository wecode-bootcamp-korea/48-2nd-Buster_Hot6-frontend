import React from 'react';
import './ProductItemTap.scss';

export default function ProductItemTap() {
  const navItem = ['상품정보', '리뷰', '배송/환불'];

  return (
    <div className="stickyTapContainer">
      <div className="stickyTapNavigation">
        <nav className="productSellingNavigation">
          <ol className="productSellingNavigationContent">
            {navItem.map((item, i) => {
              return (
                <li className="productSellingNavigationContentItem" key={i}>
                  {item}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
