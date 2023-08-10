const express = require("express") ;
const User = require("./user.schema") ;
const app = express.Router() ;
app.use(express.json()) ;



app.post("/signup", async(req,res) => {
    const { email,password, age} =req.body ;
    const user=  await User.create(req.body);
    console.log(email, password, age);
    res.send("User created")
})

app.post("/login",async(req,res) =>{
    const {email} =req.body ;
    const user =await User.findOne( req.body) ;
    if(!user){
       return res.send({"error":"Error"} ) ;
    }
    
    res.send({"user":user});

}) 

app.get("/:id", async(req, res)=>{
    try{
        let id = req.params.id ;
        let output = await User.findOne({"_id":id});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

module.exports =app; 