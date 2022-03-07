import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Gym from "./components/Gym/Gym";
import PlayerIcon from "./components/PlayerIcon/PlayerIcon";

export default class App extends Component {
	render() {
		return (
			<main className="App">
				<Header />
				<Gym />
				<PlayerIcon />
				<Nav />
			</main>
		);
	}
}
