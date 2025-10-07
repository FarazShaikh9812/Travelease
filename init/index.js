const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travelease";

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error in connection : ", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68d124d8be8ce4cdc4327725",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
