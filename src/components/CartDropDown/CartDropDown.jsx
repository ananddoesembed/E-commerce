import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { togglecartDropDown } from '../../redux/cart/CartActions'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import {selectCartItems} from './../../redux/cart/cartSelector'
import './CartDropDown.scss'
function CartDropDown({cartItems,history,dispatch}) {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length?
                    cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}/>):
                    <span className="empty-message">Cart is empty</span>
                }
            </div>
                <CustomButton onClick={()=>{
                    history.push("/checkout")
                    dispatch(togglecartDropDown())
                    }} >Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state=>({
    cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown))