import {ADD_ITEM, TOGGLE_CART} from './CartTypes'
export const togglecartDropDown=()=>({
    type:TOGGLE_CART
})
export const addItem=(item)=>({
    type:ADD_ITEM,
    payload:item
})