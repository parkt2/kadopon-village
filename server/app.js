import express from "express";
import mongoose from "mongoose";

import {MONGO_CONNECT} from "../config";

const app = express();
const port = process.env.PORT || 5000;

// mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_CONNECT);

app.get("/api/hello", (req, res) => {
  res.send({ express: "hello hello" });
});

// routing stuff should go here...

app.listen(port, () => console.log(`Listening on port ${port}`));
