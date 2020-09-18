const database = require("../lib/database");
const crypto = require("crypto");

module.exports = function (request, response) {

    let hashedPassword = crypto
        .createHmac("sha256", request.body.password)
        .digest("hex");


    database.query(

      "INSERT INTO users (first_name, last_name, email, password, email_verified) VALUES (?,?,?,?,?);",

      [
        request.body.firstName,
        request.body.lastName,
        request.body.emailAddress,
        hashedPassword,
        0
      ],

      function(err, results, fields) {
        if (err) console.log(err);
        console.log("results:", results)
      }

    );


    response.send("Yeah yeah, received your form!");
}
