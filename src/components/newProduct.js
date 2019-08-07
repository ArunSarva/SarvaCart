import React, { Component } from 'react';
import api from '../Api/Index'
import './CSS/newProduct.css'
import Navbar1 from './Navbar1';
import Product_Navbar from './Product_Navbar';
class newProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Products: [],
        }
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
        let itemList = this.state.Products.map(item=>{
            return(
                <div className="card1" key={item.id}>  
                        <div className="card-content">
                        <b>Product Name:</b><span className="card-titl">{item.Product_Name}</span>
                        <br></br>
                            <p><b>Details:</b>{item.Product_Discription}</p>
                            <p><b>Price:</b> {item.Product_Price}Rs</p>
                        </div>
                 </div>
            )
            
        })

        return(
        <div>
            <h3 >Our items</h3>
            <Navbar1/>
            <Product_Navbar/>
            <h3 className="page_head" ><b>Our items</b></h3>        
            <div className="containe">                
                <br></br>
                <div className="box1">
                    {itemList}
                </div>
            </div>
            </div>
        )
    }
    }

export default newProduct;