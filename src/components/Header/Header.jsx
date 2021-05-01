import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {ReactComponent as Logo } from './crown.svg'
export default function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
            <Logo/>
            </Link>
            <div className="options">
             <Link className='option'  to="/">Home</Link>
             <Link className='option' to="/contacts">Contacts</Link>
             <Link className='option' to="/signIn">Signin</Link>
             </div>
        </div>
    )
}
