import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./configureStore";
import Main from "./containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
registerServiceWorker();
