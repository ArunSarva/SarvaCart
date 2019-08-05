import React, { Component } from 'react';

class newProduct extends Component {
    render() {
        let itemList = this.state.Carts.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            {/* <img src={item.img} alt={item.title}/> */}
                            <span className="card-title">{item.Product_Name}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.Product_Discription}</p>
                            <p><b>Price: {item.Product_Price}$</b></p>
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

export default newProduct;