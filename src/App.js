import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import MapList from "./components/map-list.component";
import EditUser from "./components/edit-user.component";
import LoginUser from "./components/login-user.component";
import CreateUser from "./components/create-user.component";
import RoutePage from "./components/routepage.component";


function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
      <br/>
      <Route path="/" exact component={MapList} />
      <Route path="/route" exact component={RoutePage} />

      <Route path="/edit/:id" component={EditUser} />
      <Route path="/login" component={LoginUser} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
    
  );
}

export default App;
