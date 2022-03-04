import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav/Nav";

export default class App extends Component {
	render() {
		return (
			<main className="App">
				<Header />
				<Gym />
				<Court />
				<PlayerList />
				<PlayerIcon />
				<GreyCircle />
				<OrangeCircle />
				<Nav />
			</main>
		);
	}
}
