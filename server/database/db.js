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
  {
      item_id: 0,
      item_name: "Moby Dick, or The Whale",
      item_price: 45.41,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/7-Moby-Dick-768x1104.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 1,
      item_name: "The Old Man and The Sea",
      item_price: 10.08,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/2-The-Old-Man-and-the-Sea.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 2,
      item_name: "Twenty Thousand Leagues Under The Sea",
      item_price: 57.88,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/10-20000-Leagues-Under-the-Sea.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 3,
      item_name: "Log From the Sea of Cortez",
      item_price: 43.44,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/1-Log-From-the-Sea-of-Cortez.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 4,
      item_name: "The Sea Around Us",
      item_price: 47.25,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/3-The-Sea-Around-Us.png",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 5,
      item_name: "The Silent World",
      item_price: 20.48,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/6-The-Silent-World.jpeg",
      shipping: "Free shipping"
  },
  {
      item_id: 6,
      item_name: "The Soul of an Octopus",
      item_price: 90.94,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/12-The-Soul-of-an-Octopus-768x1170.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 7,
      item_name: "The Reef",
      item_price: 97.7,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/13-The-Reef.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 8,
      item_name: "The Secret Life of Lobsters",
      item_price: 80.27,
      item_category: "Sea Books",
      item_image: "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/15-The-Secret-Life-of-Lobsters.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 9,
      item_name: "Treasure Island",
      item_price: 22.64,
      item_category: "Sea Books",
      item_image: "https://images-na.ssl-images-amazon.com/images/I/91rEwaI%2BF3L.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 10,
      item_name: "Gulliver's Travels",
      item_price: 6.4,
      item_category: "Sea Books",
      item_image: "https://kbimages1-a.akamaihd.net/235f0037-f891-48ce-b7b7-073aff385336/353/569/90/False/gulliver-s-travel.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 11,
      item_name: "Life of Pi",
      item_price: 40.84,
      item_category: "Sea Books",
      item_image: "https://dynamic.indigoimages.ca/books/0676973779.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=8&lang=en",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 12,
      item_name: "Jaws",
      item_price: 52.18,
      item_category: "Sea Books",
      item_image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr03/18/16/original-6784-1395173269-4.jpg?downsize=800:*&output-format=auto&output-quality=auto",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 13,
      item_name: "Animporphs: The Message",
      item_price: 47.31,
      item_category: "Sea Books",
      item_image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr06/18/16/enhanced-1552-1395174403-7.jpg?downsize=800:*&output-format=auto&output-quality=auto",
      shipping: "Free shipping"
  },
  {
      item_id: 14,
      item_name: "The Seawolf",
      item_price: 11.94,
      item_category: "Sea Books",
      item_image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sea-wolf_cover.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 15,
      item_name: "Call of Cthulhu",
      item_price: 63.25,
      item_category: "Sea Books",
      item_image: "https://vignette.wikia.nocookie.net/vsbattles/images/9/94/Cthulhu_by_disse86-d9tq84i.jpg/revision/latest?cb=20161030021815",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 16,
      item_name: "Starfish",
      item_price: 22.96,
      item_category: "Sea Books",
      item_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495401418i/35185397.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 17,
      item_name: "The Little Mermaid",
      item_price: 48.27,
      item_category: "Sea Books",
      item_image: "https://kbimages1-a.akamaihd.net/db354f34-652f-4c20-b9de-96cfb44bcaf7/353/569/90/False/the-little-mermaid-and-other-fairy-tales.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 18,
      item_name: "Bioshock Rapture",
      item_price: 5.11,
      item_category: "Sea Books",
      item_image: "https://vignette.wikia.nocookie.net/bioshock/images/b/b2/Novel_Paperback_Cover.jpg/revision/latest?cb=20101206215158",
      shipping: "Free shipping"
  },
  {
      item_id: 19,
      item_name: "The Odyssey",
      item_price: 30.51,
      item_category: "Sea Books",
      item_image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435163102.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 20,
      item_name: "Vtg ROLOFF River Special R8 Small 8 # CAST IRON BOAT ANCHOR Kaukauna NICE PATINA",
      item_price: 69.95,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/KnIAAOSwddBdITpp/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 21,
      item_name: "Antique Fishermans Anchor Kedge Anchor Aprox 32\" x 22\" 13lbs",
      item_price: 119.99,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/w60AAOSw7E1dBh0g/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 22,
      item_name: "Extreme Max Navy Anchor - 10 Ibs. Coated",
      item_price: 26.99,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/uG0AAOSwb2hcbCrE/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 23,
      item_name: "Danforth Utility Fluke Style Boat Marine Anchor Galvanized Seachoice 7E 41610",
      item_price: 15.95,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/~MMAAOSwl3pc4~73/s-l500.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 24,
      item_name: "Portable Folding 3lb Anchor Kit Canoe Kayak Raft Boat Sailboat Fishing Jet Ski",
      item_price: 22.99,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/VR0AAOSw0NJc8BlT/s-l500.png",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 25,
      item_name: "Vintage Merriman Brothers Iron Kedge Anchor. Painted White.",
      item_price: 75,
      item_category: "Anchoring, Docking",
      item_image: "https://i.ebayimg.com/images/g/wtIAAOSwGI9br~E2/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 26,
      item_name: "Conch Murex Spikey Shell Phone",
      item_price: 299,
      item_category: "Shell Phones",
      item_image: "https://i.ebayimg.com/images/g/2fIAAOSwNaBdHg~T/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 27,
      item_name: "Conch V70 shell phone rose gold NEW IN BOX",
      item_price: 349,
      item_category: "Shell Phones",
      item_image: "https://i.ebayimg.com/images/g/pvYAAOSwqu1axkcl/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 28,
      item_name: "Conch v80+ shell phone",
      item_price: 689.99,
      item_category: "Shell Phones",
      item_image: "https://i.ebayimg.com/images/g/IpEAAOSwsMBc-817/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 29,
      item_name: "lagoon s10+ shell phone",
      item_price: 488,
      item_category: "Shell Phones",
      item_image: "https://cdn.shopify.com/s/files/1/0249/5884/products/valfre-tech-shellphone-iphone-5-6-7-829x1140_96a3c865-074e-4922-8acd-d1730d4b9cac_720x.jpg?v=1547575587",
      shipping: "Free shipping"
  },
  {
      item_id: 30,
      item_name: "2020 Deluxe Mobile Home 1BR 1BA 2\"x3\" (6\"sq) MOBILE HOME-FOR ALL FLORIDA",
      item_price: 1500,
      item_category: "Mobile Homes and RVs",
      item_image: "https://3dprint.com/wp-content/uploads/2017/08/crab2.png",
      shipping: "Free shipping"
  },
  {
      item_id: 31,
      item_name: "INDUSTRIAL SYLE deluxe mobile home (two colors available)",
      item_price: 2399,
      item_category: "Mobile Homes and RVs",
      item_image: "https://bloximages.newyork1.vip.townnews.com/newsadvance.com/content/tncms/assets/v3/editorial/8/d6/8d640864-32b3-11e2-b0c5-0019bb30f31a/50aae008b6cc3.image.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 32,
      item_name: "3BR 3BA Mobile Home FLORIDA",
      item_price: 17500,
      item_category: "Mobile Homes and RVs",
      item_image: "https://i.ebayimg.com/images/g/cMcAAOSwTfFbR5ly/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 33,
      item_name: "SPACIOUS 1BR 1BA mobile home GALVASTON TX",
      item_price: 13000,
      item_category: "Mobile Homes and RVs",
      item_image: "https://i.ebayimg.com/images/g/KgMAAOxyXWdQ8ltm/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 34,
      item_name: "mobile home 100% RECYCLED MATERIAL ENVIRONMENTALLY FRIENDLY",
      item_price: 20000,
      item_category: "Mobile Homes and RVs",
      item_image: "https://mortyjsockssporclequizpics.weebly.com/uploads/1/1/5/6/115698155/hermit-crabs-6_orig.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 35,
      item_name: "Antique 18\" Diving vintage BOSTON MARK V U.S Navy Deep Sea Divers Helmet",
      item_price: 429,
      item_category: "Hats",
      item_image: "https://i.ebayimg.com/images/g/TtIAAOSw6VVdGDn5/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 36,
      item_name: "Full Face Snorkel Mask Scuba Diving Swimming Easy Breath Underwater Anti Fog",
      item_price: 22,
      item_category: "Hats",
      item_image: "https://i.ebayimg.com/images/g/gRMAAOSwhxJdD3y7/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 37,
      item_name: "Underwater Diving Mask Scuba Snorkel Goggles Anti Fog Silicone Half Face Glasses",
      item_price: 13,
      item_category: "Hats",
      item_image: "https://i.ebayimg.com/images/g/Ja0AAOSw3FJdAcIi/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 38,
      item_name: "RARE ANTIQUE Vintage Siebe Gorman Copper & Bras REPRODUCT Diving Helmet #1120",
      item_price: 379,
      item_category: "Hats",
      item_image: "https://i.ebayimg.com/images/g/W4AAAOSwFW9dGDw8/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 39,
      item_name: "Antique Brass Diving Helmet Us Navy Engineering Divers Helmet Vintage ",
      item_price: 799,
      item_category: "Hats",
      item_image: "https://i.ebayimg.com/images/g/L8IAAOSwXW9bteIs/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 40,
      item_name: "Mr. Eugene H. Krabs SpongeBob Squarepants Crab Plush Toy Stuffed Animal New 8\"",
      item_price: 7.33,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/BEcAAOSwMqVaztbE/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 41,
      item_name: "NEW LEGO \"SALTY SEA CAPTAIN\" MINIFIG LOT seagull sailor figure minifigure pirate",
      item_price: 9.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/qEQAAOSw7rlb7Qw1/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 42,
      item_name: "LEGO City Coast Guard Sea Rescue Plane 60164 Building Kit (141 Piece)",
      item_price: 33.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/onYAAOSwVRBcC3jo/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 43,
      item_name: "NEW Spin Master 6040052 Paw Patrol Sea Patrol Sub Patroller Vehicle Playset",
      item_price: 29.95,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/YnAAAOSwuFZcnh~d/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 44,
      item_name: "Spongebob Squarepants TCG Deep Sea Duel Aquatic Amigos Starter Deck",
      item_price: 19.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/8UoAAOSwqz9bYy4~/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 45,
      item_name: "76027 BLACK MANTA DEEP SEA STRIKE lego legos set NEW sealed super heroes AQUAMAN",
      item_price: 65.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/aXAAAOSwfDtdBXgH/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 46,
      item_name: "NEW Bundle of 7 Ocean-Themed Coloring & Activity Items w/ Stickers Bookmark+More",
      item_price: 12.97,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/cdEAAOSwQd5cknN3/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 47,
      item_name: "NEW Paw Patrol Sea Patrol Chase Transforming Vehicle & Figure Puppy Boat Toy",
      item_price: 16.95,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/8mIAAOSw02Fcip-E/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 48,
      item_name: "Paw Patrol Sea Patrol - Sea Patroller Transforming Vehicle w/ Lights and Sounds",
      item_price: 89.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/-4kAAOSwgVJcE0lU/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 49,
      item_name: "8pcs Spongebob SquarePants Series Figure Toys Patrick Star Figurine Doll Gifts",
      item_price: 7.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/Ft8AAOSw6VRbEhCl/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 50,
      item_name: "Deep Sea Adventure Board Game with English Instructions Cards Game 2-6 Player XR",
      item_price: 7.86,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/VzIAAOSw43haIMau/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 51,
      item_name: "Disney Authentic Finding Dory Nemo Plush BIG 15\" Stuffed Animal Toy New",
      item_price: 22.45,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/rQwAAOSw-itXqq6F/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 52,
      item_name: "Record Your Own Plush 16 inch Bubbles the Dolphin - Ready To Love In A Few Easy",
      item_price: 26.99,
      item_category: "Toys",
      item_image: "https://d3d71ba2asa5oz.cloudfront.net/12005684/images/4639_s.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 53,
      item_name: "SpongeBob SquarePants: Creature from the Krusty Krab - Nintendo Wii Game",
      item_price: 6.97,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/uBgAAOSw5GVc7s8x/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 54,
      item_name: "NEW LEGO CAPTAIN JACK SPARROW MINIFIG LOT potc pirates of the caribbean treasure",
      item_price: 9.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/E5sAAOSwCXRceX2b/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 55,
      item_name: "SpongeBob Squarepants Lego 4981 The Chum Bucket GET IT FAST ~ US SHIPPER",
      item_price: 264.87,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/lGUAAOSwYIRbbdhr/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 56,
      item_name: "NEW LEGO PIRATE SPONGEBOB SQUAREPANTS MINIFIG figure minifigure 3817 dutchman",
      item_price: 6.99,
      item_category: "Toys",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 57,
      item_name: "Thomas & Friends Track Master Boat and Sea Set - New",
      item_price: 39.99,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/kPAAAOSwtaBcSMGe/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 58,
      item_name: "Fisher Price Thomas & Friends Adventures Sea Monster Pirate Set NEW",
      item_price: 22.95,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/eKEAAOSwO-ZcqSh5/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 59,
      item_name: "SpongeBob SquarePants Patrick Chew with Rope Toy for Dogs",
      item_price: 9.89,
      item_category: "Toys",
      item_image: "https://i.ebayimg.com/images/g/C1IAAOSw-HJcm~xu/s-l500.png",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 60,
      item_name: "Jimbo Jumbo Painting",
      item_price: 189,
      item_category: "Equestrian ",
      item_image: "https://nateduval.com/wp-content/uploads/2014/10/aquaticeq.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 61,
      item_name: "Swim Trainer",
      item_price: 589,
      item_category: "Equestrian ",
      item_image: "https://nateduval.com/wp-content/uploads/2014/10/aquaticeq.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 62,
      item_name: "Horse Life Jacket",
      item_price: 18,
      item_category: "Equestrian ",
      item_image: "http://3.bp.blogspot.com/-mXwxJepyFpk/U7Wlql8_DuI/AAAAAAAAD4k/nqMtKnp3JJo/s1600/PFD+Pony.jpeg",
      shipping: "Free shipping"
  },
  {
      item_id: 63,
      item_name: "Non-Land Horse",
      item_price: 54,
      item_category: "Equestrian ",
      item_image: "https://en.wikipedia.org/wiki/Seahorse#/media/File:Hippocampus.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 64,
      item_name: "Sickly Sea Horse",
      item_price: 119,
      item_category: "Equestrian ",
      item_image: "https://vignette.wikia.nocookie.net/spongebob/images/f/f0/My_Pretty_Seahorse_07.png/revision/latest?cb=20130103021120",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 65,
      item_name: "Labeled Sand Samples from Around The World Collected on 40+ Cruise Vacations",
      item_price: 5,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/gBUAAOSwtkRcxez9/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 66,
      item_name: "Hanauma Bay Beach Green Sand Sand Sample",
      item_price: 2.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/iIQAAOSwz7hc1yFR/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 67,
      item_name: "USA Kaihalulu Beach Red sand Beach Coarse Red Sand Sample",
      item_price: 2.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/Oy4AAOSwaHlcs5Ap/s-l1600.png",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 68,
      item_name: "Florida Cocoa Beach Florida Sand Sample",
      item_price: 1,
      item_category: "Sand",
      item_image: "https://www.ebay.com/itm/Florida-Cocoa-Beach-Florida-Sand-Sample/322313531270?hash=item4b0b622f86:g:lUwAAOSwKtlWkl8~",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 69,
      item_name: "MISSION BAY ~ SAN DIEGO, CALIFORNIA - BEACH SAND Sample",
      item_price: 4.95,
      item_category: "Sand",
      item_image: "https://www.ebay.com/itm/MISSION-BAY-SAN-DIEGO-CALIFORNIA-BEACH-SAND-Sample/302962474102?hash=item4689f87c76:g:mpcAAOSwHjNV~f0N",
      shipping: "Free shipping"
  },
  {
      item_id: 70,
      item_name: "Diamond Head Lighthouse Beach Sand Sample",
      item_price: 1.95,
      item_category: "Sand",
      item_image: "https://www.ebay.com/itm/Diamond-Head-Lighthouse-Beach-Sand-Sample/323804258511?hash=item4b643ce0cf:g:YzgAAOSwHDpc1yLr",
      shipping: "Free shipping"
  },
  {
      item_id: 71,
      item_name: "Lot of 14 Sand Samples from Various Beaches in the Bahamas",
      item_price: 99.99,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/mAgAAOSwyQtVsbNM/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 72,
      item_name: "Lot of 34 Bulgaria Sand Beach Sample from Black sea 3 oz (86g) each bag",
      item_price: 70,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/~ikAAOSwdSRZ~jBf/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 73,
      item_name: "Ireland Bundoran Sand Sample",
      item_price: 4.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/MwcAAOSwTFFc6dbG/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 74,
      item_name: "Alabama Dauphin Island Beach Sand Sample",
      item_price: 1,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/CzcAAOSwIXNc8qcL/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 75,
      item_name: "STAR SAND - JAPAN - RARE - TAKETOMI - BEACH SAND SAMPLE",
      item_price: 5.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/QPoAAOSwI2xX8ZTA/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 76,
      item_name: "Magnetic BLACK SAND Sample Capistrano Beach, Dana Point, CA",
      item_price: 5.99,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/X10AAOSwESdcwJD0/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 77,
      item_name: "IXTAPA, MEXICO ~ BEACH SAND Sample",
      item_price: 9.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/VWAAAOSwVL1WAdg1/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 78,
      item_name: "Star Sand Okinawa Japan - star sand beach - Sand sample 50 grams (1.76 oz)",
      item_price: 13.5,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/RugAAOSwQVlcd1wM/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 79,
      item_name: "CAPE COD, MASSACHUSETTS ~ BEACH SAND sample",
      item_price: 4.95,
      item_category: "Sand",
      item_image: "https://i.ebayimg.com/images/g/6WQAAOSwHjNV~4-G/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 80,
      item_name: "Deep Blue Sea DVD",
      item_price: 3.71,
      item_category: "DVDs & Movies",
      item_image: "https://i.ebayimg.com/01/!!d-vscw!mM~$(KGrHqR,!jgE)pby,5IuBM6tvEbbGw~~_12.JPG?set_id=89040003C1",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 81,
      item_name: "Little Mermaid II, The: Return to the Sea (DVD, 2008, Special Edition)",
      item_price: 7.45,
      item_category: "DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/PBwAAOSwDNdV3i7G/s-l500.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 82,
      item_name: "By the Sea (DVD, 2016)",
      item_price: 4.50,
      item_category: "DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/djEAAOSwr~lYr6vo/s-l500.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 83,
      item_name: "Oceans 11 (Widescreen) (2001, Clooney)",
      item_price: 3.00,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/GZwAAOSwbAJbmXZr/s-l500.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 84,
      item_name: "Oceans Twelve 12 DVD NEW Clooney, Pitt, Damon, Zeta- Jones, Roberts Widescreen",
      item_price: 8.70,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/05/!!eBu!,wEWM~$(KGrHqR,!jQE0D2IM1QdBNQ2l+S!Rg~~_12.JPG?set_id=89040003C1",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 85,
      item_name: "OCEANS 13 Ocean’s Thirteen (DVD Widescreen) Brad Pitt George Clooney",
      item_price: 7.00,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/04/!!eBw-OQCGM~$(KGrHqJ,!lgEz+2LF49pBNQ4RJEwzw~~_12.JPG?set_id=89040003C1",
      shipping: "Free shipping"
  },
  {
      item_id: 86,
      item_name: "20,000 Leagues Under the Sea [New DVD] Special Edition",
      item_price: 11.56,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/OH4AAOSwKjlbVovQ/s-l500.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 87,
      item_name: "In the Heart of the Sea [New DVD] Full Frame, Subtitled, Ac-3/Dolby Digital",
      item_price: 7.47,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/8CQAAOSwfSJbVowg/s-l500.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 88,
      item_name: "Godzilla vs The Sea Monster (DVD, 2014)",
      item_price: 14.11,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/S5cAAOSwH0Vb-h4H/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 89,
      item_name: "Manchester by the Sea (DVD, 2017)",
      item_price: 3.99,
      item_category: "  DVDs & Movies",
      item_image: "https://i.ebayimg.com/images/g/~FsAAOSwleRcVkmp/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 90,
      item_name: "Jack Black Double-Duty Face Moisturizer SPF20 w/Blue Algae Extract & Sea Parsley",
      item_price: 24.99,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/~vAAAOSwwz5axUv1/s-l500.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 91,
      item_name: "INIS ENERGY OF THE SEA Cologne Spray 1.7 Fluid Ounces",
      item_price: 41.00,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/NK8AAOSwuehbP~KD/s-l1600.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 92,
      item_name: "BRAND NEW DEEP SEA COSMETICS DEEP BLUE DEAD SEA HAND AND BODY LOTION 6.8 Oz",
      item_price: 19.95,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/8aoAAOSwX5ZbDdrn/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 93,
      item_name: "SAME DAY SHIP Aquage Sea Salt Texturizing Spray, 8 oz",
      item_price: 10.49,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/-loAAOxylpNTSju2/s-l500.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 94,
      item_name: "Fresh Skin Naturals Dead Sea Mud Mask Facial Cleanser, Anti-Aging, Tone, 8.9 oz",
      item_price: 7.45,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/OnMAAOSwUlxaD6AG/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 95,
      item_name: "Swanson Ancient Zechstein Sea Brine Magnesium Oil Liquid, 8 fl oz",
      item_price: 6.95,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/VxgAAOSw2zZcvpUl/s-l500.jpg",
      shipping: "+2.99 shipping"
  },
  {
      item_id: 96,
      item_name: "Natural Sea Sponge Foam Bath Pack of 3 Natural Feeling Smoother Skin Exfoliating",
      item_price: 11.99,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/JnwAAOSwHYpZ-a9J/s-l1600.jpg",
      shipping: "+3.99 shipping"
  },
  {
      item_id: 97,
      item_name: "Rastarafi® Whole Leaf Irish Moss Sea Moss 1 lb | Raw WildCrafted Superfood-16 Oz",
      item_price: 21.55,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/bBgAAOSwrT9awdFR/s-l1600.png",
      shipping: "Free shipping"
  },
  {
      item_id: 98,
      item_name: "Alaska Deep Sea Fish Oil Omega 3 DHA/EPA 1000 mg 200 Softgels FRESH SHIPPING",
      item_price: 8.94,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/Q7kAAOSwfVpYrbRI/s-l1600.jpg",
      shipping: "Free shipping"
  },
  {
      item_id: 99,
      item_name: "Puritan's Pride Sea Kelp - 250 Tablets (Free Shipping)",
      item_price: 6.35,
      item_category: "Health & Beauty",
      item_image: "https://i.ebayimg.com/images/g/W4EAAOSwYxBc5bMk/s-l1600.jpg",
      shipping: "+2.99 shipping"
  }
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



