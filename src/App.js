import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import { Button,Nav,Form,Navbar,FormControl } from 'react-bootstrap';
// import Register from './components/Register';
// import Login from './components/Login';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Signup from './components/Signup';
import Login from './components/Login';
// import modal from './components/modal';
import Product_Navbar from './components/Product_Navbar';
import Product from './components/Product';
import ItemContainer from './components/ItemContainer';
// import browserHistory from "../util/browserHistory"


function App() {
  return (
    <div className="App">
        <div>
        
        </div>
        <Navbar1/>
        {/* <Product_Navbar/> */}
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/product_navbar" component={Product_Navbar}></Route>
            <Route exact path="/pro" component={Product}></Route>
            <Route exact path="/item" component={ItemContainer}></Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
