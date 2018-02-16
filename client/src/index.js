import React from "react";
import ReactDOM from "react-dom";

import history from "./history";
import configureStore from "./configureStore";
import Main from "./containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = configureStore();

ReactDOM.render(
	<Main
		store={store}
		history={history}
	/>,
	document.getElementById("root"),
);
registerServiceWorker();
