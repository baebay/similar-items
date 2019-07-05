const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seabay', { useNewUrlParser: true });

const con = mongoose.connection;
con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', function() {
  // we're connected!
  con.db.dropDatabase();
  console.log('connected')
});

let itemSchema = new mongoose.Schema({
  item_id: String,
  item_name: String,
  item_price: Number,
  item_image: String
});

let Items = mongoose.model('Items', itemSchema);

let items = [
  { item_id: '1', item_name: "Test1", item_price: 20.5, item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '2', item_name: "Test2", item_price: 21.3, item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '3', item_name: "Test3", item_price: 22.5, item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" }
]


Items.insertMany(items, function (err, docs) {
  if (err){ 
      return console.error(err);
  } else {
    console.log("Multiple documents inserted to Items");
  }
});


const getItems = (callback) => {
  Items.find(function (err, items) {
    if (err) return console.error(err);
    else {
      callback(items)
    }
  })
}

module.exports = { getItems }



