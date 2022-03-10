const express = require("express");
const router = express.Router();
const formationCtrl = require("../../controllers/formations");

//POST /api/formations
router.post("/", formationCtrl.create);
//GET /api/formations
router.get("/", formationCtrl.index);

module.exports = router;
