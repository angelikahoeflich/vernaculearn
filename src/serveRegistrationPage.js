const path = require("path");

module.exports = function (request, response) {
    response.sendFile( path.resolve("./docs/index.html") );
}
