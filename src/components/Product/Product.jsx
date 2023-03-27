import React from 'react';
import './Product.css'

const Product = (props) => {
    const{img, name, price, seller, ratings}=props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <h2 className='product-name'>{name}</h2>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} Star</p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;