const express = require("express") ;
const cors = require("cors") ;
const  mongoose  = require("mongoose");


const app = express() ;
app.use(express.json());
app.use(cors());


const userRouter = require("./features/user/user.router");



app.use("/user",userRouter);

app.get("/", async(req, res)=>{
    try{
        res.send("Avidus API");
     }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.listen("8080",  async()=>{
     await mongoose.connect("mongodb+srv://bishalsharmaece:avidus@cluster0.xwzj4z0.mongodb.net/avidus")
    console.log(`Listening on http://localhost:8080`);

})
