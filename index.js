// implement your API here
const express = require("express");

const db = require("./data/db.js");

const server = express();

server.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.json(err);
    });
});

server.get("/api/users/:userid", (req, res) => {
  const id = req.params.userid;

  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

server.listen(5000, () => console.log("server running"));
