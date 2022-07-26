const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use(bodyParser.json());

app.use("/", userRouter);

app.listen(3000, () => console.log("Server is running on port : http://localhost:3000"));
