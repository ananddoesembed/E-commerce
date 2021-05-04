import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import {selectCartItems} from './../../redux/cart/cartSelector'
import './CartDropDown.scss'
function CartDropDown({cartItems}) {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}/>)
                }
            </div>
                <CustomButton >Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state=>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)