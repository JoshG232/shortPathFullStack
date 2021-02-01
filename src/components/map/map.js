import React, { Component } from "react";
import schoolMap from "./schoolmap.png"
import { Polyline} from 'react-shapes';
import "./mapping.css"



export default class Map extends Component{
    constructor(props){
        super(props)
        this.onClickArea = this.onClickArea.bind(this)
        this.state = {
            clicked:"",
            count:"",
            start:"",
            end:""
        }
    }
    onClickArea(e){
        e.preventDefault()

        if (this.state.clicked === "yes"){
            console.log("End")
            this.setState({end:e.target.id})
        }
        else{
            this.setState({start:e.target.id})
            this.setState({clicked:"yes"})

        }

    }
    




    render(){
        return(
            
            <div>
                <div>
                    
                    <img src={schoolMap} alt="" className="schoolMap"></img>
                    <div className = "polylines" >
                        <Polyline points='374,665 419,705 452,678 410,629 428,608 405,583 354,635' fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} id ={"1"} onClick={this.onClickArea} />
                        
                        
                        
                        
                        
                    </div>
                
                
                
                
                </div>
                
                
                
                
            </div>

            
        )
        
    }





}

