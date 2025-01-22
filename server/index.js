const express = require("express");
const { MongodbConnect } = require("./connection");
const myRouter = require("./routes/days");
const cors = require("cors");

const app = express();
const PORT = 8040;
MongodbConnect("mongodb://127.0.0.1:27017/Day")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/", myRouter);
app.listen(PORT, () => console.log("Server Started"));
