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
  item_category: String,
  item_image: String
});

let Items = mongoose.model('Items', itemSchema);

let items = [
  { item_id: '1', item_name: "Test1", item_price: 20.5, item_category: 'toy', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '2', item_name: "Test2", item_price: 21.3, item_category: 'toy', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '3', item_name: "Test3", item_price: 22.5, item_category: 'toy', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '4', item_name: "Test4", item_price: 21.3, item_category: 'toy', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '5', item_name: "Test5", item_price: 22.5, item_category: 'toy', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '6', item_name: "Test6", item_price: 21.3, item_category: 'book', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '7', item_name: "Test7", item_price: 22.5, item_category: 'book', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '8', item_name: "Test8", item_price: 21.3, item_category: 'book', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '9', item_name: "Test9", item_price: 22.5, item_category: 'book', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '10', item_name: "Test10", item_price: 21.3, item_category: 'book', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '11', item_name: "Test11", item_price: 22.5, item_category: 'toy', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '12', item_name: "Test12", item_price: 21.3, item_category: 'toy', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '13', item_name: "Test13", item_price: 22.5, item_category: 'baby', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" },
  { item_id: '14', item_name: "Test14", item_price: 21.3, item_category: 'baby', item_image: "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  { item_id: '15', item_name: "Test15", item_price: 22.5, item_category: 'baby', item_image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png" }
]


Items.insertMany(items, function (err, docs) {
  if (err){ 
      return console.error(err);
  } else {
    console.log("Multiple documents inserted to Items");
  }
});


const getSimilarItems = (currItemCategory,callback) => {
  Items.find({item_category:currItemCategory},(err, items) => {
    if (err) return console.error(err);
    else {
      callback(items)
    }
  })
}

const getCurrItemCategory = (currItemID,callback) => {
  Items.findOne({item_id:currItemID},(err, item) => {
    if (err) return console.error(err);
    else {
      let currItemCategory = item.item_category;
      callback(currItemCategory);
    }
  })
}

module.exports = { getSimilarItems, getCurrItemCategory }



