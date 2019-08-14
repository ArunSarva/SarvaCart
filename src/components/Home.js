import React, { Component } from 'react';
import Slider from './Slider';
import Product_Navbar from './Product_Navbar';
import Product_slider from './Product_slider';
import './CSS/Home.css'
import Footer from './Footer';
import Product from './Product';
import Navbar1 from './Navbar1';
class Home extends Component {
    render() {
        return (
            <div >
                <Navbar1 />
                <Product_Navbar />
                <Slider />
                <div className="free_space"></div>
                <Product_slider />
                <Footer />
            </div>
        );
    }
}

export default Home;