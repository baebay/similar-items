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
  item_image: String,
  shipping: String
});

let Items = mongoose.model('Items', itemSchema);

let items = [
  { item_id: '0', item_name: "Moby Dick, or The Whale", item_price: 45.41, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/7-Moby-Dick-768x1104.jpg"},
  { item_id: '1', item_name: "The Old Man and The Sea", item_price: 10.08, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/2-The-Old-Man-and-the-Sea.jpg"},
  { item_id: '2', item_name: "Twenty Thousand Leagues Under The Sea", item_price: 57.88, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/10-20000-Leagues-Under-the-Sea.jpg"},
  { item_id: '3', item_name: "Log From the Sea of Cortez", item_price: 43.44, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/1-Log-From-the-Sea-of-Cortez.jpg" },
  { item_id: '4', item_name: "The Sea Around Us", item_price: 47.25, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/3-The-Sea-Around-Us.png"},
  { item_id: '5', item_name: "The Silent World", item_price: 20.48, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/6-The-Silent-World.jpeg" },
  { item_id: '6', item_name: "The Soul of an Octopus", item_price: 90.94, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/12-The-Soul-of-an-Octopus-768x1170.jpg"},
  { item_id: '7', item_name: "The Reef", item_price: 97.70, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/13-The-Reef.jpg" },
  { item_id: '8', item_name: "The Secret Life of Lobsters", item_price: 80.27, item_category: 'Sea Books', shipping: "Free shipping", item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/15-The-Secret-Life-of-Lobsters.jpg"},
  { item_id: '9', item_name: "Treasure Island", item_price: 22.64, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiz7PXc36XjAhVFCc0KHbcfD3YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2FTreasure-Island-Puffin-Classics-Stevenson%2Fdp%2F0141321008&psig=AOvVaw3y2E4j28kTaTkWLnqH4bYS&ust=1562689905503488" },
  { item_id: '10', item_name: "Gulliver's Travels", item_price: 6.40, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://kbimages1-a.akamaihd.net/235f0037-f891-48ce-b7b7-073aff385336/353/569/90/False/gulliver-s-travel.jpg"},
  { item_id: '11', item_name: "Life of Pi", item_price: 40.84, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://dynamic.indigoimages.ca/books/0676973779.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=8&lang=en" },
  { item_id: '12', item_name: "Jaws", item_price: 52.18, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr03/18/16/original-6784-1395173269-4.jpg?downsize=800:*&output-format=auto&output-quality=auto"},
  { item_id: '13', item_name: "Animporphs: The Message", item_price: 47.31, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr06/18/16/enhanced-1552-1395174403-7.jpg?downsize=800:*&output-format=auto&output-quality=auto" },
  { item_id: '14', item_name: "The Seawolf", item_price: 11.94, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sea-wolf_cover.jpg"},
  { item_id: '15', item_name: "Call of Cthulhu", item_price: 63.25, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://vignette.wikia.nocookie.net/vsbattles/images/9/94/Cthulhu_by_disse86-d9tq84i.jpg/revision/latest?cb=20161030021815" },
  { item_id: '16', item_name: "Starfish", item_price: 22.96, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495401418i/35185397.jpg" },
  { item_id: '17', item_name: "The Little Mermaid", item_price: 48.27, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://kbimages1-a.akamaihd.net/db354f34-652f-4c20-b9de-96cfb44bcaf7/353/569/90/False/the-little-mermaid-and-other-fairy-tales.jpg" },
  { item_id: '18', item_name: "Bioshock Rapture", item_price: 5.11, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://vignette.wikia.nocookie.net/bioshock/images/b/b2/Novel_Paperback_Cover.jpg/revision/latest?cb=20101206215158" },
  { item_id: '19', item_name: "The Odyssey", item_price: 30.51, item_category: 'Sea Books', shipping: "Free shipping", item_image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435163102.jpg" },
  { item_id: '20', item_name: "Vtg ROLOFF River Special R8 Small 8 # CAST IRON BOAT ANCHOR Kaukauna NICE PATINA", item_price: 69.95, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/KnIAAOSwddBdITpp/s-l1600.jpg" },
  { item_id: '21', item_name: `Antique Fishermans Anchor Kedge Anchor Aprox 32" x 22" 13lbs`, item_price: 119.99, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/w60AAOSw7E1dBh0g/s-l1600.jpg" },
  { item_id: '22', item_name: "Extreme Max Navy Anchor - 10 Ibs. Coated", item_price: 26.99, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/uG0AAOSwb2hcbCrE/s-l1600.jpg" },
  { item_id: '23', item_name: "Danforth Utility Fluke Style Boat Marine Anchor Galvanized Seachoice 7E 41610", item_price: 15.95, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/~MMAAOSwl3pc4~73/s-l500.jpg" },
  { item_id: '24', item_name: "Portable Folding 3lb Anchor Kit Canoe Kayak Raft Boat Sailboat Fishing Jet Ski", item_price: 22.99, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/VR0AAOSw0NJc8BlT/s-l500.png" },
  // { item_id: '25', item_name: "Vintage Merriman Brothers Iron Kedge Anchor. Painted White.", item_price: 75.00, item_category: 'Anchoring, Docking', shipping: "Free shipping", item_image: "https://i.ebayimg.com/images/g/wtIAAOSwGI9br~E2/s-l1600.jpg" },
  // { item_id: '26', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '27', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '28', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '29', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '30', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '31', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '32', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '33', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '34', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '35', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '36', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '37', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '38', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },
  // { item_id: '', item_name: "", item_price: , item_category: '', shipping: "Free shipping", item_image: "" },

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



