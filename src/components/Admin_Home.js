import React, { Component } from 'react';
import Admin_navBar from './Admin_navBar';
import { Button } from 'react-bootstrap';

class Admin_Home extends Component {
    render() {
        return (
            <div>
                <Admin_navBar/>
                <Button color="primary">view order</Button>
                <Button color="primary">Add item</Button>
            </div>
        );
    }
}

export default Admin_Home;