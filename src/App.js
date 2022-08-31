import Palette from "./Palette";
import ColorSeed from "./colorSeed";
import generatePalette from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Palettelist from "./Palettelist";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.findPalette = this.findPalette.bind(this);
	}

	findPalette(id) {
		return ColorSeed.find((color) => color.id === id);
	}

	render() {
		return (
			<div>
				<Switch basename="/colors-app">
					<Route
						exact
						path="/"
						render={(routeProps) => (
							<Palettelist palettes={ColorSeed} {...routeProps} />
						)}
					></Route>
					<Route
						exact
						path="/palette/new"
						render={() => <NewPaletteForm />}
					></Route>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					></Route>
					<Route
						path="/palette/:paletteId/:colorId"
						render={(routeProps) => (
							// <h1>SingleColor</h1>
							<SingleColorPalette
								colorId={routeProps.match.params.colorId}
								palette={generatePalette(
									this.findPalette(routeProps.match.params.paletteId)
								)}
							/>
						)}
					></Route>
				</Switch>
				{/* <Palette palette = {generatePalette(ColorSeed[3])}/> */}
			</div>
		);
	}
}

export default App;
