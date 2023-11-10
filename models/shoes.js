const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
    shoes_brand: String,
    shoes_quantity: String,
    shoes_cost: Number
})
module.exports = mongoose.model("shoes",
    shoesSchema)