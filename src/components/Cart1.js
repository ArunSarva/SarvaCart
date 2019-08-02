import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../Api/Index'
import './CSS/Cart.css'
import {Button } from 'reactstrap';
import Navbar1 from './Navbar1';
import product from './Product';
import Product_Navbar from './Product_Navbar';


class Cart1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Carts: [],
            columns: [],
            isLoading: false,
            Quantitys:0
        }
    }
    add=() =>{
        this.setState({Quantitys:this.state.Quantitys+1});
    }
    sub=()=>{
        this.setState({Quantitys:this.state.Quantitys-1});
    }
    Remove_item = (id) => {
        // event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the Item ${id} permanently?`,
            )
        ) {
            api.Remove_itemById(id)
            window.location.reload()
        }
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getCart().then(Carts => {
            this.setState({
                Carts: Carts.data,
                isLoading: false,
                // Quantitys:Carts.data.Quantity
            })
            // console.log("hi",Carts.data.Quantity)
            this.state.Carts.map((item,index)=>(
                this.setState({
                    Quantitys:item.Quantity
                })
            ))
            console.log("hi",this.state.Quantitys)

        })
    }

    render(){
       
        return(
            <div>
                <Navbar1/>
                <Product_Navbar/>
                 {this.state.Carts.map((item,index)=>(
                     <div className="Cart_div" key="index">
                         <h3>Brand:{item.Product_Brand}</h3>
                         {/* id:{item._id} */}
                         Name:{item.Product_Name}<br></br>
                         Product Price:{item.Product_Price}<br></br>
                         Product Discription:{item.Product_Discription}<br></br>
                         Quantity:{item.Quantity} <Button className="Cart_btn" onClick={this.sub} >-</Button> <Button className="Cart_btn" onClick={this.add}>+</Button><br></br>
                         {this.state.Quantitys}
                         Total price:{item.Total_price}<br></br>
                         <Button className="Buy_btn" color="primary" >Buy now</Button>
                         <Button color="secondary" onClick={this.Remove_item.bind(this, item._id)} >Remove item</Button>
                         <hr></hr>
                     
                     </div>
                 )

)}
            </div>
           
        )
    }
}

export default Cart1;