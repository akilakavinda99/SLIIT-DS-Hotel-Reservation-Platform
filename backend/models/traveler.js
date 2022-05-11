import mongoose from "mongoose";
const Schema = mongoose.Schema;

const travelerSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Traveler = mongoose.model("Traveler", travelerSchema);

export default Traveler;