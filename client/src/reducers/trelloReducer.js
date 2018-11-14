const defaultState = {
    boardList: [{
		id: 1,
		name: "To-Do"
	},{
		id:2,
		name:"In Progress"
	},{
		id:3,
		name:"Code Review"
	},{
		id:4,
		name:"Done"
	}
	],
	cardList:[{
		id:1,
		name:"Finish X",
		doing: null,
		boardId: 4,
		started: false
	},{
		id:2,
		name:"Doing Y",
		doing: "Joe",
		boardId: 2,
		started: true
	},{
		id:3,
		name:"Doing Z",
		doing: "Frank",
		boardId: 2,
		started: true
	}]
}
const trelloReducer = (state = defaultState, action) => {
    switch (action.type) {
		case "INIT":
			state = action.payload
			break;
		case "ADD_CARD":
			state = {
				...state,
				cardList: [...state.cardList,action.payload]
			}
			break;
		case "VIEW_ARCHIVE":
			break;
		case "DELETE_CARD":
			let newCardArr = state.cardList.filter((card) =>{return card.id!==action.payload})
			state = {
				...state,
				cardList: newCardArr
			}
			break;
		case "ARCHIVE_CARD":
			break;
		case "ADD_BOARD":
			state = {
				...state,
				boardList: [...state.boardList,action.payload]
			}
			break;
		case "DELETE_BOARD":
			let newBoardArr = state.boardList.filter((board) =>{return board.id!==action.payload})
			state = {
				...state,
				boardList: newBoardArr
			}
			break;
		case "EDIT_CARD":
			state = {
				...state,
				cardList: state.cardList.map(card => card.id === action.payload.id ?
				// transform the one with a matching id
				action.payload : 
				// otherwise return original card
				card
				)
			}
			break;
		default:
			break;
    }
    return state;
};

export default trelloReducer;
