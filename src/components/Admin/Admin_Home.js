import React, { Component } from 'react';
import Admin_navBar from './Admin_navBar';
import './CSS/Admin_home.css'
import Footer from '../Footer';

class Admin_Home extends Component {
    render() {
        return (
            <div>
                <Admin_navBar />
                <div className="admin_home">

                </div>
                <Footer />
            </div>
        );
    }
}

export default Admin_Home;