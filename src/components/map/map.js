import React, { Component } from "react";
import schoolMap from "./schoolmap.png"
import axios from "axios";
import "./mapping.css"




export default class Map extends Component{
    constructor(props){
        super(props)
        this.onClickArea = this.onClickArea.bind(this)
        this.createUser = React.createRef()
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeRouteName= this.onChangeRouteName.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        
        
        this.state = {
            clicked:"",
            count:"",
            start:"",
            end:"",
            results:"",
            graph:{
                A: { B: 40, R: 40 },
                B: { D: 120, A: 40, C: 40 },
                C: { B: 20, E: 100, F: 40, K: 50, L: 80 },
                D: { R: 50, B: 120, E: 10, G: 10},
                E: { D: 10, C: 100, F: 30, G: 10},
                F: { E: 30, C: 40, K: 30},
                G: { D: 10, E: 10, H: 30, I: 30},
                H: { G: 30, I: 20, Q: 30},
                I: { H: 20, Q: 30, J: 50, G: 30},
                J: { I: 50, K: 40, O: 40},
                K: { C: 50, F: 30, J: 40, M: 30},
                L: { C: 80, M: 10},
                M: { L: 10, K: 30, N: 10},
                N: { M: 10, O: 20},
                O: { N: 20, J: 40, P:30},
                P: { O: 30},
                Q: { H: 30, I: 30},
                R: { A: 40, D: 50}
            },
            username: "",
            routeName:""

        }
    }
    onSubmit(e){
        e.preventDefault()
        const userRoute = {
            username: this.state.username,
            routeName: this.state.routeName,
            distance: this.state.results.distance,
            path: this.state.results.path
        }
        
        console.log(userRoute)
        axios.post("http://localhost:5000/map/add", userRoute)
            .then(res => console.log(res.data))
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


    async onClickArea(e){
        e.preventDefault()
        // alert(e.target.id)

        if (this.state.clicked === "yes"){
            console.log("End")
            // this.setState({end:e.target.id})
            this.setState({end: e.target.id}, function () {
                console.log(this.state.end)
                this.setState({results : findShortestPath(this.state.graph,this.state.start,this.state.end)})
                console.log(this.state.results.distance)
                this.setState({}, function(){
                    pathing(this.state.results)
                })
                
            });
        }
        else{
            console.log("Start")
            this.setState({start: e.target.id}, function () {
                console.log(this.state.start);
            });
            this.setState({clicked:"yes"})
        }
        
        

    }
    
    
    



    
    render(){
        return(
            
            <div>
                <div className="main">
                    <div className="map">
                        <img src={schoolMap} alt="" className="schoolMap"></img>
                        <svg>
                            <polygon points="374,665 419,705 452,678 410,629 428,608 405,583 354,635" id ={"A"} onClick={this.onClickArea}/>
                            <polygon points="483,522 520,463 555,482 582,434 544,407 487,377 460,424 465,434 434,494" id ={"C"} onClick={this.onClickArea}/>
                            <polygon points="328,526 345,495 366,508 353,532" id ={"R"} onClick={this.onClickArea}/>
                            <polygon points="542,278 504,340 535,358 569,294" id ={"L"} onClick={this.onClickArea}/>
                            <polygon points="534,282 490,263 505,239 549,268" id ={"M"} onClick={this.onClickArea}/>
                            <polygon points="482,166 559,208 537,249 457,205" id ={"N"} onClick={this.onClickArea}/>
                            <polygon points="422,251 456,266 428,320 397,300" id ={"K"} onClick={this.onClickArea}/>
                            <polygon points="349,438 362,419 325,392 311,414" id ={"E"} onClick={this.onClickArea}/>
                            <polygon points="300,414 352,442 330,472 283,445" id ={"D"} onClick={this.onClickArea}/>
                            <polygon points="275,239 355,279 344,304 263,259" id ={"I"} onClick={this.onClickArea}/>
                            <polygon points="367,218 394,232 371,280 339,264" id ={"J"} onClick={this.onClickArea}/>
                            <polygon points="250,296 308,195 245,160 190,263" id ={"I"} onClick={this.onClickArea}/>
                            <polygon points="261,332 228,392 125,348 168,274" id ={"H"} onClick={this.onClickArea}/>
                            <polygon points="520,476 556,498 504,587 547,610 525,651 449,604" id ={"B"} onClick={this.onClickArea}/>
                            <polygon points="416,129 473,160 458,189 399,157" id ={"O"} onClick={this.onClickArea}/>
                            <polygon points="3,235 81,293 198,143 4,0" id ={"Q"} onClick={this.onClickArea}/>
                            <polygon points="366,27 440,88 522,0 396,0" id ={"P"} onClick={this.onClickArea}/>
                            <polygon points="281,438 291,418 283,412 298,385 304,389 315,368 282,349 244,414" id ={"G"} onClick={this.onClickArea}/>
                            <polygon points="384,410 327,380 349,340 404,368" id ={"F"} onClick={this.onClickArea}/>
                            <polygon points="469,564 469,552 474,541 477,533 483,522 489,514 493,505 498,495 505,494 501,502 497,513 493,518 490,527 485,537" id="BC" visibility="hidden"/>

                        </svg>
                    </div>
                    <div className="selectingName">
                        <div className="leftDiv">
                            <div className="startDiv">
                                <h1>Start</h1>
                                <p>{this.state.start}</p>
                                
                            </div>
                            <div className="endDiv">
                                <h1>End</h1>
                                <p>{this.state.end}</p>
                            </div>
                        </div>
                        <div className="stats">
                            <h1>Stats of route</h1>
                            <h3>Distance:{this.state.results.distance}</h3>
                            <h3>Route:{this.state.results.path}</h3>
                            <h3>Save Route</h3>
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
                                    <label>Route name: </label>
                                    <input  type="text"
                                        required
                                        className="form-control"
                                        value={this.state.routeName}
                                        onChange={this.onChangeRouteName}
                                        />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create Route" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                        
                    </div>




                </div>
                
                
                
                
                
            </div>

            
        )
        
    }





}

const pathing = (results) => {
    console.log("Path function")
    console.log(results.path) 
    var resultsPath = results.path
    var totalPaths = []
    var i;
    for(i=0; i<(resultsPath.length-1); i++){ //For loop to go through the path
        //Pushes the routes connected e.g ABC = ["AB","BC"]
        totalPaths.push(resultsPath[i]+resultsPath[i+1])
        
    }
    console.log(totalPaths)
    for(i=0; i<totalPaths.length; i++){
        document.getElementById(totalPaths[i]).style.visibility = "visible"
    }

}

const shortestDistanceNode = (distances, visited) => {
	let shortest = null;
    //finds the shortest distance from the currnet node
	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

const findShortestPath = (graph, startNode, endNode) => {
	// establish object for recording distances from the start node
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

	// track paths
	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	// track nodes that have already been visited
	let visited = [];

	// find the nearest node
	let node = shortestDistanceNode(distances, visited);

	// for that node
	while (node) {
		// find its distance from the start node & its child nodes
		let distance = distances[node];
		let children = graph[node];
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				continue;
			} else {
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		// move the node to the visited set
		visited.push(node);
		// move to the nearest neighbor node
		node = shortestDistanceNode(distances, visited);
	}

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();
    
	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
        path: shortestPath,
        start: startNode,
        end: endNode,
	};
	
	console.log(results)
	return results;
};

