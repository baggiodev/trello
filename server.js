const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const app = express();

// Enable CORS
app.use(cors());

// Request body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));
// Request body cookie parser
app.use(cookieParser());

if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/test");
mongoose.connection.once("open", () => {
	console.log("conneted to database");
});




app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT,function(){
	console.log(`Serving on port ${PORT}`);
});