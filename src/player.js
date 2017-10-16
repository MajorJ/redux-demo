import React, { Component } from 'react';

class Player extends Component {
	render() {
		const {
			playerName, gamesPlayed, goals, assists, points, penaltyMinutes,
		} = this.props.player;

		return (
			<div className="player">
				<button>
					{playerName}
				</button>
				<table>
					<tbody>
						<tr>
							<th>Games Played</th>
							<th>Goals</th>
							<th>Assists</th>
							<th>Points</th>
							<th>Penalty Minutes</th>
						</tr>
						<tr>
							<td>{gamesPlayed}</td>
							<td>{goals}</td>
							<td>{assists}</td>
							<td>{points}</td>
							<td>{penaltyMinutes}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Player;
