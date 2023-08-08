const express = require("express") ;
const Property = require("./property.schema") ;
const app = express.Router() ;
app.use(express.json()) ;

app.get("/", async(req, res)=>{
    try{
        let output = await Property.find();
        res.send(output);
     }
   catch(err){
       res.status(500).send(err.message);
   }
})


app.post("/create", async(req,res) => {
    const property=  await Property.create(req.body);
    res.send("property created")
})

app.get("/:id", async(req, res)=>{
    try{
        let id = req.params.id ;
        let output = await Property.find({"user":id});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})




module.exports =app; 