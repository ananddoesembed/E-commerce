import React from 'react';
import { Route, Switch,Redirect } from 'react-router';
import './App.css';
import { auth,userProfileDodcment } from './components/firebase/firebase.utils';
import Header from './components/Header/Header';
import Homepage from './Page/HomePage/Homepage.component';
import Shop from './Page/Shop/Shop';
import InUp from './Page/Sign/InUp';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userAction'
class App extends React.Component {
  

  unSubscribeFromAuth = null; 
  
  componentDidMount(){
  this.unSubscribeFromAuth =  auth.onAuthStateChanged(async user=>{
    if(user)
    {  
      const userRef = await  userProfileDodcment(user)
      if(userRef!==void 0)
      {userRef.onSnapshot(snapShot=>{
        this.props.setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        })})
      }
    }
    else{
      this.props.setCurrentUser(user)
    }
    console.log(this.props.setCurrentUser)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/sign" render={()=>
          this.props.currentUser?<Redirect to="/" />:<InUp/>
        }/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user})=>({
  currentUser : user.currentUser
})
const mapDispatchToProps=dispatch => ({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
