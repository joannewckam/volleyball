import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Gym from "./components/Gym/Gym";
import PlayerIcon from "./components/PlayerIcon/PlayerIcon";
import LoginForm from "./components/LoginForm/LoginForm";
import AuthPage from "./pages/AuthPage/AuthPage";
import PlayersPage from "./pages/PlayersPage/PlayersPage";

export default class App extends Component {
	state = {
		user: null,
	};
	setUserInState = (incomingUserData) => {
		this.setState({ user: incomingUserData });
	};
	removeUserFromState = () => {
		this.setState({ user: null });
		localStorage.removeItem("token");
	};

	componentDidMount() {
		let token = localStorage.getItem("token");
		if (token) {
			const payload = JSON.parse(atob(token.split(".")[1]));
			if (payload.exp < Date.now() / 1000) {
				localStorage.removeItem("token");
				token = null;
			} else {
				let userDoc = payload.user;
				this.setState({ user: userDoc });
			}
		}
	}

	render() {
		return (
			<main className="App">
				<Header />
				{this.state.user ? (
					<Switch>
						<Route path="/" exact component={Gym} />
						<Route path="/login" render={(props) => <LoginForm {...props} />} />
						<Route path="/players" render={(props) => <PlayersPage {...props} />} />
						<PlayerIcon />
					</Switch>
				) : (
					<AuthPage user={this.state.user} setUserInState={this.setUserInState} />
				)}
				<Nav
					user={this.state.user}
					removeUserFromState={this.removeUserFromState}
				/>
			</main>
		);
	}
}
