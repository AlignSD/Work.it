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
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {
                type: Number
            },

            duration: {
                type: Number
            },

            distance: {
                type: Number
            }
        }
    ]
});
// setting WorkoutSchema model to a variable named Workout
const Workout = mongoose.model("Workout", WorkoutSchema)
// export Workout module
module.exports = Workout;