import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {ReactComponent as Logo } from './crown.svg'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux'

const Header=({currentUser})=> {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
            <Logo/>
            </Link>
            <div className="options">
             <Link className='option'  to="/">Home</Link>
             <Link className='option' to="/contacts">Contacts</Link>
             {currentUser?<div className="option" onClick={()=>auth.signOut()}>SignOut</div>:<Link className='option' to="/sign">Signin</Link>}
             
             </div>
        </div>
    )
}
const mapStateToProps = state =>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header)