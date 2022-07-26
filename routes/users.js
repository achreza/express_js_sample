const express = require("express");
const router = express.Router();

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

module.exports = router;
