import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Splash extends Component {
	static propTypes = {
		testString: PropTypes.string,
	};

	render() {
		const {
			testString,
		} = this.props;

		return (
			<div>
				<p>{testString}</p>
				<a href="/game">&gt;&gt;game</a>
			</div>
		);
	}
}
