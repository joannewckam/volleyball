const express = require("express");
const router = express.Router();
const playerCtrl = require("../../controllers/players");

//POST /api/players
router.post("/", playerCtrl.create);
//GET /api/players
router.get("/", playerCtrl.index);

module.exports = router;
