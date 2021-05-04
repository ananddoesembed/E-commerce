export const addItemsToCart = (cartItems,cartItemToAdd)=>{
    const existingItems = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id)
    
    if(existingItems){
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id?{...cartItem,quandity:cartItem.quandity+1}:cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quandity:1}];
}