import {createSelector} from 'reselect'


const cartSelector = state =>state.cart


export const selectCartItems =  createSelector(
    [cartSelector],(cart)=>cart.cartItems
)
export const selectCartItemCount = createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce((accumulatedQuandity,cartItem)=>accumulatedQuandity+cartItem.quandity,0)
)

export const selectCartItemPrice = createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce((accumulatedQuandity,cartItem)=>accumulatedQuandity+cartItem.quandity*cartItem.price,0)
)