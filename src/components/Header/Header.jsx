import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {ReactComponent as Logo } from './crown.svg'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'

const Header=({currentUser,toggleCart})=> {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
            <Logo/>
            </Link>
            <div className="options">
             <Link className='option'  to="/">Home</Link>
             <Link className='option' to="/contacts">Contacts</Link>
             {currentUser?<div className="option" onClick={()=>auth.signOut()}>SignOut</div>:<Link className='option' to="/sign">Signin</Link>}
             <CartIcon/>
             </div>
             {toggleCart?<CartDropDown/>:null}
        </div>
    )
}
const mapStateToProps = state =>({
    currentUser:state.user.currentUser,
    toggleCart:state.cart.toggleCart
})

export default connect(mapStateToProps)(Header)