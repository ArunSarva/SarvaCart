import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody,ModalFooter,Row,Col } from 'reactstrap';
import './CSS/Product.css';
import api from '../Api/Index';
import browserHistory from '../util/browserHistory'
import Product_Navbar from './Product_Navbar';
import Footer from './Footer'
import Navbar1 from './Navbar1'
class Nokia extends Component {
  
state = {
    visible: true,
    mobile1Open: false,
    mobile2Open: false,
    mobile3Open: false,
    mobile4Open: false,
    mobile5Open: false,
    mobile6Open: false,
    Product_Brand:'',
    Product_Name:'',
    Product_Discription:'',
    Product_Price:'',
    Quantity:'',
    Total_price:''
   
  }
mobile1() {
    this.setState({
      mobile1Open: ! this.state.mobile1Open
    });
  }
  mobile2() {
    this.setState({
        mobile2Open: ! this.state.mobile2Open
    });
  }
  mobile3() {
    this.setState({
        mobile3Open: ! this.state.mobile3Open
    });
  }
  mobile4() {
    this.setState({
        mobile4Open: ! this.state.mobile4Open
    });
  }
  mobile5() {
    this.setState({
        mobile5Open: ! this.state.mobile5Open
    });
  }
  mobile6() {
    this.setState({
        mobile6Open: ! this.state.mobile6Open
    });
  }
  AddNokia1= async () => {
debugger
const payload = {
    Product_Brand:"Nokia",
    Product_Name:'Nokia1',
    Product_Discription:'This is a mobile1 with 4gb RAM 64Gb ROM Black in colour',
    Product_Price:14000,
    Quantity:1,
    Total_price:14000
   
  }
  console.log(payload)
    await api.AddCart(payload).then(res => {
        window.alert(`Add to cart successfully`)		
        browserHistory.push("/nokia");
    })
  }
  AddNokia2= async () => {
    debugger
    const payload = {
        Product_Brand:"Nokia",
        Product_Name:'Nokia2',
        Product_Discription:'This is a mobile1 with 4gb RAM 64Gb ROM gray in colour',
        Product_Price:15000,
        Quantity:1,
        Total_price:15000
       
      }
      console.log(payload)
        await api.AddCart(payload).then(res => {
            window.alert(`Add to cart successfully`)		
            browserHistory.push("/nokia");
        })
      }
      AddNokia3= async () => {
        debugger
        const payload = {
            Product_Brand:"Nokia",
            Product_Name:'Nokia3',
            Product_Discription:'This is a mobile1 with 4gb RAM 64Gb ROM gray in colour',
            Product_Price:13500,
            Quantity:1,
            Total_price:13500
           
          }
          console.log(payload)
            await api.AddCart(payload).then(res => {
                window.alert(`Add to cart successfully`)		
                browserHistory.push("/nokia");
            })
          }
          AddNokia4= async () => {
            debugger
            const payload = {
                Product_Brand:"Nokia",
                Product_Name:'Nokia4',
                Product_Discription:'This is a mobile1 with 4gb RAM 64Gb ROM gray in colour',
                Product_Price:14500,
                Quantity:1,
                Total_price:14500
               
              }
              console.log(payload)
                await api.AddCart(payload).then(res => {
                    window.alert(`Add to cart successfully`)		
                    browserHistory.push("/nokia");
                })
              }
render() {
    return (
        <div>
            <Navbar1/>
            <Product_Navbar/>  
            <h1><b>Nokia</b>    </h1>  
        <Container>
            <Row className="container_row">
					<Col className="container_col">
            <div className="Item_button" onClick={this.mobile1.bind(this)}>
                
                <img className="Product_size" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} />
                </div>
                <Modal isOpen={this.state.mobile1Open}>
            <ModalHeader toggle={this.mobile1.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            {/* <div className="card"> */}
                        <div className="card-image ">
                        <img className="Product" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} />
                            {/* <span className="card-title"><b>Nokia 1</b></span> */}
                        </div>

                        <div className="card-content discription">
                        <p className="card-title"><b>Nokia 1</b></p>
                            <p>
                                <b>Product details</b>
                            <ul>
                                <li>16MP+5MP rear camera | 16MP front facing camera</li>
                                <li>Memory Storage and SIM: 6GB RAM | 64GB internal memory | Expandable to 400 GB |Dual SIM dual-standby (4G+4G)
                                </li>
                                <li>Android v8 Oreo operating system with Qualcomm Snapdragon SD 636 quad core processor
                                </li>
                                <li>3060mAH lithium-ion battery</li>
                                <li>Box includes: Charger and Data cable</li>
                            </ul>
                                
</p>
                            <p><b>Price: 14,000$</b></p>
                        </div>
                 {/* </div> */}
            
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.AddNokia1}>Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile1.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            

                <div onClick={this.mobile2.bind(this)}>
                <img className="Product_size" src={require('../Image/Mobiles/Nokia/nokia2.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile2Open}>
            <ModalHeader toggle={this.mobile2.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <div className="card-image ">
                <img className="Product" src={require('../Image/Mobiles/Nokia/nokia2.jpg')} />
                    {/* <span className="card-title"><b>Nokia 1</b></span> */}
                </div>

                <div className="card-content discription">
                <p className="card-title"><b>Nokia 2</b></p>
                    <p>This is a mobile1 with 4gb RAM 64Gb ROM gray in colour</p>
                    <p><b>Price: 15,000$</b></p>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.AddNokia2}>Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile2.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div onClick={this.mobile3.bind(this)}>
                <img className="Product_size" src={require('../Image/Mobiles/Nokia/nokia3.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile3Open}>
            <ModalHeader toggle={this.mobile3.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <div className="card-image ">
                <img className="Product" src={require('../Image/Mobiles/Nokia/nokia3.jpg')} />
                    {/* <span className="card-title"><b>Nokia 1</b></span> */}
                </div>

                <div className="card-content discription">
                <p className="card-title"><b>Nokia 3</b></p>
                    <p>This is a mobile1 with 4gb RAM 64Gb ROM gray in colour</p>
                    <p><b>Price: 13,500$</b></p>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.AddNokia3}>Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile3.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            </Row>
            <br></br>
            <Row className="container_row">
                <Col>
            <div onClick={this.mobile4.bind(this)}>
                <img className="Product_size" src={require('../Image/Mobiles/Nokia/nokia4.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile4Open}>
            <ModalHeader toggle={this.mobile4.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <div className="card-image ">
                <img className="Product" src={require('../Image/Mobiles/Nokia/nokia4.jpg')} />
                    {/* <span className="card-title"><b>Nokia 1</b></span> */}
                </div>

                <div className="card-content discription">
                <p className="card-title"><b>Nokia 2</b></p>
                    <p>This is a mobile1 with 2gb RAM 64Gb ROM gray in colour</p>
                    <p><b>Price: 15,500$</b></p>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.AddNokia4}>Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile4.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div onClick={this.mobile5.bind(this)}>
                <img className="Product_size" src={require('../Image/Mobiles/Nokia/nokia5.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile5Open}>
            <ModalHeader toggle={this.mobile5.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <div className="card-image ">
                <img className="Product" src={require('../Image/Mobiles/Nokia/nokia5.jpg')} />
                    {/* <span className="card-title"><b>Nokia 1</b></span> */}
                </div>

                <div className="card-content discription">
                <p className="card-title"><b>Nokia 5</b></p>
                    <p>This is a mobile1 with 4gb RAM 64Gb ROM gray in colour</p>
                    <p><b>Price: 15000$</b></p>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile5.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div onClick={this.mobile6.bind(this)}>
                <img className="Product_size" src={require('../Image/mobile3.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile6Open}>
            <ModalHeader toggle={this.mobile6.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Product" src={require('../Image/mobile3.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile6.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            </Row>
        </Container>
        <Footer/>
        </div>
    );
}
}

export default Nokia;