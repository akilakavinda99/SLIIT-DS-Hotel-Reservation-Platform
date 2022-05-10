import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  url: String,
  title: String,
  description: String,
  view: String,
  size: String,
  adults: Number,
  children: Number,
  bedding: String,
  amenities: [String],
  paragraph: String,
  mainImage: String,
  subImage: String,
  price: Number,
});

const Rooms = mongoose.model("room", roomSchema);

export default Rooms;
