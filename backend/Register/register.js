const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Register = require('./registerModel/registerModel.js')


router.post("/register", async (req, res) => {
    try {
        const { password, userEmail, userName } = req.body
        if (await Register.findOne({ userEmail })) {
            console.log("Email Already in Use")
            return res.status(400).send("Email Already in Use")
        }
        else {
            const newRegister = new Register(req.body)
            const registerData = await newRegister.save()
            console.log(newRegister)
            res.json({ message: "Registration Successfull" })
        }
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router