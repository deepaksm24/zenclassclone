const express = require('express')
const app = express();
require('dotenv').config();
const dbconfig = require("./config/dbcongig")
const mongoose = require("mongoose");

//to enable proxy
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));

app.use(express.json())

const usersRoute = require("./routes/usersRoute")


app.use("/users",usersRoute);

const port = process.env.PORT || 5000;

// app.listen(port, ()=>{
//   console.log(`Server listening at Port ${process.env.PORT}`)  
// })
const path = require("path");
_dirname = path.resolve();
//render
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening at Port ${process.env.PORT}`);
});
