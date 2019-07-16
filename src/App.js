import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
// import browserHistory from "../util/browserHistory"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            {/* <Route exact path="/Login" component={Login}></Route> */}
            {/* <Route exact path="/Home" component={Info}></Route> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
