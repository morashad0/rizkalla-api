const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const departmentsRoutes = require("./routes/deprtments");
const productRoutes = require("./routes/products");



const app = express();

dotenv.config(); //to read .env file and parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content.

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection Successfull"))
  .catch((err) => console.log(err));
//mongoose.connect('MONGO_URL= mongodb+srv://me:1234@myatlasclusteredu.lghgahn.mongodb.net/rizkalla').then(() => console.log("DBconnection Successfull")).catch((err) => console.log(err))
app.use(cors());

// app.use("/product", productRoutes);
app.use("/departments", departmentsRoutes);
app.use("/product", productRoutes);


// app.use("/order", orderRoutes);

app.listen(5000, () => {
    console.log("Backend Server is running!");
  });