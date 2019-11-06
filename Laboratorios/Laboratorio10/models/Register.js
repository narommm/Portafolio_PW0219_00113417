const Mongoose = require('mongoose')
const RegisterSchema = Mongoose.Schema({
    carnet: String,
    schedule: String,
    isLate: Boolean,
    datetime: Date
})


//model que me cree una tabla ocupa como molde al RegisterSChema que acabo de crear arriba
module.exports = Mongoose.model('Register', RegisterSchema)

