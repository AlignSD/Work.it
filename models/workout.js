// Dependencies
const mongoose = require('mongoose');
// Schema variable
const Schema = mongoose.Schema;
// Creating WorkoutSchema object
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Type is Required"
            },

            name: {
                type: String,
                trim: true,
                required: "Name is Required"
            },

            duration: {
                type: Number,
                required: "Duration is Required"
            },

            distance:Number,

            weight: Number,

            reps: Number,

            sets: Number
        }
    ]
});
// setting WorkoutSchema model to a variable named Workout
const Workout = mongoose.model("workout", WorkoutSchema)
// export Workout module
module.exports = Workout;