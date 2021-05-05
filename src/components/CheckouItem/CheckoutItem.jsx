import React from 'react'
import './CheckoutItem.scss'
 function CheckoutItem({cartItem}) {
     const {name,imageUrl,price,quandity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quandity">{quandity}</span>
            <div className="remove-button">&#10005;</div>

        </div>
    )
}


export default (CheckoutItem)