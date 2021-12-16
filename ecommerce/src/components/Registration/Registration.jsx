import React, { Component } from 'react';
import'./Registration.css'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            phonenumber: ''
         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phonenumber: this.state.phonenumber
        }
        this.props.userRegister(user);
        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            phonenumber: ''
        });
    }

    render() { 
        return ( 
            <div className="registration">
                <form onSubmit = {this.handleSubmit}>
                    <table>
                    <tr>
                        <td><label>First Name</label>
                        <input type = 'text' name = 'firstname' onChange={this.handleChange} value= {this.state.firstname}/></td>
                        <td><label>Last Name</label>
                        <input type = 'text' name = 'lastname' onChange={this.handleChange} value= {this.state.lastname}/>
                        </td>
                    </tr>
                    <tr><td>   
                        <label>Username</label>
                        <input type = 'text' name = 'username' onChange={this.handleChange} value= {this.state.username}/>
                        </td><td>
                        <label>Password</label>
                        <input type = 'text' name = 'password' onChange={this.handleChange} value= {this.state.password}/>
                        </td>
                    </tr>
                    <tr><td>
                        <label>Email</label>
                        <input type = 'text' name = 'email' onChange={this.handleChange} value= {this.state.email}/>
                        </td><td>
                        <label>Phone Number</label>
                        <input type = 'text' name = 'phonenumber' onChange={this.handleChange} value= {this.state.phonenumber}/>
                        </td>
                    </tr>
                    <button type="submit">Submit</button>
                    </table>
                </form>
            </div>
         );
    }
}
 
export default Registration;