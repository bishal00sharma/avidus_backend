const express = require("express") ;
const Property = require("./property.schema") ;
const app = express.Router() ;
app.use(express.json()) ;



app.post("/create", async(req,res) => {
    const property=  await Property.create(req.body);
    res.send("property created")
})

app.get("/", async(req, res)=>{
    try{
        res.send("Avidus API");
     }
   catch(err){
       res.status(500).send(err.message);
   }
})

module.exports =app; 