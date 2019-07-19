import React, { Component } from 'react';
// import { Col,Row} from 'react-bootstrap';
import { Container, Button, Modal, ModalHeader, ModalBody,ModalFooter,Row,Col } from 'reactstrap';
import './CSS/Product.css'
class product extends Component {

state = {
    visible: true,
    mobile1Open: false,
    mobile2Open: false,
    mobile3Open: false,
    mobile4Open: false,
    mobile5Open: false,
    mobile6Open: false,
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
render() {
    return (
        <Container>
            <Row>
					<Col>
            <div className="Item_button" onClick={this.mobile1.bind(this)}>
                <img className="Product_size" src={require('../Image/mobile4.jpg')} />
                </div>
                <Modal isOpen={this.state.mobile1Open}>
            <ModalHeader toggle={this.mobile1.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/mobile1.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile1.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            

                <div onClick={this.mobile2.bind(this)}>
                <img className="Product_size" src={require('../Image/redmi.jpeg')} />
                </div>
            <Modal isOpen={this.state.mobile2Open}>
            <ModalHeader toggle={this.mobile2.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/redmi.jpeg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile2.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div className="Item_button" onClick={this.mobile3.bind(this)}>
                <img className="Product_size" className="Products" src={require('../Image/mobile2.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile3Open}>
            <ModalHeader toggle={this.mobile3.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/mobile2.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile3.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            </Row>
            <Row>
                <Col>
            <div onClick={this.mobile4.bind(this)}>
                <img className="Products" src={require('../Image/mobile2.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile4Open}>
            <ModalHeader toggle={this.mobile4.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/mobile2.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile4.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div onClick={this.mobile5.bind(this)}>
                <img className="Products" src={require('../Image/mobile3.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile5Open}>
            <ModalHeader toggle={this.mobile5.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/mobile3.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile5.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            <Col>
            <div onClick={this.mobile6.bind(this)}>
                <img className="Products" src={require('../Image/mobile3.jpg')} />
                </div>
            <Modal isOpen={this.state.mobile6Open}>
            <ModalHeader toggle={this.mobile6.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            <img className="Products" src={require('../Image/mobile3.jpg')} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add to Cart</Button>
                <Button color="secondary" onClick={this.mobile6.bind(this)}>Buy now</Button>
            </ModalFooter>
            </Modal>
            </Col>
            </Row>
        </Container>
    );
}
}

export default product;