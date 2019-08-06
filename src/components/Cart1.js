import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../Api/Index'
import './CSS/Cart.css'
import {Button } from 'reactstrap';
import Navbar1 from './Navbar1';
import product from './Product';
import Product_Navbar from './Product_Navbar';
import Footer from './Footer';


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
    add=(id) =>{
        let addedItem = this.state.Carts.find(item=> item._id === id)
        addedItem.Quantity += 1
        let newTotal = addedItem.Total_price + addedItem.Product_Price
        addedItem.Total_price=newTotal
             api.updateCart(id,addedItem).then(res => {
                    window.location.reload()
                    
                })
    }
    sub=(id)=>{
        let addedItem = this.state.Carts.find(item=> item._id === id)
        if(addedItem.Quantity===1){
            if (
                window.confirm(
                    `Do you want to remove this product "${addedItem.Product_Name}" permanently?`,
                )
            ) {
                api.Remove_itemById(id)
                window.location.reload()
            }
            
        }        
        
        else{
        
        addedItem.Quantity -= 1
        let newTotal = addedItem.Total_price - addedItem.Product_Price
        addedItem.Total_price=newTotal
             api.updateCart(id,addedItem).then(res => {
                    window.location.reload()
                    
                })
            }
            }

    Remove_item = (id) => {
        let addedItem = this.state.Carts.find(item=> item._id === id)
        if (
            window.confirm(
                `Do you want to remove this product "${addedItem.Product_Name}" permanently?`,
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
                         Quantity: <Button className="Cart_btn" onClick={this.sub.bind(this, item._id,item.Quantity)} >-</Button>{item.Quantity} <Button className="Cart_btn" onClick={this.add.bind(this, item._id,item.Quantity)}>+</Button><br></br>
                         Total price:{item.Total_price}<br></br>
                         <Button className="Buy_btn" color="primary" >Buy now</Button>
                         <Button color="secondary" onClick={this.Remove_item.bind(this, item._id)} >Remove item</Button>
                         <hr></hr>
                     
                     </div>
                 )

)}
            <Footer/>
            </div>
           
        )
    }
}

export default Cart1;