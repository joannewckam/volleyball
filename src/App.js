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
		// players: [
		// 	{
		// 		name: "Jo",
		// 		preferredPosition: "",
		// 		number: "",
		// 	},
		// ],
	};

	render() {
		return (
			<main className="App">
				<Header />
				<Gym />
				<PlayerIcon />
				<nav className="navBar">
					<AuthPage />
					<Nav links={this.state.links} />
					<Route
						path="/players"
						render={(props) => <PlayersPage players={this.state.players} />}
					/>
				</nav>
			</main>
		);
	}
}
