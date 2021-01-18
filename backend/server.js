//What the program needs to run. So express and mongoose for the backend

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//This section connects the node.js server-side code with the mongodb database to add,delete, update etc for the data
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const mapRouter = require("./routes/map")
const usersRouter = require("./routes/users")

app.use("/map", mapRouter)
app.use("/users", usersRouter)


app.listen(port, () => {
    console.log('Server is running at:', port)
})