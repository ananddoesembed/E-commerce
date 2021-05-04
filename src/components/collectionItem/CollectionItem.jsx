import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/CartActions'
import CustomButton from '../CustomButton/CustomButton'
import './CollectionItem.scss'
function CollectionItem({id,name,imageUrl,price,addItem}) {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton isInverted onClick={()=>addItem({id,name,imageUrl,price})}> ADD </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem:(item)=>dispatch(addItem(item))
})



export default connect(null,mapDispatchToProps)(CollectionItem)