import React, { Component } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Slider/>
               <h3>Home</h3>
            </div>
        );
    }
}

export default Home;