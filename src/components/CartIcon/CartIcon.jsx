import React from 'react' 
import { connect } from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../asssets/shopping-bag.svg'
import {togglecartDropDown} from './../../redux/cart/CartActions'
import {selectCartItemCount} from './../../redux/cart/cartSelector'
import './CArtIcon.scss'
function CartIcon({togglecartDropDown,itemCount}) {
    return (
        <div>
            <div className="cart-icon" onClick={togglecartDropDown}>
                <ShoppingIcon className="shopping-icon"/>
                <span className="item-count">{itemCount}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch => ({
    togglecartDropDown:()=>dispatch(togglecartDropDown())
  })
  const mapStateToProps = state =>({
    itemCount:selectCartItemCount(state)
}) 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)