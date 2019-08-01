import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../Action/CartAction'
import { Button } from 'reactstrap';
import Navbar1 from './Navbar1'
 class Home1 extends Component{
    
    handleClick = (id)=>{
        debugger
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div>
                    <Navbar1/>
                <div className="card" key={item.id}>
                    
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <Button onClick={()=>{this.handleClick(item.id)}}>Add Movie</Button>
                            {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span> */}
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

                </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home1)