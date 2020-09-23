const path = require("path");

module.exports = function (req, res) {
    console.log("req.session:", req.session);
    req.session.coolness = 1;
    console.log("req.session:", req.session);
    res.sendFile( path.resolve("./docs/signin.html") );
}
