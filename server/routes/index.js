const express = require("express");
const router = express.Router();
const NameModel = require("../models/Name");

// http://localhost:4000/items
router.get("/", (req, res, next) => {
  // Get all the items
  NameModel.find()
    .then((names) => {
      res.status(200).json(names);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/items/id
router.get("/:id", (req, res, next) => {
  // Get one item
  NameModel.findById()
    .then((names) => {
      res.status(200).json(names);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
