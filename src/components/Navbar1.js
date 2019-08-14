import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './CSS/Navbar.css';

import browserHistory from '../util/browserHistory'

import api from '../Api/Index'

class Navbar1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Carts: [],
      Name: ''
    }
  }
  handleChangeInputName = async event => {
    debugger
    const Name = event.target.value
    this.setState({ Name })
  }
  Search = async () => {
    debugger
    let path = this.state.Name;
    browserHistory.push(`/${path}`);
  }
  componentDidMount = async () => {

    this.setState({ isLoading: true })

    await api.getCart().then(Carts => {
      this.setState({
        Carts: Carts.data,
        isLoading: false,
      })
    })
  }
  render() {
    var count = 0;
    const { Name } = this.state
    return (
      <div>
        {
          this.state.Carts.map(category => {
            count = count + 1;
          })}
        <Navbar className="Nav_bar Navbar" bg="primary" variant="dark">
          <Navbar.Brand className="brand" href="./Home"><img className="logo" src={require('../Image/logo.jpg')} alt="Logo image" />
          </Navbar.Brand>
          <Form onSubmit={this.Search}>
            <FormControl type="text" value={Name} onChange={this.handleChangeInputName} placeholder="Search" className=" search" />
            <Button className="search_btn" onClick={this.Search}  ><img className="search_icon" src={require('../Image/search.png')} alt="Logo image" /></Button>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="./Signup"><b>SignUp</b></Nav.Link>
              <Nav.Link href="./"><b>Login</b></Nav.Link>

              <Nav.Link className="Nav_signup" href="/Cart1"><b>Cart</b><img className="Cart" src={require('../Image/cart.png')} alt="Card image" /><b><span className="Cart_no">{count}</span></b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navbar1;