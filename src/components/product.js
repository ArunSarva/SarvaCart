import React, { Component } from 'react';
import { Col,Row} from 'react-bootstrap';

class product extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/redmi.jpeg')} alt="Card image"  />
                    <p>
                        <h4>Price:15,000Rs</h4>
                        Mobile
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/m2.jpeg')} alt="Card image"  />
                    <p>
                        <h4>Price:14,000Rs</h4>
                        Mobile
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/mobile1.jpg')} alt="Card image"  />
                    <p>
                        <h4>Price:1,000Rs</h4>
                        Shoe
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/mobile2.jpg')} alt="Card image"  />
                    {/* </div> */}
                    <p>
                        <h4>Price:1,400Rs</h4>
                        Watch
                    </p>
                    
                    </Col>
                    <Col className="Products">
                        <img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
                    </Col>
                    
                </Row>
                <Row>
                <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/redmi.jpeg')} alt="Card image"  />
                    <p>
                        <h4>Price:15,000Rs</h4>
                        Mobile
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/m2.jpeg')} alt="Card image"  />
                    <p>
                        <h4>Price:14,000Rs</h4>
                        Mobile
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/mobile1.jpg')} alt="Card image"  />
                    <p>
                        <h4>Price:1,000Rs</h4>
                        Shoe
                    </p>
                    {/* </div> */}
                    
                    </Col>
                    <Col className="Products">
                    {/* <div > */}
                    <img className="Products" src={require('../Image/mobile2.jpg')} alt="Card image"  />
                    {/* </div> */}
                    <p>
                        <h4>Price:1,400Rs</h4>
                        Watch
                    </p>
                    
                    </Col>
                    <Col className="Products">
                        <img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
                    </Col>
                    
                </Row>
                            
            </div>
        );
    }
}

export default product;