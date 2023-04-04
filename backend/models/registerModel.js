const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    password: {type: String, require: true},
    userEmail: {type: String, require: true},
    userName: {type: String, require: true}
})

const Register = mongoose.model("registration", userSchema)
module.exports = Register;