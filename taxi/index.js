import express from "express";
import mongoose from "mongoose"; // Data Base
import cors from "cors"; // for Cross-Origin
import dotenv from "dotenv";
import taxiRoutes from "./routes/taxi.js"

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use("/taxi", taxiRoutes);
app.get("/", (req, res) => {
  res.send("Hello Sooriya Resort API");
});
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
