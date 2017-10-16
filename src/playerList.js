import React, { Component } from 'react';
import Player from './player';

class PlayerList extends Component {
	render() {
		return (
			<div>
				{this.props.players.map((player) => <Player key={player.playerName} player={player} />)}
			</div>
		);
	}
}

export default PlayerList;
