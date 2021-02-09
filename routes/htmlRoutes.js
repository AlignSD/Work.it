// Dependencies
const path = require("path");
const router = require("express").Router();

// set path to public folder for easier to use filepaths
let publicPath = path.join(__dirname, '../public');


    // GET index.html
    router.get("/", (req, res) => {
        res.sendFile('/index.html', { root: publicPath });
    })

    // GET stats.html
    router.get("/stats", (req, res) => {
        res.sendFile('/stats.html', { root: publicPath });
    })

    // GET excercise.html
    router.get("/exercise", (req, res) => {
        res.sendFile('/exercise.html', { root: publicPath });
    })
    
    // export router module
    module.exports = router;