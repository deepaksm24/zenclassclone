const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection;

connection.on("connected",()=>{
    console.log("Mongo DB connected Succesfully")
})

connection.on("error",()=>{
    console.log("Failed Mongo DB connection")
})