const router = require("express").Router()
let Payment = require("../models/paymentModel")


router.route("/add").post((req, res) => {

    const name = req.body.userName
    const type = req.body.paymentType
    const email = req.body.email
    const cardNumber = req.body.cardNumber
    

    const newPayment = new Payment({
        userName: name,
        email: email,
        cardnumber: cardNumber,
        paymentType: type
    })

    newPayment.save().then(() => {
        res.json("Payment success")
    }).catch((error) => {
         res.json(error)
        console.log(error)
    })

})

module.exports = router