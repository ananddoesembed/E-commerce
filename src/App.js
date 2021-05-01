import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './Page/HomePage/Homepage.component';
import Shop from './Page/Shop/Shop';
import Sign from './Page/Sign/Sign';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={Shop}/>
      <Route exact path="/signIn" component={Sign}/>
      </Switch>
    </div>
  );
}

export default App;
