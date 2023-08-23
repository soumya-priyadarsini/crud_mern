const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./router/router')
app.use(express.json())
app.use(cors());

app.use('/crud',router);


app.listen(8000,()=>{
    console.log("Server run on port 8000")
})