import React, { Component } from 'react';
import api from '../Api/Index'
// import '../App.css'
import {Button } from 'reactstrap';
import Admin_navBar from './Admin/Admin_navBar';
import Footer from './Footer';
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Order: [],
            columns: [],
            isLoading: false
        }
    }
    componentDidMount = async () => {
        debugger
        this.setState({ isLoading: true })

        await api.Getorder().then(Order => {
            this.setState({
                Order: Order.data,
                isLoading: false
            })

        })
    }
    Remove_item = (id) => {
        let addedItem = this.state.Order.find(item=> item._id === id)
        if (
            window.confirm(
                `Do you want Deliver "${addedItem.Product_Name}" to the customer `,
            )
        ) {
            api.Deliver(id)
            window.location.reload()
        }
    }

    render() {
        return (
            <div className='orderbody'>
                 
                 <Admin_navBar/>
                 <div>
                 {/* <div className="admin_home"> */}
                    
                
                 {this.state.Order.map((item,index)=>(
                     <div className="Cart_div" key="index">
                         <h3>Brand:{item.Product_Brand}</h3>
                         {/* id:{item._id} */}
                         Name:{item.Product_Name}<br></br>
                         Product Price:{item.Product_Price}<br></br>
                         Quantity: {item.Quantity}<br></br>
                         Total price:{item.Total_price}<br></br>
                         Address:{item.Address}<br></br>
                         <Button className="Buy_btn" color="primary" onClick={this.Remove_item.bind(this, item._id)} >Deliver The Product</Button>
                         <hr></hr>
                     
                     </div>
                 )

                )}
                {/* </div> */}
                </div>
                <div>            <Footer/>
                </div>
                

            </div>
        );
    }
}

export default Order;