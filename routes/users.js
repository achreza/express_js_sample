const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const users = [
  {
    firstName: "Achmad",
    lastName: "Fahreza",
    age: 25,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", jsonParser, (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`user dengan nama ${user.firstName} berhasil ditambahkan`);
});

router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  res.send(user);
});

module.exports = router;
