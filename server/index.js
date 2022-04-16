import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import dinoRoutes from "./routes/dinos.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/dinos", dinoRoutes);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log("Listening on port " + PORT)))
    .catch((err) => console.log(err));
};

connect();
