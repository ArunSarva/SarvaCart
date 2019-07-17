import React, { Component } from 'react';
import Navbar from './Navbar1';
import Slider from './Slider';
import { Button,Modal } from 'react-bootstrap';
import Product_Navbar from './Product_Navbar';
import ItemContainer from './ItemContainer';
import Product_slider from './Product_slider';
class Home extends Component {
    render() {
        return (
            <div >
                <Product_Navbar/>
                <Slider/>
                <ItemContainer/>
                <Product_slider/>
               <h3>Home</h3>
            </div>
        );
    }
}

export default Home;