import React from 'react'
import { connect } from 'react-redux'
import './Checkout.scss'
import {selectCartItems,selectCartItemPrice} from '../cartSelector'
import CheckoutItem from '../../../components/CheckouItem/CheckoutItem'
function CheckOut({cartItems,cartPrice}) {
    return (
        <div  className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quandity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">
                price=${cartPrice}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    cartItems:selectCartItems(state),
    cartPrice:selectCartItemPrice(state)
}) 

export default connect(mapStateToProps)(CheckOut)