const express =require("express")
const app=express()
const cors = require ("cors")
app.use(cors())

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ilyasbennane155:ILYASSyoussefNASSIM@cluster0.e5i83it.mongodb.net/restaurantsDB?retryWrites=true&w=majority")

const RestaurantModel=require('./models/restaurants')
  
app.get("/restaurants/:city", async (req, res) => {
    const Restaurants = await RestaurantModel.find({ ci: req.params.city });
    res.json(Restaurants);
  });
  

app.listen("3001",()=>{
    console.log("Server works !!")
})