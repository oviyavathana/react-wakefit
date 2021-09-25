import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';


class Routes extends Component {
	state = {};
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Header} />
                    <Route path="/" component={Footer} />
                    
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
