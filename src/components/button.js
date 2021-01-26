import React, { Component } from "react";
import "./style.css"

export default class Button extends Component{
    constructor(props){
        super(props)
        this.onClickArea = this.onClickArea.bind(this)
        this.state = {
            clicked:""
        }
    }
    onClickArea(e){
        e.preventDefault()
        alert("poggers")

    }
    
    
    
    render() {
        return(
            
            <div className="button1" onClick={this.onClickArea}></div>
                
            
        )
    }
}