import React, { Component } from 'react';
import api from '../Api/Index'
import { Button } from 'reactstrap';
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
		let addedItem = this.state.Order.find(item => item._id === id)
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

				<Admin_navBar />
				<div>
					{this.state.Order.map((item, index) => (
						<div className="Cart_div" key="index">
							<h3>Brand:{item.Product_Brand}</h3>
							<b>Name:</b>{item.Product_Name}<br></br>
							<b> Product Price:</b>{item.Product_Price}<br></br>
							<b>Quantity:</b> {item.Quantity}<br></br>
							<b>Total price:</b>{item.Total_price}<br></br>
							<b> Address:</b>{item.Address}<br></br>
							<Button className="Buy_btn" color="primary" onClick={this.Remove_item.bind(this, item._id)} >Deliver The Product</Button>
							<hr></hr>

						</div>
					)

					)}
				</div>
				<div>            <Footer />
				</div>


			</div>
		);
	}
}

export default Order;