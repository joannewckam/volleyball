const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	name: { type: String, required: true },
	position: {
		type: String,
		enum: ["OH", "M", "S", "RS"],
	},
	number: { type: Number },
});
let PlayerModel = mongoose.model("Player", playerSchema);
module.exports = PlayerModel;
