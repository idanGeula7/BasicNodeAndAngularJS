"use strict";
const express = require("express");
const router = express.Router();
// const resourceBL = require("./resource/resource.bl");
//const config = require("./config");

router.get("/test", (req, res) => {
    res.status(200).json({
        msg: "hi :)"
    });
});



module.exports = router;