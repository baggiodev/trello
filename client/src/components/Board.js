import React from "react";
const Board = (props) => {
    return (
        <div className="board">
			<header>
				<p>{props.name}</p>
			</header>
			<div className="boardContent">
				<div className="card">
					<div className="cardTitle">
						Card #1
					</div>
					<div className="cardBody">
						Author: John
					</div>
				</div>
				<div className="card">
					<div className="cardTitle">
						Card #2
					</div>
					<div className="cardBody">
						Author: Smith
					</div>
				</div>
				<div className="card">
					<div className="cardTitle">
						Card #3
					</div>
					<div className="cardBody">
						Author: Frank
					</div>
				</div>
			</div>
        </div>
    );
};

export default Board;