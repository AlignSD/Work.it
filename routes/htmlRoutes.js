const path = require("path");

module.exports = (app) => {

    // GET index.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // GET stats.html
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // GET excercise.html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
}