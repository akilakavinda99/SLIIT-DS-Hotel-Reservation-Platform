import bcrypt from "bcrypt";
import express from "express";
import Traveler from "../models/traveler.js";

const router = express.Router();

//Login
router.route("/login").post((req, res) => {

    const { email, password } = req.body;


    Traveler.findOne({ email: email }, (err, traveler) => {


        if (traveler) {

            if (bcrypt.compareSync(password, traveler.password)) {
                res.send({ message: "login sucess", traveler: traveler })

           }else{
               res.send({error:"wrong credentials"})
           }

        }else{
            res.send({error:"not register"})
        }
    })
});


//Register traveler to the system
router.route("/register").post(async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = securePassword

    const newTraveler = new Traveler({
        firstName,
        lastName,
        email,
        password
    })

    newTraveler.save().then(() => {
        res.json("Traveler registered")
    }).catch((error) => {
        res.json(error)
        console.log(error)
    })

})

//Fetch traveler details
router.route("/get/:id").get(async (req, res) => {
    const travelerId = req.params.id;

    await Traveler.findById(travelerId).then((traveler) => {
        req.status(200).send({ status: "Traveler details fetched", traveler });
    }).catch((er) => {
        console.log(er.message)
        res.status(500).send({ status: "Error with fetching data" });
    })

})

export default router;