// Dependencies
const router = require('express').Router();
const db = require('../models');
const ObjectId = require('mongoose').ObjectId;

// GET route to find workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                }
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// POST route to create a new workout entry
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// PUT request to update database with new entries
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate({
        _id: ObjectId(req.params.id)},
        { $push: { exercises: req.body }},
        { new: true }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        }) 
        .catch(err => {
            res.json(err);
        });
});

// GET request for searching on specific date
router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                }
            }
        },
        {
            $sort: {
                day: -1
            }
        },
        {
            $limit: 7
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// Export router module 
module.exports = router;