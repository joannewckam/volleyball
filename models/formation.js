const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formationSchema = new Schema({
	name: {
		type: String,
	},
	circle1: {
		x: Number,
		y: Number,
	},
	circle2: {
		x: Number,
		y: Number,
	},
	circle3: {
		x: Number,
		y: Number,
	},
	circle4: {
		x: Number,
		y: Number,
	},
	circle5: {
		x: Number,
		y: Number,
	},
	circle6: {
		x: Number,
		y: Number,
	},
});
let FormationModel = mongoose.model("Formation", formationSchema);
module.exports = FormationModel;
