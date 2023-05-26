const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
const cors = require("cors");
const RestaurantModel=require('./models/restaurants')


app.use(cors());


mongoose
  // mongodb://127.0.0.1:27017/location
  .connect("mongodb+srv://ilyasbennane155:ILYASSyoussefNASSIM@cluster0.e5i83it.mongodb.net/restaurantsDB?retryWrites=true&w=majority", {
    // Configurer la connexion à la base de données
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/restaurants/:city", async (req, res) => {
  const Restaurants = await RestaurantModel.find({ ci: req.params.city });
  res.json(Restaurants);
});

app.get("/", (req, res) => {
res.send("Hello Hbabiiii");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello Hbabiiii");
});

app.get("/a", (req, res) => {
  res.send("Hiiiiiiii");
});
