const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formationSchema = new Schema({
	name: "",
	x: "",
	y: "",
});
let FormationModel = mongoose.model("Formation", formationSchema);
module.exports = FormationModel;
