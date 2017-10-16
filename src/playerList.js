import React, { Component } from 'react';
import Player from './player';

class PlayerList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: null,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(playerName) {
		this.setState((prevState) => ({
			isExpanded: prevState.isExpanded === playerName ? null : playerName,
		}));
	}

	render() {
		return (
			<div>
				{this.props.players.map((player) => (
					<Player
						key={player.playerName}
						onClick={this.handleClick}
						player={player}
						isExpanded={player.playerName === this.state.isExpanded}
					/>
				))}
			</div>
		);
	}
}

export default PlayerList;
