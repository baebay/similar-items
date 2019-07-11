const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const con = mongoose.connection;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let itemSchema = new Schema({
  item_id: Number,
  item_name: String,
  item_price: Number,
  item_category: String,
  item_image: String,
  shipping: String
});

let Items = mongoose.model('Item', itemSchema);

// Items.find({item_id:1})
// .then(console.log)
// .catch(console.error)

// Items.insertMany(items, function (err, docs) {
//   if (err){ 
//       return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Items");
//   }
// });

const getCurrItemCategory = (currItemID,callback) => {
  Items.findOne({item_id:currItemID},(err, item) => {
    if (err) return console.error(err);
    else {
      let currItemCategory = item.item_category;
      callback(currItemCategory);
    }
  })
}

const getSimilarItems = (currItemCategory,callback) => {
  Items.find({item_category:currItemCategory},(err, items) => {
    if (err) return console.error(err);
    else {
      callback(items)
    }
  })
}

module.exports = { getSimilarItems, getCurrItemCategory }



