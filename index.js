require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const morgan = require("morgan");

const BusinessRouter = require("./business-helpers/business-router")

const server = express()

port = process.env.PORT || 4000;

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use('/biz', BusinessRouter)

server.get("/", (req,res)  => {
    console.log("Server Console is ALIVE")
    res.send("It’s… ALIVE!") 
});

server.listen(port, _ => {
    console.log(`\n **** Server listening on port ${port} **** \n`)
});