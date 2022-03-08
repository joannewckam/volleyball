import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Gym from "./components/Gym/Gym";
import PlayerIcon from "./components/PlayerIcon/PlayerIcon";
import AuthPage from "./pages/AuthPage/AuthPage";
import PlayersPage from "./pages/PlayersPage/PlayersPage";

export default class App extends Component {
	state = {
		user: null,
		name: "",
		links: ["formations", "teams", "roles", "profile"],
		roles: ["OH", "S", "M", "RS"],
	};

	render() {
		return (
			<main className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Gym} />
					<Route path="/signin" render={(props) => <AuthPage {...props} />} />
					<Route path="/players" render={(props) => <PlayersPage {...props} />} />
					<PlayerIcon />
				</Switch>
				<Nav />
			</main>
		);
	}
}
