const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "You must enter type of pet"],
        minlength: [3, "Type must be at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "You must enter a description"],
        min: [3, "Description must be at least 3 characters"],
    },
    skillone: {
        type: String,
        
    },
    skilltwo: {
        type: String,
    },
    skillthree: {
        type: String
    }
})

module.exports = mongoose.model('Pet', PetSchema)