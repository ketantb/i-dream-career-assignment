const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Register = require('../Register/registerModel/registerModel.js')
const secretKey = "secretkey"

router.post("/signin", async (req, res) => {
    try {
        const { userEmail, password } = req.body
        const user = await Register.findOne({ userEmail: userEmail })
        if (!user || userEmail != user.userEmail) {
            console.log("Invalid Email or Password")
            return res.status(400).send("Invalid Email or Password")

        }
        else if (userEmail != user.userEmail) {
            console.log("Invalid Email")
            return res.status(400).send("Invalid Email")

        }
        if (user) {
            if (password == user.password) {
                const dataTobeSentToFrontend = {
                    _id: userEmail._id
                }
                const token = jwt.sign(dataTobeSentToFrontend, "secretKey", { expiresIn: 10000 })

                res.status(200).send({
                    success: true,
                    message: 'Login Successful',
                    data: { token, userEmail: user.userName }
                });

            }
            else {
                console.log("Invalid Password")
                res.status(400).send("Invalid Password")
            }
        }
    }
    catch (err) {
        res.status(400).send(err)
        console.log(err)
    }
})

module.exports = router;