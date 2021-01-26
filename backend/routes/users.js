//Router is a function that allows us to create paths for client requests 
const router = require('express').Router();
var User = require('../models/user.model');

//A GET request that gets all the users and displays them
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//At /add is a POST request that can add the username of the user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({username,password});
  console.log(newUser)
  newUser.save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/login").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const loginUser = new User({username,password})

  console.log(loginUser)
  
  // const user = User.find({username});
  // console.log(user.username)
    
  
  
})


//Using the object id that is created you can search for ceratin users
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Whatever object id is put into the url will be deleted from the database
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// /update/"id" will update the object with whatever is giving in the POST request
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      

      users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//Exporting the router
module.exports = router;
