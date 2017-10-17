import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
	createStore,
	// applyMiddleware,
} from 'redux';
// import createLogger from 'redux-logger';
import appReducer from '../reducers';
import { PlayerList } from '.';
import '../app.css';

const store = createStore(
	appReducer
	// applyMiddleware(createLogger)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">The Jets of 1984-85</h1>
					</header>
					<PlayerList players={this.props.players} />
				</div>
			</Provider>
		);
	}
}

export default App;
