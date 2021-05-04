import React from 'react'
import './CartIte.scss'
export default function CartItem({cartItem}) {
    const {name,imageUrl,price,quandity} = cartItem
    return (
        <div className="cart-item">
            <img src={imageUrl} alt='item'/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quandity}x${price}</span>
            </div>
        </div>
    )
}


