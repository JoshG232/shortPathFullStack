import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component{
    constructor(props){
        super(props)
        //Making sure that "this" is binded to "this" and not something else
        this.createMap = React.createRef()
        this.onLoginUsername = this.onLoginUsername.bind(this)
        this.onLoginPassword = this.onLoginPassword.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            username:"",
            password:"",
            
          }
        
    }
    
    //Methods for getting the data that will be in the forms
    
    onLoginUsername(e) {
        this.setState({
          username: e.target.value
        })
    } 
    onLoginPassword(e) {
      this.setState({
        password: e.target.value
      })
  } 
    onSubmit(e){
        e.preventDefault()
        
        const user = {
            username: this.state.username,
            password: this.state.password
           
        }
        
        axios.post("http://localhost:5000/users/login", user)
          .then(res => console.log(res.data))






















      //   const user = {
      //     username: this.state.username,
      //     password: this.state.password
      // }
      
      // console.log(user)
      // const usernameCheck = []
      // axios.get("http://localhost:5000/users/")
      //     .then(res => {
      //       if (res.data.length > 0) {
      //         this.setState({
      //           usernameCheck:res.data.map(user => user.username)
      //         })
      //       }
      //       console.log(usernameCheck)
      //       console.log(res.data.map(user => user.username))
            
            
      //     })
         
      // this.setState({
      //     username: "",
      //     password: ""
      // })
        
        
        
        
        
    }
    render() {
        return (
        <div>
          <h3>Login</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
            <label>Username: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onLoginUsername}
                  />
            </div>
            <div className="form-group"> 
              <label>Password: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onLoginPassword}
                  />
            </div>
        
    
            <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
    }
}