import React from 'react'
import './CustomButtin.scss'
export default function CustomButton({children,isGoogle,...otherProps}) {
    return (
        <button className={`${isGoogle?'isGoogle':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
