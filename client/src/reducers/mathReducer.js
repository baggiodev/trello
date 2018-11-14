const defaultState = {
    result: 1,
    lastValues: []
}
const mathReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
			break;
		default:
			break;
    }
    return state;
};

export default mathReducer;