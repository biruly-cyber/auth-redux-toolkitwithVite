import express from "express";
import { connectDatabase } from "../config/database.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//routes
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
//connect db
connectDatabase();

//listen the port
app.listen(3000, () => {
  console.log("server is listening on port 3000!");
});

app.get("/", (req, res) => {
  res.json({
    message: "API is working",
  });
});

app.use("/api/v1/auth", userRoute);
