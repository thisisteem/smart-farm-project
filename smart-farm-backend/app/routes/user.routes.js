const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.post("/search", user.search);

router.post("/create", user.create);

// router.post("/delete", user.delete);

// router.post("/update", user.update);

module.exports = router;
