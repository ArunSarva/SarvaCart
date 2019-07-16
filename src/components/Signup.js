import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <label className="label1">Register</label>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    Last Name<br></br>
                    <input type="text" name="Sname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <br></br>
                    User Name<br></br>
                    <input type="text" name="Uname"  className="inputfiled" onChange={this.handleChange} /><br></br>
                    Password<br></br>
                    <input type="text" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br>
                    </label>
                                    
                </form>
                <button  className="Register" > Register </button>
                <button  className="Cancel" > Cancel </button>
            </div>
        );
    }
}

export default Signup;