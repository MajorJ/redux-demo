import React, { Component } from 'react';
import PlayerList from './playerList';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">The Jets of 1984-85</h1>
				</header>
				<PlayerList players={this.props.players} />
			</div>
		);
	}
}

export default App;
