const graphql = require("graphql");
const Card = require("../models/card");
const Board = require("../models/board");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;

const CardType = new GraphQLObjectType({
	name: "Card",
	fields: ( ) => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		doing: { type: GraphQLString },
		started: { type: GraphQLBoolean },
		board: {
			type: BoardType,
			resolve(parent, args){
				return Board.findById(parent.boardId);
			}
		}
	})
});

const BoardType = new GraphQLObjectType({
	name: "Board",
	fields: ( ) => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		cards: {
			type: new GraphQLList(CardType),
			resolve(parent, args){
				return Card.find({ boardId: parent.id });
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		card: {
			type: CardType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				return Card.findById(args.id);
			}
		},
		board: {
			type: BoardType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				return Board.findById(args.id);
			}
		},
		cards: {
			type: new GraphQLList(CardType),
			resolve(parent, args){
				return Card.find({});
			}
		},
		boards: {
			type: new GraphQLList(BoardType),
			resolve(parent, args){
				return Board.find({});
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addBoard: {
			type: BoardType,
			args: {
				name: { type: GraphQLString }
			},
			resolve(parent, args){
				let board = new Board({
					name: args.name
				});
				return board.save();
			}
		},
		addCard: {
			type: CardType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				doing: { type: new GraphQLNonNull(GraphQLString) },
				started: {type: new GraphQLNonNull(GraphQLBoolean)},
				boardId: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args){
				let card = new Card({
					name: args.name,
					doing: args.doing,
					started: args.started,
					boardId: args.boardId
				});
				return card.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
