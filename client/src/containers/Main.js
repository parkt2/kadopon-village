import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import Error404 from "../components/errors/Error404";

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			response: "",
		};
	}

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.Express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch("/api/hello");
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	}

	// some function here to check if a user is authenticated
	renderRoutes = routes => routes.map(route => (
		<Route
			key={route.key}
			path={route.path}
			exact={route.exact}
			strict={route.strict}
			render={() => (route.component)}
		/>
	));

	render() {
		const routes = [
			{
				key: "splash",
				path: "/",
				component: null, // this can't be null, but you need to fill this out
				exact: true,
			},
		];

		return (
			<div>
				<p>{this.state.response}</p>
				<Router history={createHistory()}>
					<div>
						<Switch>
							{this.renderRoutes(routes)}
							<Route
								path="*"
								component={Error404}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = () => {
	// this is where you get the state from reducers and
	// pass them to this component as props
	// this is useful for getting the authentication status of a
	// user to determine whether to send them to a login page or
	// main page
	return null;
};

const mapDispatchToProps = {
	// this is where you get the dispatch functions from actions
	// and pass them to this component as props
	// this is useful for getting things such as login functions
	// and calling them upon certain actions such as verifying that
	// a user is authenticated before routing them to the proper page
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
