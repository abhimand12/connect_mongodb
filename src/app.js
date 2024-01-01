import express from "express"


const app=express()


// i am doing configuration setting
app.use( express.json( ))   // it says i am accepting json from request 
app.use(express.urlencoded() )  // it is saying for how use accept data from url




// routes declaration
// now we are using  middle ware  as in form of app.use( )  




// http://localhost:8000/api/v1/users/register   

export{app}