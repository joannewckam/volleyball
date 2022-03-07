import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Gym from "./components/Gym/Gym";
import PlayerIcon from "./components/PlayerIcon/PlayerIcon";

export default class App extends Component {
	render() {
		return (
			<DndProvider>
				<main className="App">
					<Header />
					<Gym />
					<PlayerIcon />
					<Nav />
				</main>
			</DndProvider>
		);
	}
}
