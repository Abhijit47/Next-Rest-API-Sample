import mongoose, { Schema } from "mongoose";

const shipModel = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// let Ship = (mongoose.models = {});
// Ship = mongoose.models.shipwreck ?? mongoose.model("Ship", shipModel);
// console.log("models", mongoose.models.Ship);
const Ship =
  mongoose.models.shipwreck || mongoose.model("shipwreck", shipModel);
// console.log(mongoose.models);
export default Ship;
