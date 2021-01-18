import React, { Component } from "react";

export default class CreateMap extends Component{
    constructor(props){
        super(props)
        //Making sure that "this" is binded to "this" and not something else
        this.createMap = React.createRef()
        this.onChangeNameM = this.onChangeNameM.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            nameM:"",
            weight:"",
            users: []

            
        }
        
    }
    //Methods for getting the data that will be in the forms
    componentDidMount(){
        this.setState({
            users: ["test user"],
            username: "testuser"
        })
    }

    onChangeNameM(e){
        this.setState({
            nameM: e.target.value
        })
    }
    onChangeWeight(e){
        this.setState({
            weight: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const map = {
            nameM: this.state.nameM,
            weight: this.state.weight
        }
        console.log(map)
        
    }
    render() {
        return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Name of Map: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.nameM}
                  onChange={this.onChangeNameM}>
                  {
                    this.state.users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Weight: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.weight}
                  onChange={this.onChangeWeight}
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