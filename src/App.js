import './App.css';
import Header from './Header/Header';
import Home from './Home/Home'
import Checkout from './checkout/Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login/Login';


function App() {
  return (
    <Router>
    <Switch>
      

      <Route path='/checkout'>
        <Header />
        <Checkout />
      
        
      </Route>

      <Route path='/login'>
        <Header />
        <Login />
        
      </Route>

      <Route path='/'>
        <Header />
        <Home />
      
      </Route>

      

    </Switch>
  </Router>
  );
}

export default App;
