import React, { Component } from 'react';
import api from '../Api/Index'
import './CSS/newProduct.css'
import Navbar1 from './Navbar1';
import Product_Navbar from './Product_Navbar';
import { Button } from 'reactstrap';
import Footer from './Footer';

class newProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Products: [],
            Product_Brand: "",
            Product_Name: "",
            Product_Price: '',
            Product_Discription: "",
            Product_Quantity: 1,
            Product_Totalprice: ''
        }
    }
    AddCart(id) {
        debugger
        let addedItem = this.state.Products.find(item => item._id === id)
        const payload = {
            Product_Brand: addedItem.Product_Brand,
            Product_Name: addedItem.Product_Name,
            Product_Discription: addedItem.Product_Discription,
            Product_Price: addedItem.Product_Price,
            Quantity: 1,
            Total_price: addedItem.Product_Price

        }
        api.AddCart(payload).then(res => {
            window.location.reload()
        })
    }


    componentDidMount = async () => {
        this.setState({ isLoading: true })

        api.GetProduct().then(Products => {
            this.setState({
                Products: Products.data,
                isLoading: false,
            })

        })
    }
    render() {

        let itemList = this.state.Products.map(item => {
            return (
                <div className="card1" key={item.id}>
                    <div className="card-content">
                        <b>Product Name:</b><span className="card-titl">{item.Product_Name}</span>
                        <br></br>
                        <br></br>
                        <p><b>Details:</b>{item.Product_Discription}</p>
                        <p><b>Price:</b> <b>{item.Product_Price}</b>Rs</p>
                        <Button color="primary" onClick={this.AddCart.bind(this, item._id)}>Add to Cart</Button>
                    </div>
                </div>
            )

        })

        return (
            <div>
                <Navbar1 />
                <Product_Navbar />
                <h3 className="page_head" ><b>Our items</b></h3>
                <div className="containe">
                    <br></br>
                    <div className="box1">
                        {itemList}

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default newProduct;