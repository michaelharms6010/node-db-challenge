require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const morgan = require("morgan");

const server = express()

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

port = process.env.PORT || 4000;

server.get("/", (req,res)  => {
    console.log("Server Console is ALIVE")
    res.send("It’s… ALIVE!") 
});

server.listen(port, _ => {
    console.log(`\n **** Server listening on port ${port} **** \n`)
});