import React, { Component } from "react";
import axios from "axios";


export default class RoutePage extends Component{
    constructor(props){
        super(props)
        //Making sure that "this" is binded to "this" and not something else
        this.createUser = React.createRef()
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeRouteName = this.onChangeRouteName.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        
        
        this.state = {
            username: "",
            routeName:"",
            items: [],
            
        }
        
    }
    items = []
    onSubmit(e){
        e.preventDefault()
        const userRoute = {
            username: this.state.username,
            routeName: this.state.routeName
           
        }
        console.log(userRoute)

        axios.post("http://localhost:5000/map/findUser", userRoute)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    items: data
                })
            })
        this.setState({
            username: "",
            routeName: "",
            
            
        })
        
    }
   
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    } 
    onChangeRouteName(e) {
        this.setState({
          routeName: e.target.value
        })
    } 
   
   
    render() {
        return(
            <div>
                <h3>Routes</h3>
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
                            <input type="submit" value="Get routes " className="btn btn-primary" />
                        </div>
                    </form>
                <div>
                    <h1>{}</h1>
                    
                    
                    
                    
                    
                </div>         
            </div>
        )
        
    }

}
