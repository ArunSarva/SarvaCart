import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import './CSS/Product.css';
import Product_Navbar from './Product_Navbar';
import Footer from './Footer'
import Navbar1 from './Navbar1'
class Oneplus extends Component {

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
			mobile1Open: !this.state.mobile1Open
		});
	}
	mobile2() {
		this.setState({
			mobile2Open: !this.state.mobile2Open
		});
	}
	mobile3() {
		this.setState({
			mobile3Open: !this.state.mobile3Open
		});
	}
	mobile4() {
		this.setState({
			mobile4Open: !this.state.mobile4Open
		});
	}
	mobile5() {
		this.setState({
			mobile5Open: !this.state.mobile5Open
		});
	}
	mobile6() {
		this.setState({
			mobile6Open: !this.state.mobile6Open
		});
	}
	render() {
		return (
			<div>
				<Navbar1 />
				<Product_Navbar />
				<h1>    <b>Oneplus</b>    </h1>
				<Container>
					<Row className="container_row">
						<Col className="container_col">
							<div className="Item_button" onClick={this.mobile1.bind(this)}>
								<img className="Product_size" src={require('../Image/Mobiles/Oneplus/One1.jpg')} />
							</div>
							<Modal isOpen={this.state.mobile1Open}>
								<ModalHeader toggle={this.mobile1.bind(this)}>Mobile phone</ModalHeader>
								<ModalBody>
									<img className="Products" src={require('../Image/Mobiles/Oneplus/One1.jpg')} />
								</ModalBody>
								<ModalFooter>
									<Button color="primary">Add to Cart</Button>
									<Button color="secondary" onClick={this.mobile1.bind(this)}>Buy now</Button>
								</ModalFooter>
							</Modal>
						</Col>
						<Col>


							<div onClick={this.mobile2.bind(this)}>
								<img className="Product_size" src={require('../Image/Mobiles/Oneplus/One2.jpg')} />
							</div>
							<Modal isOpen={this.state.mobile2Open}>
								<ModalHeader toggle={this.mobile2.bind(this)}>Mobile phone</ModalHeader>
								<ModalBody>
									<img className="Products" src={require('../Image/Mobiles/Oneplus/One2.jpg')} />
								</ModalBody>
								<ModalFooter>
									<Button color="primary">Add to Cart</Button>
									<Button color="secondary" onClick={this.mobile2.bind(this)}>Buy now</Button>
								</ModalFooter>
							</Modal>
						</Col>
						<Col>
							<div onClick={this.mobile3.bind(this)}>
								<img className="Product_size" src={require('../Image/Mobiles/Oneplus/One3.jpg')} />
							</div>
							<Modal isOpen={this.state.mobile3Open}>
								<ModalHeader toggle={this.mobile3.bind(this)}>Mobile phone</ModalHeader>
								<ModalBody>
									<img className="Products" src={require('../Image/Mobiles/Oneplus/One3.jpg')} />
								</ModalBody>
								<ModalFooter>
									<Button color="primary">Add to Cart</Button>
									<Button color="secondary" onClick={this.mobile3.bind(this)}>Buy now</Button>
								</ModalFooter>
							</Modal>
						</Col>
					</Row>
					<br></br>
					<Row className="container_row">
						<Col>
							<div onClick={this.mobile4.bind(this)}>
								<img className="Product_size" src={require('../Image/Mobiles/Oneplus/One4.jpg')} />
							</div>
							<Modal isOpen={this.state.mobile4Open}>
								<ModalHeader toggle={this.mobile4.bind(this)}>Mobile phone</ModalHeader>
								<ModalBody>
									<img className="Products" src={require('../Image/Mobiles/Oneplus/One4.jpg')} />
								</ModalBody>
								<ModalFooter>
									<Button color="primary">Add to Cart</Button>
									<Button color="secondary" onClick={this.mobile4.bind(this)}>Buy now</Button>
								</ModalFooter>
							</Modal>
						</Col>
						<Col>
							<div onClick={this.mobile5.bind(this)}>
								<img className="Product_size" src={require('../Image/Mobiles/Oneplus/One5.jpg')} />
							</div>
							<Modal isOpen={this.state.mobile5Open}>
								<ModalHeader toggle={this.mobile5.bind(this)}>Mobile phone</ModalHeader>
								<ModalBody>
									<img className="Products" src={require('../Image/Mobiles/Oneplus/One5.jpg')} />
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
				<Footer />
			</div>
		);
	}
}

export default Oneplus;