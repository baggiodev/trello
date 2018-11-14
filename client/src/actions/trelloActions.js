export function init(payload) {
    return {
        type: "INIT",
        payload
    };
}

export function addCard(card) {
    return {
        type: "ADD_CARD",
        payload: card
    };
}

export function deleteCard(cardId) {
    return {
        type: "DELETE_CARD",
        payload: cardId
    };
}

export function addBoard(board) {
    return {
        type: "ADD_BOARD",
        payload: board
    };
}
export function deleteBoard(boardId) {
    return {
        type: "DELETE_BOARD",
        payload: boardId
    };
}

export function editCard(card) {
    return {
        type: "EDIT_CARD",
        payload: card
    };
}