import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './components/NotFound.jsx';
import { Homepage } from './components/Homepage/Homepage.jsx';
import { Dashboard } from './components/Dashboard/Dashboard.jsx';

export class Main extends React.Component {
	render() {
		const { loggedIn, name, profileImage, subscriber, minecraft } = this.props;
		return (
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route
					exact
					path="/dashboard"
					component={() => {
						return (
							<Dashboard
								loggedIn={loggedIn}
								name={name}
								profileImage={profileImage}
								subscriber={subscriber}
								minecraft={minecraft}
							/>
						);
					}}
				/>
				<Route component={NotFound} />
			</Switch>
		);
	}
}
