import React, { useEffect, useState } from 'react';
import MainHeader from '../header';
import Footer from '../footer';
import './productdetailes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

function ProductDetailes() {
  const [imageSrc, setImageSrc] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productPastPrice, setProductPastPrice] = useState('');
  const [productRating, setProductRating] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setImageSrc(decodeURIComponent(urlParams.get('image')));
    setProductName(decodeURIComponent(urlParams.get('name')));
    setProductDescription(decodeURIComponent(urlParams.get('description')));
    setProductPrice(decodeURIComponent(urlParams.get('price')));
    setProductPastPrice(decodeURIComponent(urlParams.get('pastprice')));
    setProductRating(decodeURIComponent(urlParams.get('rating')));
  }, []);

  return (
    <>
      <MainHeader />
      <div className="ProductDetailes">
        <div className="images-container">
          <img src={imageSrc} alt={productName} />
        </div>
        <div className="product-info">
          <h1>{productName}</h1>          
          <span>
            <p className="after-offer">{productPrice} LE</p>
            <p className="before-offer">{productPastPrice} LE</p>
          </span>
          <div className="rating">
            {[...Array(Number(productRating))].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
            ))}
            </div>
          <p>{productDescription}</p>
                <button>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                <button>Buy now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailes;