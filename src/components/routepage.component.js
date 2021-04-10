import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

    const Route = props => (
    <tr>
      <td>{props.route.username}</td>
      <td>{props.route.routeName}</td>
      <td>{props.route.path}</td>
      <td>{props.route.distance}</td>
      
      <td>
        <Link to={"/edit/"+props.route._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRoute(props.route._id) }}>Delete</a>
      </td>
    </tr>
    )

export default class RoutePage extends Component{
    constructor(props) {
        super(props);

        this.deleteRoute = this.deleteRoute.bind(this)

        this.state = {routes: []}
    }

    componentDidMount(){
        axios.get("http://localhost:5000/map")
        .then(response => {
            this.setState({ routes : response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
    deleteRoute(id) {
        axios.delete('http://localhost:5000/map/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          routes: this.state.routes.filter(el => el._id !== id)
        })
    }
    routeList() {
        return this.state.routes.map(currentroute => {
          return <Route route={currentroute} deleteRoute={this.deleteRoute} key={currentroute._id}/>;
        })
    }



    render(){
        return(
            <div>
            <h3>Routes</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Route name</th>
                  <th>Path</th>
                  <th>Distance</th>
                  
                </tr>
              </thead>
              <tbody>
                { this.routeList() }
              </tbody>
            </table>
          </div>
        )
    }























































































    // constructor(props){
    //     super(props)
    //     //Making sure that "this" is binded to "this" and not something else
    //     this.createUser = React.createRef()
    //     this.onChangeUsername = this.onChangeUsername.bind(this);
    //     // this.onChangeRouteName = this.onChangeRouteName.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this)
        
        
    //     this.state = {
    //         username: "",
    //         routeName:"",
    //         items: [],
            
    //     }
        
    // }
    // items = []
    // onSubmit(e){
    //     e.preventDefault()
    //     const userRoute = {
    //         username: this.state.username,
    //     }
    //     console.log(userRoute)

    //     axios.post("http://localhost:5000/map/findUser", userRoute)
    //         .then(res => res.data)
    //         .then(data => {
    //             this.setState({
    //                 items: data
    //             })
    //         })
    //     this.setState({
    //         username: "",
            
            
            
    //     })
        
    // }
   
    // onChangeUsername(e) {
    //     this.setState({
    //       username: e.target.value
    //     })
    // } 
    
   
   
    // render() {
    //     return(
    //         <div>
    //             <h3>Routes</h3>
    //                 <form onSubmit={this.onSubmit}>
    //                     <div className="form-group"> 
    //                         <label>Username: </label>
    //                         <input  type="text"
    //                             required
    //                             className="form-control"
    //                             value={this.state.username}
    //                             onChange={this.onChangeUsername}
    //                             />
    //                     </div>
                        
    //                     <div className="form-group">
    //                         <input type="submit" value="Get routes " className="btn btn-primary" />
    //                     </div>
    //                 </form>
    //             <div>
    //                 <h1>{}</h1>
                    
                    
                    
                    
                    
    //             </div>         
    //         </div>
    //     )
        
    // }

}
