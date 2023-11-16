const express = require('express')
const router = express.Router()
const {userWelcome, signUp, logIn, dash} = require("../Controllers/user.controller")


router.get("/", userWelcome)
router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/dashboard", dash)

module.exports = router