import React from "react";
import ReactDOM from "react-dom";
import mongoose from "mongoose";

import configureStore from "./configureStore";
import Main from "./containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

mongoose.connect("localhost:27017/kadopon");

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
registerServiceWorker();
