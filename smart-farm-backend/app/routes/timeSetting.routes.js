const express = require("express");
const router = express.Router();

const timeSetting = require("../controllers/timeSetting.controller");

router.post("/search", timeSetting.search);

router.post("/create", timeSetting.create);

router.post("/delete", timeSetting.delete);

// router.post("/update", user.update);

module.exports = router;
