import React, { Component } from 'react';
import { connect} from "react-redux";
import './CSS/Login.css'

class Login extends Component {
	render() {
		return (
			<div>
				<div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
				<h1>{this.props.Successmessage}</h1>
						<label>
								{this.props.Successmessage}
						</label>
				</div>
				<h2>Login</h2>
				<form className ="login_form">
						<label>
						User Name<br></br>
						<input type="text" className="inputfiled" onChange={this.handleChange} /><br></br>
						Password<br></br>
						<input type="email" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br> 
						</label><br></br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
				</form>
				<button  className="Register"> Login </button>
				<button  className="Cancel"> Register </button>
				
			</div>
		);
	}
}
    export default Login;