const FormationModel = require("../models/formation.js");

module.exports = {
	create,
	index,
};

async function create(req, res) {
	try {
		// 1. put the player in the database (the data will be incoming via `req.body`)
		console.log(req.body);
		await FormationModel.create({
			name: req.body.name,
			x: req.body.x,
			y: req.body.y,
		});
		// 2. send a response to frontend - typically we send back the newly created or just an 'ok'
		res.status(200).json("formation added!");
		console.log(res);
	} catch (err) {
		res.json(err);
	}
}

async function index(req, res) {
	try {
		console.log(req.body);
		let formation = await FormationModel.find({}).exec();
		res.status(200).json(formation);
	} catch (err) {
		res.status(400).json(err);
	}
}
