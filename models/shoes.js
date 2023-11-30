const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
    shoes_brand: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    shoes_quantity: String,
    shoes_cost:{
        type:Number,
        required:true,
        min:0,
        max:500

    } 
})
module.exports = mongoose.model("shoes",
    shoesSchema)