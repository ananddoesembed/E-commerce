import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './preview.scss'
export default function Preview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item,idx)=>idx<4).map(item=><CollectionItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}
