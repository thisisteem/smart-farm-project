const express = require("express");
const router = express.Router();

const tempSetting = require("../controllers/tempSetting.controller");

router.post("/search", tempSetting.search);

router.post("/create", tempSetting.create);

router.post("/delete", tempSetting.delete);

// router.post("/update", user.update);

module.exports = router;
