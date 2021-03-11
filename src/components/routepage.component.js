import React, { Component } from "react";
import axios from "axios";


export default class RoutePage extends Component{
    constructor(props){
        super(props)
        //Making sure that "this" is binded to "this" and not something else
        this.createUser = React.createRef()
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        
        
        this.state = {
            username: "",
            password:""
            
        }
        
    }
    onSubmit(e){
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
           
        }
        console.log(user)

        axios.post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data))
        this.setState({
            username: "",
            password: ""
        })
        
    }
   
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    } 
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
    } 
   
   
    render() {
        return(
            <div>
                <h3>{this.state.results}</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                            <label>Username: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                />
                        </div>
                        <div className="form-group"> 
                            <label>Password: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create User" className="btn btn-primary" />
                        </div>
                    </form>
                            
            </div>
        )
        
    }

}
