const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// set up express
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
// set up mongoose
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
).then(result=>console.log("connected succesfull")).catch(err=>console.log([err,"connection err"]))
// set up routes
app.use("/users", require("./routes/user"));