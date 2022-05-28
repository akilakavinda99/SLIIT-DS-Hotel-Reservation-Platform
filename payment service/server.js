const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(express.json())


const paymentRouter = require("./routes/payment.js")
app.use("/payment", paymentRouter)

const URL = process.env.MONGODB_URL

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

