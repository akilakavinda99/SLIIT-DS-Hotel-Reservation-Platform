const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    cardnumber: {
        type: String,
        required: true,
    },
    paymentType: {
        type: String,
        required: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }

})

const PaymentDetails = mongoose.model("PaymentDetails", paymentSchema);
module.exports = PaymentDetails;