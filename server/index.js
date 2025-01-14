const express = require("express");
const { MongodbConnect } = require("./connection");
const myRouter = require("./routes/days");

const app = express();
const PORT = 8040;
MongodbConnect("mongodb://127.0.0.1:27017")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/addDay", myRouter);
app.listen(PORT, () => console.log("Server Started"));
