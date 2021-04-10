//Router is a function that allows us to create paths for client requests
const router = require("express").Router();
let Map = require("../models/map.model")

//A GET request that gets the map inside of the database and returns them
router.route("/").get((req,res) => {
    Map.find()
        .then(maps => res.json(maps))
        .catch(err => res.status(400).json("Error: " + err))
})
//At /add is a POST request that can add the name of the map and the weight
router.route("/add").post((req,res) => {
    
    const username = req.body.username;
    const routeName = req.body.routeName;
    const distance = req.body.distance;
    const path = req.body.path;
    console.log(path)
    //newMap is created from the username,routeName,distance and path and saved the database
    const newRoute = new Map({
        username,
        routeName,
        distance,
        path,
        
    })
    console.log(newRoute)
    newRoute.save()
    .then(() => res.json(newRoute))
    .catch(err => res.status(400).json("Error: " + err))

})

router.route("/findUser").get((req,res) => {
    
    Map.find({username:req.body.username})
        .then(routes => res.json(routes))
        .catch(err => res.status(400).json("Error: " + err))
    
})

//Exporting the router
module.exports = router;