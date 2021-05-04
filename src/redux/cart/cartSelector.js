import {createSelector} from 'reselect'


const cartSelector = state =>state.cart


export const selectCartItems =  createSelector(
    [cartSelector],(cart)=>cart.cartItems
)
export const selectCartItemCount = createSelector(
    [cartSelector],(cartItems)=>cartItems.reduce((accumulatedQuandity,cartItem)=>accumulatedQuandity+cartItem.quandity,0)
)