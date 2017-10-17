import actionTypes from '../constants/actionTypes';

const actions = {
	setSelectedPlayer: (playerName) => (
		{
			type: actionTypes.SET_SELECTED_PLAYER,
			payload: playerName,
		}
	),
};

export default actions;
