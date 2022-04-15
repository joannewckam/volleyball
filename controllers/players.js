const PlayerModel = require('../models/player.js');

module.exports = {
	create,
	index,
	deletePlayer,
	editPlayer,
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
		res.status(200).json('player ok!');
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

async function deletePlayer(req, res) {
	try {
		deletedPlayer = await PlayerModel.findByIdAndDelete(req.body.p_id).exec();
		let players = await PlayerModel.find({}).exec();
		res.status(200).json(players);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function editPlayer(req, res) {
	console.log(req.body);
	try {
		let players = await PlayerModel.findByIdAndUpdate(
			{ _id: req.body.id },
			{
				name: req.body.name,
				position: req.body.position,
				number: req.body.number,
			},
			{ returnDocument: 'after' }
		).exec();
		res.status(200).json(players);
	} catch (err) {
		res.status(400).json(err);
	}
}
