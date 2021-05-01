import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import FormInput from './FormInput';
import './Sign.scss'
export default class Sign extends React.Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.setState({email:'',password:''})
        console.log(this.state.email,this.state.password)
    }
    onChangeHandler=(e)=>{
    const {value,name} = e.target;
    this.setState({[name]:value})
    console.log(this.state.email,this.state.password)

    }
   render(){ return (
        <div className="sign-in" style={{width:'30vw'}}>
           <h1>I already have an account</h1>
           <span>Sign in with your Email and password</span>
           <form onSubmit={this.submitHandler}>
           <FormInput name="email" type="email" value={this.state.email} required handleChange={this.onChangeHandler} label="email"/>
           <FormInput name="password" type="password" value={this.state.password} required handleChange={this.onChangeHandler} label="password"/>
           <CustomButton type="submit">Submit</CustomButton>
           </form> 
        </div>
    )}
}
