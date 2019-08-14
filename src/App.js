import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Signup from './components/Signup';
import Login from './components/Login';
import Product_Navbar from './components/Product_Navbar';
import Product from './components/Product';
import ItemContainer from './components/ItemContainer';
import Admin_Home from './components/Admin/Admin_Home';
import Nokia from './components/Nokia';
import Honor from './components/Honor';
import Samsung from './components/Samsung';
import Oneplus from './components/Oneplus';
import Oppo from './components/Oppo';
import Addproduct from './components/Admin/Addproduct';
import Cart1 from './components/Cart1';
import newProduct from './components/newProduct';
import Order from './components/Order';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
        <Redirect to={{ pathname: '/', state: { from: props.location }, }} />)
    )}
  />
);
function App() {
  return (
    <div className="App">
      <div>

      </div>
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <PrivateRoute exact path="/AHome" component={Admin_Home}></PrivateRoute>
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
          <PrivateRoute exact path="/add" component={Addproduct}></PrivateRoute>
          <Route exact path="/product" component={newProduct}></Route>
          <PrivateRoute exact path="/order" component={Order}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
