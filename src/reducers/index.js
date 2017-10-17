import actions from '../constants';

const initialState = {
	selectedPlayer: null,
};

const appState = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_SELECTED_PLAYER:
			return Object.assign({}, { selectedPlayer: action.payload });

		default:
			return state;
	}
};

export default appState;
