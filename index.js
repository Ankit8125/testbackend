require('dotenv').config()

const express = require("express")
const app = express()

// Now `app` got all the packages of `express`, now we can use all the functionalities of `express` via `app`
// It's similar to : We got `Math` func, now we can use `pow` , `pi`, etc..

const port = 3000

app.get('/', (req,res)=>{
    res.send("Hello World")
})

// It's important to add `/`

app.get('/login', (req,res)=>{
    res.send('<h1>Login at Github</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening via ${port}`)
})

// dotenv installed to make sure everything wors correctly on anyone's device, so that workflow is not disturbed