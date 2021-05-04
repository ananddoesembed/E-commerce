import React from 'react'
import './CustomButtin.scss'
export default function CustomButton({children,isGoogle,isInverted,...otherProps}) {
    return (
        <button className={`${isGoogle?'isGoogle':''} custom-button ${isInverted?'isInverted':''}`} {...otherProps}>
            {children}
        </button>
    )
}
