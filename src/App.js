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
import Admin_Home from './components/Admin_Home';
import Nokia from './components/Nokia';
import Honor from './components/Honor';
import Samsung from './components/Samsung';
import Oneplus from './components/Oneplus';
import Oppo from './components/Oppo';
import Addproduct from './components/Addproduct';
import Home1 from './components/Home1';
import Cart1 from './components/Cart1';
// import Form from 'react-bootstrap/FormControl';
// import Form from './components/Form'
// import Create from './components/Create';
// import browserHistory from "../util/browserHistory"


function App() {
  return (
    <div className="App">
        <div>
        
        </div>
        {/* <Navbar1/> */}
        {/* <Product_Navbar/> */}
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/product_navbar" component={Product_Navbar}></Route>
            <Route exact path="/pro" component={Product}></Route>
            <Route exact path="/item" component={ItemContainer}></Route>
            <Route exact path="/Oppo" component={Oppo}></Route>
            <Route exact path="/Samsung" component={Samsung}></Route>
            <Route exact path="/Nokia" component={Nokia}></Route>
            <Route exact path="/Oneplus" component={Oneplus}></Route>
            <Route exact path="/Honor" component={Honor}></Route>
            <Route exact path="/Cart1" component={Cart1}></Route>
            <Route exact path="/add" component={Addproduct}></Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
