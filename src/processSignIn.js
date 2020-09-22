const database = require("../lib/database");
const crypto = require("crypto");

module.exports = function (request, response) {

    console.log("request.body", request.body);

    let hashedPassword = crypto
        .createHmac("sha256", request.body.password)
        .digest("hex");

    console.log("hashedPassword", hashedPassword);

    database.query(

      "SELECT id, first_name, last_name, email FROM users WHERE email=? AND password=?;",

      [
        request.body.emailAddress,
        hashedPassword
      ],

      function(err, results, fields) {
        if (err) console.log(err);
        console.log("results:", results)
        request.session.user = results[0];

        console.log("req.session:", request.session);
      }

    );


    response.redirect("/reg-success?name=" + request.body.emailAddress);
}
