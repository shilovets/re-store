import React from 'react';

import './cartoon-list-item.css';

const CartoonListItem = ({cartoon, onAddedToCart}) => {
    const {title, type, price, image} = cartoon;
    return (

        <div className="cartoon-list-item">
            <div className="cartoon-cover">
                <img src={image} alt="cover" />
            </div>
            <div className="cartoon-details">
                <span className="cartoon-title">{title}</span>
                <div className="cartoon-author">{type}</div>
                <div className="cartoon-price">${price}</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-outline-info add-to-cart">
                    Add to cart
                </button>
            </div>
        </div>
    );
};
export default CartoonListItem;
