const PlayerModel = require("../models/player.js");

module.exports = {
	create,
	index,
};

async function create(req, res) {
	try {
		// 1. put the player in the database (the data will be incoming via `req.body`)
		console.log(req.body);
		await PlayerModel.create({
			name: req.body.name,
			position: req.body.position,
			number: req.body.number,
		});
		// 2. send a response to frontend - typically we send back the newly created or just an 'ok'
		res.status(200).json("Player added!");
		console.log(res);
	} catch (err) {
		res.json(err);
	}
}

async function index(req, res) {
	try {
		console.log(req.body);
		let players = await PlayerModel.find({}).exec();
		res.status(200).json(players);
	} catch (err) {
		res.status(400).json(err);
	}
}
