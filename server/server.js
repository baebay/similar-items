// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const db = require('./database/db')

app.use(cors());
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Get request successful!');
});

app.get('/getItems', (req,res) => {
  db.getItems((results) => {
    res.send(results)
  })
})

app.listen(port, () => console.log(`Server is running on ${port}`));