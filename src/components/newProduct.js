import React, { Component } from 'react';
import api from '../Api/Index'
import './CSS/newProduct.css'
import Navbar1 from './Navbar1';
import Product_Navbar from './Product_Navbar';
import { Button} from 'reactstrap';

class newProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Products: [],
            Product_Brand:"",
            Product_Name:"",
            Product_Price:'',
            Product_Discription:"",
            Product_Quantity:1,
            Product_Totalprice:''
        }
    }
    AddCart(id){
        debugger
        let addedItem = this.state.Products.find(item=> item._id === id)
        // this.setState({
        //   Product_Brand:addedItem.Product_Brand,
        //   Product_Name:addedItem.Product_Name,
        //   Product_Price:addedItem.Product_Price,
        //   Product_Totalprice:addedItem.Total_price,          
        // });
        const payload = {
            Product_Brand:addedItem.Product_Brand,
            Product_Name:addedItem.Product_Name,
            Product_Discription:addedItem.Product_Price,
            Product_Price:addedItem.Product_Price,
            Quantity:1,
            Total_price:addedItem.Total_price
           
          }
    //     const {  Product_Brand,Product_Name,Product_Price,Product_Quantity,Product_Totalprice } = this.state
    // const payload = { Product_Brand,Product_Name,Product_Price,Product_Quantity,Product_Totalprice }
        // debugger
        // let payload = this.state.Products.find(item=> item._id === id)
  
         api.AddCart(payload).then(res => {
            window.location.reload()
            // browserHistory.push("/nokia");
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

        let itemList = this.state.Products.map(item=>{
            return(
                <div className="card1" key={item.id}>  
                        <div className="card-content">
                        <b>Product Name:</b><span className="card-titl">{item.Product_Name}</span>
                        <br></br>
                            <p><b>Details:</b>{item.Product_Discription}</p>
                            <p><b>Price:</b> {item.Product_Price}Rs</p>
                            <Button color="primary"  onClick={this.AddCart.bind(this, item._id)}>Add to Cart</Button>
                        </div>
                 </div>
            )
            
        })

        return(
        <div>
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