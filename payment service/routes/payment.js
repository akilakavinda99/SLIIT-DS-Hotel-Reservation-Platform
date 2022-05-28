const router = require("express").Router();
let Payment = require("../models/paymentModel");
var valid = require("card-validator");

router.route("/add").post((req, res) => {
    const name = req.body.userName;
    const type = req.body.paymentType;
    const email = req.body.email;
    const cardNumber = req.body.cardNumber;

    const newPayment = new Payment({
        userName: name,
        email: email,
        cardnumber: cardNumber,
        paymentType: type,
    });
    console.log(cardNumber);
    var numberValidation = valid.number(cardNumber);
    console.log(numberValidation);

    if (numberValidation.isPotentiallyValid) {
        newPayment
            .save()
            .then(() => {
                console.log("success");
                res.json("Payment success");
            })
            .catch((error) => {
                res.json(error);
                console.log(error);
            });
    } else {
        res.json("Payment Failed Invalid Card Number");
    }
});

module.exports = router;
