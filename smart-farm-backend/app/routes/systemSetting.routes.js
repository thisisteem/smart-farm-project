const express = require("express");
const router = express.Router();

const systemSetting = require("../controllers/systemSetting.controller");

router.post("/search", systemSetting.search);

router.post("/update", systemSetting.update);

// router.post("/create", systemSetting.create);

// router.post("/delete", user.delete);

module.exports = router;
