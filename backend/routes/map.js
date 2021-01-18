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
    const nameM = req.body.nameM;
    const weight = req.body.weight

    //newMap is created from the nameM and weight and saved the database
    const newMap = new Map({
        nameM,
        weight
    })

    newMap.save()
    .then(() => res.json("Map added"))
    .catch(err => res.status(400).json("Error: " + err))

})

//Exporting the router
module.exports = router;