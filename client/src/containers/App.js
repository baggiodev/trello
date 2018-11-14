import React from "react";
import {connect} from "react-redux";

import {init, addCard, deleteCard, editCard, addBoard, deleteBoard} from "../actions/trelloActions"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
	  math: state.math,
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
