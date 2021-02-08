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
    app.get("/excercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/excercise.html"));
    });
}