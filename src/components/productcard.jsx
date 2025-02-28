// write product card here
import React from 'react';
import ViewProductButton from './button.jsx';

const Productcard = () => {
  const productImage = 'https://bikes.motobank.co.uk/storage/royal-enfield/continental-gt-650-twin-814/i/photo-814-13639.jpg';
  const productName = 'GT 650 twin';
  const productPrice = '$4999.99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" style={{ height: '150px', width: '200px' }} />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;

