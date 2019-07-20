const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/db");
const compression = require("compression");

app.use(cors());
app.use(express.static("client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get("/", (req, res) => {
  res.status(200).send("Get request successful!");
});

app.get("/getItems", (req, res) => {
  let currItemID = req.query.itemID;
  if(!currItemID){
    res.sendStatus(404)
  }
  db.getCurrItemCategory(currItemID, category => {
    db.getSimilarItems(category, results => {
      if (results.length < 12) {
        for (let i = 0; i < 12 / results.length; i++) {
          results.push(...results);
        }
      }
      res.send(results);
    });
  });
});

module.exports = app;