import React, { Component } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import FormInput from './FormInput'
import {auth,userProfileDodcment} from '../../components/firebase/firebase.utils'
import './Up.scss'
export default class Up extends Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassWord:''
        }
    }
    onSubmit= async(e)=>{
        e.preventDefault()
        const {displayName,email,password,confirmPassWord} = this.state
        if(password!==confirmPassWord){
            console.log('do not match')
            return
        }
        try {
           const {user} = auth.createUserWithEmailAndPassword(email,password)
           await userProfileDodcment(user,{displayName})
           this.setState({
               displayName,
               email,
               password,
               confirmPassWord
           })
        } catch (error) {
            console.log(error)
        }
    }
    onChange=(e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='signup'>
                <h2 className="title">I do not have an account</h2>
                <span>SignUp with ypur email and password</span>
                <form onSubmit={this.onSubmit}>
                <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.onChange} label='displayName' required/>
                <FormInput type='email' name='email' value={this.state.email} onChange={this.onChange} label='email' required/>
                <FormInput type='password' name='password' value={this.state.password} onChange={this.onChange} label='password' required/>
                <FormInput type='password' name='confirmPassWord' value={this.state.confirmPassWord} onChange={this.onChange} label='confirm password' required/>   
                <CustomButton type="submit">Submit</CustomButton>  
                </form>
            </div>
        )
    }
}
