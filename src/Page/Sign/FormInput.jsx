import React from 'react'
import "./FormInput.scss"
export default function FormInput({handleChange,label,...other}) {
    return (
        <div className='group'>
            <input className="form-input" onChange={handleChange} {...other}/>
            {
                label?<label className={`${other.value.length?'shrink':''} form-input-label`}>{label}</label>:null
            }
        </div>
    )
}
