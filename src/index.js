import React from "react";
import ReactDOM from "react-dom";
import mongoose from "mongoose";

import configureStore from "./configureStore";
import Main from "./containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import {
	MONGO_CONNECT,
} from "./config";

mongoose.connect(MONGO_CONNECT);

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
registerServiceWorker();
