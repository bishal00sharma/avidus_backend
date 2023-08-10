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
    try{
        if(req.body.role=="merchant"){
            const property=  await Property.create(req.body);
            res.send("property created")
        }
        else{
            res.send("Become a merchant to ceate a property.")
        }
    }
    catch(err){
        res.status(500).send(err.message);
    }
})

app.get("/:id", async(req, res)=>{
    try{
        let id = req.params.id ;
        let output = await Property.find({"_id":id});
        res.send(output);
   }
   catch(err){
       res.status(500).send(err.message);
   }
})

app.patch("/:id",  async (req, res) => {
    try {
      const { id } = req.params;

     let update = await Property.updateOne({"_id":id},{$push : { bookingDate: req.body}});
  
      return res.status(200).send({ update });
    } catch (error) {
      return res.status(404).send({ error: "Something went wrong" });
    }
  });




module.exports =app; 