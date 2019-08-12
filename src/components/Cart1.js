import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../Api/Index'
import './CSS/Cart.css'
import Navbar1 from './Navbar1';
import product from './Product';
import Product_Navbar from './Product_Navbar';
import Footer from './Footer';
import { Button, Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap';
import { Form } from 'react-bootstrap';
  


class Cart1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Carts: [],
            columns: [],
            isLoading: false,
            Quantitys:0,
            visible: true,
            mobile1Open: false,
            id:'',
            Product_Brand:"",
            Product_Name:"",
            Product_Price:'',
            Product_Quantity:"",
            Product_Totalprice:'',
            Address:'',
            Address_message:""

        }
    }
    PlaceOrder = async () => {
        debugger
    const {  Product_Brand,Product_Name,Product_Price,Product_Quantity,Product_Totalprice,Address } = this.state
    const payload1 = { Product_Brand,Product_Name,Product_Price,Product_Quantity,Product_Totalprice,Address }
    debugger;
    let a=0;
        if(!this.state.Address)
            {
                a=1;
                const Address_message = "Address is empty"
                this.setState({ Address_message })
            } 
        if(a==0){
            
             api.PlaceOrder(payload1).then(res => {

                // window.location.reload()
                 debugger              
                     this.setState({
                        Product_Brand:"",
                        Product_Name:"",
                        Product_Price:'',
                        Product_Quantity:"",
                        Product_Totalprice:'',
                        Address:'',
                        Address_message:""
                    })
        
                })
                debugger
                let addedItem = this.state.Carts.find(item=> item._id === this.state.id)
                api.Remove_itemById(this.state.id)
                window.location.reload()
             }
        }

    handleChangeInputAddress = async event => {
        const Address = event.target.value
        this.setState({ Address })
}

    close(){
        debugger
        this.setState({
            mobile1Open: ! this.state.mobile1Open
        });
    }
    Buy_now(id) {
        debugger
        let addedItem = this.state.Carts.find(item=> item._id === id)
        this.setState({
                      
          id:addedItem._id,
          Product_Brand:addedItem.Product_Brand,
          Product_Name:addedItem.Product_Name,
          Product_Price:addedItem.Product_Price,
          Product_Quantity:addedItem.Quantity,
          Product_Totalprice:addedItem.Total_price,
          mobile1Open: ! this.state.mobile1Open
          
        });
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
        debugger
        this.setState({ isLoading: true })

        await api.getCart().then(Carts => {
            this.setState({
                Carts: Carts.data,
                isLoading: false,
            })
        })
    }

    render(){
       
        const { Address } = this.state
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
                         Quantity: <Button className="Cart_btn" onClick={this.sub.bind(this, item._id)} >-</Button>{item.Quantity} <Button className="Cart_btn" onClick={this.add.bind(this, item._id,item.Quantity)}>+</Button><br></br>
                         Total price:{item.Total_price}<br></br>
                         <Button className="Buy_btn" color="primary" onClick={this.Buy_now.bind(this, item._id)} >Buy now</Button>
                         <Button color="secondary" onClick={this.Remove_item.bind(this, item._id)} >Remove item</Button>
                         <hr></hr>
                     
                     </div>
                 )

)}

            <Modal className="modal-dialog1" isOpen={this.state.mobile1Open}>
            <ModalHeader toggle={this.close.bind(this)}>Mobile phone</ModalHeader>
            <ModalBody>
            {/* <img className="Product" src={require('../Image/mobile3.jpg')} /> */}
            {/* <h3>Brand:{this.state.Product_Brand}</h3> */}
            Name:{this.state.Product_Name}<br></br>
            Product Price:{this.state.Product_Price}<br></br>
            Quantity: {this.state.Product_Quantity} <br></br>
            Total price:{this.state.Product_Totalprice}<br></br>
            <Form>
            <Form.Group controlId="Discription">
                <Form.Control type="text" value= {Address} onChange={this.handleChangeInputAddress} placeholder="Address" />
                <span>{this.state.Address_message}</span>
            </Form.Group>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"  onClick={this.PlaceOrder}>Place an order</Button>
                <Button color="secondary" onClick={this.close.bind(this)}>Back</Button>
            </ModalFooter>
            </Modal>
            <Footer/>
            </div>
           
        )
    }
}

export default Cart1;