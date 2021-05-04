import { addItemsToCart } from './cart.utils'
import {TOGGLE_CART,ADD_ITEM} from './CartTypes'


const INITIAL_STATE={
    toggleCart:false,
    cartItems:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
const {type,payload} = action
    switch(type){
        case TOGGLE_CART:
            return{
                ...state,
                toggleCart : !state.toggleCart
            }
        case ADD_ITEM:return{
            ...state,
            cartItems:addItemsToCart(state.cartItems,payload)
        }
        default:return state
    }
}
export default cartReducer;