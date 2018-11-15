import React from "react";
import {connect} from "react-redux";

import {init, addCard, deleteCard, editCard, addBoard, deleteBoard} from "../actions/trelloActions"

class App extends React.Component {

	addCardFunc = () => {
		console.log(this.props.trello.cardList[this.props.trello.cardList.length-1].id+1)
		const testCard = {
			id: this.props.trello.cardList[this.props.trello.cardList.length-1].id+1,
			name:"testing",
			doing: null,
			boardId: 4,
			started: false
		}
		this.props.addCard(testCard)
	}
	componentDidMount(){
		console.log(this.props.trello);
	}
    render() {
        return (
            <div className="container">
				<button onClick={this.addCardFunc}></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
	  trello: state.trello
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (payload) => {
            dispatch(init(payload));
		},
		addCard: (card) => {
			dispatch(addCard(card))
		},
		deleteCard: (cardId) => {
			dispatch(deleteCard(cardId))
		},
		addBoard: (board) => {
			dispatch(addBoard(board))
		},
		deleteBoard: (boardId) =>{
			dispatch(deleteBoard(boardId))
		},
		editCard:(card) =>{
			dispatch(editCard(card))
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
