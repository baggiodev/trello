const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	name: String,
	doing: String,
	started: Boolean,
	boardId: String
});

module.exports = mongoose.model("Card", cardSchema);
