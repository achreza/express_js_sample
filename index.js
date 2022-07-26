const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.listen(3000, () => console.log("Server is running on port : http://localhost:3000"));
