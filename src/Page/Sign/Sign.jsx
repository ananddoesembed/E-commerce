import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { auth,signInWithGoogle } from '../../components/firebase/firebase.utils';
import FormInput from './FormInput';
import './Sign.scss'
export default class Sign extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    submitHandler= async (e)=>{
        e.preventDefault()
        console.log(this.state)
        const {email,password} = this.state
        try {
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }
    }
    onChangeHandler=(e)=>{
    const {value,name} = e.target;
    this.setState({[name]:value})

    }
   render(){ return (
        <div className="sign-in" style={{width:'30vw'}}>
           <h1>I already have an account</h1>
           <span>Sign in with your Email and password</span>
           <form onSubmit={this.submitHandler}>
           <FormInput name="email" type="email" value={this.state.email} required handleChange={this.onChangeHandler} label="email"/>
           <FormInput name="password" type="password" value={this.state.password} required handleChange={this.onChangeHandler} label="password"/>
           <CustomButton type="submit">Submit</CustomButton>
           <CustomButton type="button" onClick={signInWithGoogle} isGoogle>Google</CustomButton>
           </form> 
        </div>
    )}
}
