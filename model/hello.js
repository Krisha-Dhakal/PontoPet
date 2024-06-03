import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    pet: {
        type: String,
        enum: ['Dog', 'Cat', 'Kitten', 'Puppy'],
        required: true
    }, 
    services: {
        type: String,
        enum: ['Full Body Wash', 'Nail Trimming', 'Regular Checkups', 'Vitamins','Vaccinations','Hair Trimming','Nutritional Diet Plan'],
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date. now
    },
    time: {
        type: Number,
        required: true
    }

});

module.exports =  mongoose.model("BookNow", bookSchema)
