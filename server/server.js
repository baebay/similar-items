// dotenv must be required as early as possible for env vars to propogate
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const db = require("./database/db");

app.use(cors());
app.use(express.static("client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Get request successful!");
});

app.get("/getItems", (req, res) => {
  let currItemID = req.query.itemID;
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

app.listen(port, () => console.log(`Server is running on ${port}`));
