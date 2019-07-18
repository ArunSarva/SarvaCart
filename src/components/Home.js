import React, { Component } from 'react';
// import Navbar from './Navbar1';
import Slider from './Slider';
// import { Button,Modal } from 'react-bootstrap';
import Product_Navbar from './Product_Navbar';
// import ItemContainer from './ItemContainer';
import Product_slider from './Product_slider';
import './CSS/Home.css'
import Footer from './Footer';
import product from './product';
class Home extends Component {
    render() {
        return (
            <div >
                <Product_Navbar/>
                <Slider/>
                {/* <ItemContainer/> */}
                <div className ="free_space"></div>
                <Product_slider/>
                <product/>
                <Footer/>
            </div>
        );
    }
}

export default Home;