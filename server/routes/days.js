const express = require("express");
const { addtheDay } = require("../controllers/days");
const router = express.Router();

router.post("/days", addtheDay);
module.exports = router;
